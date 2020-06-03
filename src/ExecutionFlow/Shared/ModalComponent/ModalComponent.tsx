import * as  React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  onSuccess?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  noFooter?: boolean;
  header?: React.ReactNode;
  size?: string;
  title?: string;
  footer?: string;
  onCancel?: () => void;
  centered?: boolean
}

const ModalComponent = ({
                          children,
                          noFooter,
                          isOpen,
                          centered,
                          toggle,
                          onSuccess,
                          disabled,
                          isLoading,
                          header,
                          footer,
                          size = "md",
                          title,
                        }: Props) => {
  return (
    <Modal centered={centered} zIndex={2000} toggle={toggle} size={size} isOpen={isOpen}>
      {header || title ? <ModalHeader>{header || title}</ModalHeader> : null}
      <ModalBody>{children}</ModalBody>
      {!noFooter ? (
        <ModalFooter>
          {footer ? (
            footer
          ) : (
            <>
              <Button disabled={isLoading} color="secondary" onClick={toggle}>
                Cancel
              </Button>
              <Button
                disabled={disabled || isLoading}
                color="primary"
                onClick={onSuccess || toggle}
              >
                Save{" "}
                {isLoading ? <FontAwesomeIcon icon={faSpinner} spin/> : null}
              </Button>
            </>
          )}
        </ModalFooter>
      ) : null}
    </Modal>
  );
};

export default ModalComponent;
