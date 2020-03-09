import React from "react";
import logoBlack from "../../Assets/Images/yourcase-logo-green.png";
import logoWhite from "../../Assets/Images/yourcase-logo-light.png";

interface props {
  className?: string;
  styles?: any;
  light?: boolean;
  onClick?: () => void;
}

const LogoComponent = ({ className, styles, light, onClick }: props) => {
  return (
    <img
      className={className}
      style={styles}
      src={light ? logoWhite : logoBlack}
      alt=""
      onClick={onClick}
    />
  );
};

export default LogoComponent;
