import * as React from "react"
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import { Button } from "reactstrap";
import icon_success from "../../Assets/icons/icn_success.svg";
import add_to_calendar from "../../Assets/icons/add_to_calendar.svg";

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
        <p className="text-primary-light hm-mb-5 text-center">
          You’ll receive a call from <p className="text-primary-light hm-mb-5 text-center">650-766-6675 Tomorrow morning at 8:45.</p>
        </p>

        <div className="hm-mt-5 hm-mb-5 hm-d-flex hm-just-center hm-align-items-center">
            <div className="hm-add-to-calendar hm-d-flex hm-just-center hm-align-items-center">
              <img src={add_to_calendar} alt="addToCalendar" />
              <p className="text-primary hm-ml-1 hm-mb-0">Add to calendar</p>
            </div>
        </div>

        <Button
          onClick={() => setModalVisible(false)}
          className="hm-modal-normal-button hm-w-100 hm-mb-2 hm-pl-2 hm-pr-2"
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