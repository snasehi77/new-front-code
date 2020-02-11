import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import ExecutionFlow from "execution-flow";
import {baseUrl} from "../../Utils/Config";
import LogoComponent from "../Shared/LogoComponent";
import history from "../../Utils/History";
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import "./ExecuteCaseComponent.scss";
const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();
    const [endFlow, setEndFlow] = useState<boolean>(false);

    function onActions(a: any) {
      switch (a.case) {
        case "END":
          setEndFlow(true);
          break;
        default:
          break
      }
    }

    return (
      <>
        <LogoComponent onClick={() => {
          history.push("/");
        }} className="m-4" styles={{width: "200px"}}/>
        {id && <ExecutionFlow flowId={parseInt(id)}
                              url={baseUrl}
                              className="col-xl-4 col-lg-6 col-md-8 col-12 m-auto"
                              onAction={onActions}/>}

        <ModalComponent isOpen={endFlow} toggle={() => {
        }} size="md" noFooter>
          <div className="pl-5 pr-5 text-center">
            <p>
              Unfortunately, based on the information provided you do not meet the
              prescreen requirements of the lawyers in our network.
            </p>
            <button onClick={() => {
              history.push('/')
            }} className="btn btn-danger m-3">Back To Homepage
            </button>
          </div>
        </ModalComponent>
      </>
    )
  }
;

export default ExecuteFlowCasesComponent;
