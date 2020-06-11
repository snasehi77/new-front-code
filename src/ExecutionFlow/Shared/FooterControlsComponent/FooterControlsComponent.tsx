// /** @jsx jsx */
import {css, jsx} from "@emotion/core";
import * as React from "react";
import {Fragment, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {toMap} from "../../Utils/Utilities";
import {Button} from "reactstrap";

// import {toMap} from "../../Utils/Utilities";

interface props {
  id?: string;
  onBack?: () => void;
  onNext: () => void;
  info: { choiceLists: Array<any>, metaData: Array<any> };
  disabledBack?: boolean;
  disabledNext?: boolean;
  hiddenNext?: boolean
  hiddenBack?: boolean
}

const FooterControlsComponent = ({
                                   hiddenNext,
                                   hiddenBack,
                                   disabledBack,
                                   disabledNext,
                                   onBack,
                                   onNext,
                                   info,
                                   id
                                 }: props) => {
  const [choiceList, setChoiceList] = useState<Array<any>>([]);
  const [metaData, setMetaData] = useState<any>({});
  const [openDescription, setOpenDescription] = useState(false);
  useEffect(() => {
    if (info.choiceLists && info.metaData) {
      setChoiceList(info.choiceLists.reduce((a: any, b: any) => {
        if (b && b.values) {
          a = [...a, ...b]
        }
        return a;
      }, []));

      setMetaData(toMap(info.metaData.reduce((a: any, b: any) => {
        if (b) {
          a = [...a, ...b]
        }
        return a;
      }, []), "answer_id"));

    }
  }, [info]);

  const items = choiceList.filter((a: any) => metaData[a.id] && metaData[a.id].show_meta_data).length;

  return (
    <div id={id}
         className={"hm-view-footer " + (openDescription ? " hm-show-description " : " hm-collapse-description ")}>

      {!!items &&
      <div className={"container-fluid hm-view-footer-info-drawer hm-px-4 hm-text-left " +
      (openDescription ? " hm-overflow-y-auto " : " hm-overflow-y-hidden ") +
      ` hm-h-${(openDescription ? 80 + (hiddenBack && hiddenNext ? 20 : 0) : (hiddenBack && hiddenNext ? 60 : 0) + 40)}`}>
        <Button className="hm-w-100 hm-text-center" onClick={() => setOpenDescription(e => !e)}
                id={"description_popover"} type="button" color="link">
              <span className="more_info">
           {!openDescription &&
           <Fragment>
             <FontAwesomeIcon icon={faInfoCircle} className="text-primary hm-m-0"/>
             <b className="text-primary"> Get more information about the answers</b>
           </Fragment>
           }
           </span>
        </Button>
        <div className={"row info-drawer-content hm-text-left " + (openDescription ? " hm-d-flex " : "hm-d-none")}>
          <div className="col-12 hm-py-4 hm-px-2">
            <h5 className="text-primary">What do these answers mean?</h5>
          </div>
          {info ? choiceList.map((a: any, i: number) => {
            if (!metaData[a.id] || !metaData[a.id].show_meta_data) {
              return null
            } else
              return (
                <div className="col-lg-3 col-md-8 col-12 info-drawer-content-item hm-text-left hm-px-2" key={i}>
                  <button className="btn btn-primary btn-sm hm-mb-3">
                    {a.label}
                  </button>
                  <p className="text-descriptions hm-mb-5">
                    {metaData[a.id] ? metaData[a.id].description : "No description"}
                  </p>
                </div>
              )
          }) : "No information about this answers"}
        </div>
      </div>}

      <div className={"col-12 hm-d-flex hm-just-center hm-align-items-center bg-white hm-view-footer-controls " +
      (hiddenBack && hiddenNext ? " hm-h-0 " : openDescription ? " hm-h-20 " : items ? " hm-h-60 " : " hm-h-100 ")}>
        {!hiddenBack && <button disabled={disabledBack}
                                onClick={onBack}
                                className={"btn btn-light btn-cyan hm-view-button-back hm-px-5" + (hiddenNext ? "" : " hm-mr-2")}>
          Back
        </button>}
        {!hiddenNext && <button disabled={disabledNext}
                                onClick={onNext}
                                className="btn btn-danger btn-cyan hm-view-button-next hm-px-5">
          Next
        </button>}
      </div>
    </div>

  )
};

export default FooterControlsComponent;
