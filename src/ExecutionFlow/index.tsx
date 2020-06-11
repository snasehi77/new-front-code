import * as React from "react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import * as Service from "./Services";
import { isEmpty } from "lodash";
import { getValuesChoiceList } from "./Services";
import {
  classNames,
  eventClick,
  getOptions,
  getTag,
  getValueField,
  setDefaultValues,
  toMap
} from "./Utils/Utilities";
import FooterControlsComponent from "./Shared/FooterControlsComponent/FooterControlsComponent";
import LoadingSpinnerComponent from "./Shared/LoadingSpinnerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import icon_close from "../Assets/icons/icn_close.svg";
import BreadcrumbComponent, {
  Breadcrumb
} from "./Shared/BreadcrumbComponent/BreadcrumbComponent";
import ModalComponent from "./Shared/ModalComponent/ModalComponent";
import history from "./Utils/History";
import { Button } from "reactstrap";
import { initialize } from "./ExecutionConfig";
import { Field, FieldTypes } from "./Models";
import ExecutionInput from "../ExecutionInput";
import LeaveModal from "./Components/LeaveModal"

interface Props {
  flowId: number;
  stepId?: number;
  params?: any;
  className?: string;
  breadcrumb?: boolean;
  debug?: boolean;
  onSubmitForm?: (
    flowName: any,
    flow: any[],
    stepName: string,
    fields: any[]
  ) => void;
  onChangeStep?: (
    breadcrumb: any
  ) => void
}

