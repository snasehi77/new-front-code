import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { range, floor } from "lodash";
import "./ExecuteCaseComponentExtended.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import { ExecutionFlow } from "../../ExecutionFlow";
import Flow from "../../models/Flow";
import reactResponsive from 'react-responsive'

const MediaQuery = reactResponsive

const Media = {
  small: {
    minWidth: 0,
    maxWidth: "1024px"
  },
  large: {
    minWidth: "1024px",
    maxWidth: "100000px"
  }
}

declare var window: any;
const ExecuteFlowCasesComponent = () => {
  const [goodNewsVisible, setGoodNewsVisible] = useState<boolean>(false);
  const [totalSteps, setTotalSteps] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [offsetStep, setOffsetStep] = useState<number>(0);

  const { id } = useParams();
  const onSubmitForm = (flow: Flow, formData: any, stepName: string) => {
    const injuredField = formData.find((i: any) => i.name === 'multiple choice - one answer_4');
    const paramsGTM: any = { 'event': 'formSubmitted', 'Form Name': stepName };
    if (injuredField) {
      paramsGTM['Form Type'] = injuredField.value;
    }
    window.dataLayer.push(paramsGTM);
  }

  const getAllSteps = () => {
    if (!totalSteps) return [];

    return range(0, totalSteps).map(n => ({
      step: n,
      title: `Step ${n + 1}`
    }));
  }

  const onClickPreviousStep = (previousStep: number) => {
    setGoodNewsVisible(false)
    setOffsetStep(previousStep)
  }

  const progress = (currentStep === 0 || totalSteps === 0) ? 0 : floor(currentStep * 100 / totalSteps)

  return (
    <div className="vh-100">
      <MediaQuery {...Media.small}>
        <NavbarComponent
          showProgress={!goodNewsVisible}
          progress={progress}
          light={false}
        />
      </MediaQuery>
      <MediaQuery {...Media.large}>
        <NavbarComponent
          showProgress
          progress={progress}
          light={true}
        />
      </MediaQuery>
      <div className="hm-d-flex">
        <div className="hm-sidebar">
          <div>
            {getAllSteps().map((item) => {
              return (
                <div key={item.step} className="hm-d-flex hm-just-center hm-align-items-center">
                  <div className={"hm-bar" + (item.step === currentStep ? " hm-bar-selected" : "")} />
                  <div
                    onClick={() => onClickPreviousStep(currentStep - item.step + 1)}
                    className={"hm-bar-text" +
                      (item.step === currentStep ? " hm-bar-text-selected" : "") +
                      (item.step < currentStep ? " pointer" : "")
                    }>
                    {item.title}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"hm-flow" + (goodNewsVisible ? " hm-good-news-bg" : "")}>
          <div id="yourcase-hm-view">
            {id && <ExecutionFlow
              offsetStep={offsetStep}
              onSubmitForm={onSubmitForm}
              flowId={parseInt(id)}
              goodNewsVisible={goodNewsVisible}
              onShowGoodNews={(value) => setGoodNewsVisible(value)}
              onChangeStep={(current, total) => {
                setCurrentStep(current)
                setTotalSteps(total)
                setOffsetStep(0)
              }}
              className="yourcase-hm-view-inner-wrapper m-auto" />}
          </div>
        </div>
      </div>
    </div>
  )
}
  ;

export default ExecuteFlowCasesComponent;
