import * as React from "react"
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import { Button } from "reactstrap";
import icon_close from "../../Assets/icons/icn_close.svg";

interface Props {
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
}

//TODO:
const TermsModal: React.FC<Props> = ({
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
          Terms and Conditions
        </h5>
        <p className="hm-mb-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        </p>
      </div>
      </ModalComponent>
  )
}

export default TermsModal