const ExecutionFlow: React.FC<Props> = ({
  flowId,
  className,
  params,
  debug,
  stepId,
  breadcrumb,
  onSubmitForm,
  onChangeStep,
}) => {
  const [currentFlow, setCurrentFlow] = useState<any>({});
  const [flow, setFlow] = useState<any>({});
  const [loadingFlow, setLoadingFLow] = useState(true);
  const [fields, setFields] = useState<Field[]>([]);
  const [values, setValues] = useState<any>({});
  const [defaultValues, setValuesDefault] = useState<any>(null);
  const [breadcrumbData, setBreadcrumbData] = useState<Array<Breadcrumb>>([]);
  const [description, setDescription] = useState("");
  const [modalDescription, setModalDescription] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  useEffect(() => {
    executeFLow(flowId);
  }, [flowId]);

  useEffect(() => {
    if (currentFlow.views) {
      const { views } = currentFlow;
      verifyBreadCrumbData();
      setFields(views[0] ? views[0].fields : []);
    } else {
      setFields([]);
    }

    function verifyBreadCrumbData() {
      const exist = breadcrumbData.find(a => a.id === currentFlow.id);
      if (exist) {
        return;
      }
      let newData = [
        ...breadcrumbData,
        {
          id: currentFlow.id,
          label: currentFlow.name,
          data: currentFlow
        }
      ]
      setBreadcrumbData(newData)
      if (onChangeStep) {
        onChangeStep(newData)
      }
    }
  }, [currentFlow]);

  useEffect(() => {
    if (defaultValues && fields.length) {
      setValues(setDefaultValues(defaultValues, fields));
    }
    return () => {};
  }, [defaultValues, fields]);

  async function executeFLow(id: number) {
    const res: any = stepId
      ? await Service.LaunchFlowIdWithStepId(id, stepId, params ? params : {})
      : await Service.LaunchFlowId(id, params ? params : {});
    if (res && res.item) {
      setFlow({ name: res.item.flow_name });
    }
    setResFlow(res);
  }

  const [endFlow, setEndFlow] = useState<boolean>(false);
  const [endFlowSuccessfully, setEndFlowSuccessfully] = useState<boolean>(
    false
  );

  async function setResFlow(res: any) {
    if (res.success) {
      const array: Field[] = res.item.views[0].fields;
      const newArray = await Promise.all(
        array.map(async (a: Field) => {
          const optRes = a.choice_list_id
            ? await getValuesChoiceList(a.choice_list_id)
            : { item: { values: [] } };
          a.options = optRes.item.values;
          return a;
        })
      );
      res.item.views[0].fields = newArray;
      setCurrentFlow(res.item);
    } else {
      if (
        res &&
        res.message === "We’ve actually captured your info' via submission"
      ) {
        setEndFlowSuccessfully(true);
      } else {
        setEndFlow(true);
      }

      resetValues();
    }
    setLoadingFLow(false);
  }

  useEffect(() => {
    if (fields.length) {
      fields.forEach((a: any) => {
        if (a.field_type === "LABEL" && !description) {
          setDescription(a.id);
        }
      });
    }
  }, [fields]);

  function resetValues() {
    setValues({});
    setCurrentFlow({});
    setLoadingFLow(false);
    setDescription("");
  }

  function getValuesField(type: string, id: string, sg: boolean) {
    switch (type) {
      case "SMALL_TEXT":
      case "LARGE_TEXT":
      case "NUMBER":
      case "TIME":
        return values[id] ? values[id] : "";
      case "RADIO_BUTTON":
        return sg
          ? values[id]
            ? values[id].value
            : {}
          : values[id]
          ? values[id]
          : {};
      case "RADIO_BUTTON_DESCRIPTION":
        return values[id] ? values[id].value : null;
      case "SELECT":
        return values[id] ? values[id] : null;
      case "DATE":
        return values[id] ? values[id] : new Date().getFullYear();
      case "DATE_RANGE":
        return values[id] ? values[id] : { from: new Date(), to: new Date() };
      case "SCHEDULE":
        return values[id] ? new Date(values[id]) : null;
      default:
        return "";
    }
  }

  function setValuesField(id: string, value: any) {
    setValues({ ...values, [id]: value });
  }

  async function setExecuteFlowStep(fieldsData: any, id: number) {
    setLoadingFLow(true);
    const path = breadcrumbData.map(a => a.data.step_id).join(",");
    const res = await Service.executeFLowStep(
      {
        fields: fieldsData,
        path
      },
      currentFlow.flow_execution_id,
      id
    );
    resetValues();
    setResFlow(res);
  }

  async function backFlow(flow: any) {
    setLoadingFLow(true);
    const res = await Service.getExecuteFLowStep(
      flow.flow_execution_id,
      flow.prev_step_execution_id
    );
    if (res && res.success) {
      resetValues();
      setResFlow(res);
      const valuesForm: any = Object.values(res.item.form_data).reduce(
        (obj: any, i: any) => {
          obj[i.id] = i.value;
          return obj;
        },
        {}
      );
      setValuesDefault(valuesForm);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const mapField: any = toMap(fields, "id");
    let resultFields: Array<any> = [];

    Object.keys(values).forEach(f => {
      if (mapField[f]) {
        resultFields.push({
          id: parseInt(f),
          view_id: mapField[f].view_id,
          name: mapField[f].name,
          value: getValueField(
            mapField[f].field_type === "CHOICE_LIST"
              ? mapField[f].format
              : mapField[f].field_type,
            values[f],
            mapField[f].single_value
          ),
          tag: getTag(mapField[f].choice_list_id, mapField[f].options)
        });
      }
    });



    if (onSubmitForm) {
      onSubmitForm(flow, resultFields, currentFlow.name, resultFields);
    }
    setExecuteFlowStep(resultFields, currentFlow.id);
  }

  function navigateToFlow(b: Breadcrumb, index: number) {
    var newData
    if (index !== breadcrumbData.length - 1) {
      backFlow(breadcrumbData[index + 1].data);
      newData = breadcrumbData.slice(0, index + 1)
      setBreadcrumbData(newData);
    } else {
      backFlow(b);
      newData = breadcrumbData.slice(0, index)
      setBreadcrumbData(newData);
    }
    if (onChangeStep) {
      onChangeStep(newData)
    }
  }

  const getLabel = (
    type: FieldTypes,
    format: string,
    label: string,
    url: string
  ) => {
    switch (type) {
      case FieldTypes.LINK:
        if (classNames[format]) {
          return (
            <div className={classNames[format]}>
              {label}
              <a href={url ? url : "#"} target="_blank">
                <b className="hm-ml-2">
                  {classNames[format] === classNames.TERMS_CONDITIONS
                    ? "Read More"
                    : classNames[format] === classNames.CONTACT_FOOTER
                    ? "Contact Us."
                    : ""}{" "}
                </b>
              </a>
            </div>
          );
        } else {
          return label;
        }
      default:
        return label;
    }
  };

  const getClassName = (
    type: FieldTypes | string,
    format: string,
    singleValue: boolean
  ) => {
    switch (type) {
      case FieldTypes.RADIO_BUTTON:
        if (breadcrumbData.length == 1) {
          return "container-grid" // TODO: hard code for now
        }
        return singleValue ? "container-radio" : "container-checkbox";

      case FieldTypes.LINK:
        return classNames[format] ? classNames[format] : "default-link";
      case FieldTypes.LABEL:
        return classNames[format] ? classNames[format] : "default-label";

      default:
        return "";
    }
  };

  const toArrayFlowData = currentFlow.flow_data
    ? Object.keys(currentFlow.flow_data)
    : [];
  const FlowData = currentFlow.flow_data;

  const idForm = () => {
    const FLowName = flow && flow.name ? flow.name : "";
    const stepName = currentFlow && currentFlow.name ? currentFlow.name : "";
    return `${FLowName} ${stepName}`
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("_");
  };

  return endFlowSuccessfully ? (
    <div
      id={idForm()}
      className="hm-h-100 hm-d-flex hm-w-100 hm-just-center hm-align-items-center"
    >
      <div className="hm-view-end-flow hm-px-5 hm-text-center">
        <span className="hm-successfully-icon hm-result-successfully">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="3x"
            className="text-success"
          />
        </span>
        <p className="hm-successfully-text hm-my-2">
          Thanks for your submission.
        </p>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="btn btn-danger hm-m-0 hm-back-button-successfully"
        >
          Back To Homepage
        </button>
      </div>
    </div>
  ) : (
    <div className="hm-view-main-wrapper hm-position-relative hm-h-100 hm-overflow-y-auto">
      <Button
        className="hm-button-close"
        color="link"
        onClick={() => setModalClose(true)}
        type="button"
      >
        <img src={icon_close} />
      </Button>

      {debug && (
        <span className="m-2">
          <b>Outcome:</b>{" "}
          {currentFlow.outcome ? currentFlow.outcome.name : "No outcome"}
        </span>
      )}

      <div className="container-fluid">
        {breadcrumb && (
          <BreadcrumbComponent
            items={breadcrumbData}
            onAction={navigateToFlow}
            currentItem={{
              id: currentFlow.id,
              label: currentFlow.name,
              data: currentFlow
            }}
          />
        )}
      </div>
      <div
        className={
          "hm-m-0 " +
          (className ? className : " hm-w-100 ") +
          (breadcrumb
            ? " hm-min-content-breadcrumb "
            : " hm-min-content-no-breadcrumb ")
        }
      >
        <LoadingSpinnerComponent loading={loadingFlow} />

        <div className="row hm-m-0 hm-p-0">
          <div
            className={(debug ? "col-lg-7" : "col-lg-12") + "  hm-m-0 hm-p-0"}
          >
            <form
              className="hm-view-form"
              onSubmit={e => onSubmit(e)}
              id={idForm().toLocaleLowerCase()}
            >
              {!!fields.length && !loadingFlow && (
                <Fragment>
                  {fields.map((f: Field) => {
                    return (
                      <ExecutionInput
                        key={f.id + "field"}
                        id={f.id + ""}
                        label={getLabel(
                          f.field_type,
                          f.format,
                          f.label,
                          f.prompt
                        )}
                        required
                        name={f.name}
                        url={f.prompt}
                        className={getClassName(
                          f.field_type === FieldTypes.CHOICE_LIST
                            ? f.format
                            : f.field_type,
                          f.format,
                          f.single_value
                        )}
                        radioAction={() => eventClick("onSubmit")}
                        childType={f.format}
                        description={f.id === description}
                        descriptionData={
                          currentFlow.views &&
                          currentFlow.views[0].show_meta_data && (
                            <Button
                              onClick={() => setModalDescription(true)}
                              id={"label_modal_description"}
                              type="button"
                              className="hm-w-100"
                              color="link"
                            >
                              <h5 className="why_this_matters hm-mt-0">
                                Why this matters?
                              </h5>
                            </Button>
                          )
                        }
                        customChecked={
                          <FontAwesomeIcon className="size-13" icon={faCheck} />
                        }
                        placeholder={f.prompt}
                        first={breadcrumbData.length < 2} // TODO: hard code for now
                        singleValue={f.single_value}
                        options={getOptions(f.options).map((a: any) => {
                          a.label = (
                            <span className="hm-view-word-break">
                              {a.label}
                            </span>
                          );
                          a.id = `${idForm()}_${a.value
                            .replace(/[^a-zA-Z ]/g, "")
                            .split(" ")
                            .join("_")}`.toLowerCase();
                          return a;
                        })}
                        onChange={(e: any) => setValuesField(f.id, e)}
                        type={
                          f.field_type === "CHOICE_LIST"
                            ? f.format
                            : f.field_type
                        }
                        value={getValuesField(
                          f.field_type === "CHOICE_LIST"
                            ? f.format
                            : f.field_type,
                          f.id,
                          f.single_value
                        )}
                      />
                    );
                  })}
                </Fragment>
              )}
              <button className="invisible" id="onSubmit" />
            </form>
          </div>
          {debug && !loadingFlow && !endFlowSuccessfully && !endFlow && (
            <div className="col-lg-5">
              <div className="hm-w-100 hm-h-100">
                <h6 className="mb-4">History</h6>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Field</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toArrayFlowData.map((b, i) => (
                      <tr key={i}>
                        <td>{b}</td>
                        <td>{FlowData[b]}</td>
                      </tr>
                    ))}
                    {!toArrayFlowData.length && (
                      <tr>
                        <td colSpan={2} className="text-center">
                          {" "}
                          No data.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <ModalComponent isOpen={endFlow} toggle={() => null} size="md" noFooter>
          <div className="hm-view-end-flow hm-px-5 hm-text-center">
            <p>
              Unfortunately, based on the information provided you do not meet
              the prescreen requirements of the lawyers in our network.
            </p>
            <button
              onClick={() => {
                history.push("/");
              }}
              className="btn btn-danger hm-m-0"
            >
              Back To Homepage
            </button>
          </div>
        </ModalComponent>

        <ModalComponent
          centered
          isOpen={modalDescription}
          toggle={() => setModalDescription(false)}
          noFooter
        >
          <Button
            className="text-black-50"
            onClick={() => setModalDescription(false)}
            color="link"
            type="button"
          >
            <img src={icon_close} />
          </Button>
          <div className="hm-p-3">
            <h5 className="text-primary hm-mb-2">
              Why are we asking you this question?
            </h5>
            <p>
              {currentFlow.views && currentFlow.views[0].meta_data
                ? currentFlow.views[0].meta_data
                : "No description"}
            </p>
          </div>
        </ModalComponent>

        <LeaveModal modalClose={modalClose} setModalClose={(value) => setModalClose(value)} />
      </div>
      {!!fields.length && breadcrumbData.length > 1 && (
        <FooterControlsComponent
          id={idForm().toLowerCase() + "_footer"}
          onBack={() => navigateToFlow(currentFlow, breadcrumbData.length - 1)}
          disabledBack={loadingFlow}
          disabledNext={loadingFlow || isEmpty(values)}
          info={
            !!fields.length
              ? {
                  choiceLists: fields.map(a => a.options),
                  metaData: fields.map((a: any) => a.meta_data)
                }
              : { choiceLists: [], metaData: [] }
          }
          hiddenBack={!currentFlow.prev_step_execution_id}
          hiddenNext={
            !!fields.filter(
              (f: any) =>
                f.format === "BUTTON" ||
                (f.format === "RADIO_BUTTON" && f.single_value) ||
                f.field_type === "BOOLEAN"
            ).length
          }
          onNext={() => eventClick("onSubmit")}
        />
      )}
    </div>
  );
};

export { ExecutionFlow, initialize };
