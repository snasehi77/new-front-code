import * as React from "react"
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import history from "../Utils/History";
import { Button } from "reactstrap";

interface Props {
  modalClose: boolean,
  setModalClose: (close: boolean) => void
}

const LeaveModal: React.FC<Props> = ({
  modalClose,
  setModalClose,
}) => {
  return (
    <ModalComponent
      noFooter
      size="md"
      centered
      isOpen={modalClose}
      toggle={() => setModalClose(false)}
    >
      <div className="hm-text-center">
        <div className="hm-modal-title hm-mt-2">
          <b>Are you sure you want to leave?</b>
        </div>
        <h6 className="hm-modal-subtitle hm-mt-2 hm-mb-5 hm-pl-2 hm-pr-2">
          {" "}
          All information will be lost and can not be restored
        </h6>
        <Button
          onClick={() => setModalClose(false)}
          className="hm-modal-cancel-button hm-w-95 hm-mb-2 hm-pl-2 hm-pr-2"
          color="danger"
          type="button"
        >
          Cancel
        </Button>
        <Button
          onClick={() => history.push("/")}
          className="hm-modal-button hm-w-95 hm-mb-1"
          color="light"
          type="button"
        >
          Yes, leave questionnarie
        </Button>
      </div>
    </ModalComponent>
  )
}

export default LeaveModal