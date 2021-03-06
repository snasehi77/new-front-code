import * as React from "react"
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import { Button } from "reactstrap";
import icon_close from "../../Assets/icons/icn_close.svg";

interface Props {
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
  metaData: string
}

const DescriptionModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  metaData
}) => {
  return (
    <ModalComponent
      centered
      isOpen={modalVisible}
      toggle={() => setModalVisible(false)}
      noFooter
      >
      <div className="hm-close">
        <Button
          className="hm-p-0 hm-m-0"
          onClick={() => setModalVisible(false)}
          color="link"
          type="button"
        >
          <img src={icon_close} />
        </Button>
      </div>
      <div className="hm-description">
        <h5 className="text-primary hm-mt-4 hm-mb-2">
          Why are we asking you this question?
        </h5>
        <p className="hm-mb-2">
          {metaData}
        </p>
      </div>
      </ModalComponent>
  )
}

export default DescriptionModal