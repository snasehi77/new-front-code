import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

interface Props {
	children: React.ReactNode;
	isOpen: boolean;
	toggle: () => void;
	onSuccess?: () => void;
	disabled?: boolean;
	noFooter?: boolean;
	header?: React.ReactNode;
	size?: string;
	title?: string;
	footer?: string;
	onCancel?: () => void;
}

const ModalComponent = ({
													children,
													noFooter,
													isOpen,
													toggle,
													onSuccess,
													disabled,
													header,
													footer,
													size = "md",
													title,
													onCancel
												}: Props) => {
	return (
		<Modal zIndex={2000} toggle={toggle} size={size} isOpen={isOpen}>
			{header || title ? <ModalHeader>{header || title}</ModalHeader> : null}
			<ModalBody>{children}</ModalBody>
			{!noFooter ? <ModalFooter>
				{footer ? (
					footer
				) : (
					<>
						<Button
							disabled={disabled}
							color="secondary"
							onClick={onCancel || toggle}
						>
							Cancel {disabled ? <FontAwesomeIcon icon={faSpinner} spin/> : null}
						</Button>
						<Button
							disabled={disabled}
							color="primary"
							onClick={onSuccess || toggle}
						>
							Save {disabled ? <FontAwesomeIcon icon={faSpinner} spin/> : null}
						</Button>
					</>
				)}
			</ModalFooter> : null}
		</Modal>
	);
};

export default ModalComponent;
