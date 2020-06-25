import * as React from "react"
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import { Button } from "reactstrap";
import history from "../Utils/History";
import icon_success from "../../Assets/icons/icn_success.svg";

interface Props {
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
}

const SuccessModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <ModalComponent
      centered
      isOpen={modalVisible}
      toggle={() => setModalVisible(false)}
      noFooter
      >
      <div className="hm-success">
        <div className="hm-d-flex hm-just-center hm-mt-3">
          <img src={icon_success} alt="success" />
        </div>

        <h5 className="text-primary hm-mt-4 hm-mb-2 text-center">
          Thank you!
        </h5>
        <p className="hm-mb-5 hm-pl-4 hm-pr-4 text-center">
          <a className="text-primary-light hm-font-normal">{"You’ll receive a call from "}</a>
          <a className="text-primary-light hm-font-bold hm-mb-5 text-center">{"xxx-xxx-xxxx."}</a>
        </p>

        <Button
          onClick={() => history.push("/")}
          className="hm-modal-normal-button hm-font-bold hm-w-100 hm-mb-2 hm-pl-2 hm-pr-2"
          color="danger"
          type="button"
        >
          Done
        </Button>
      </div>
    </ModalComponent>
  )
}

export default SuccessModal