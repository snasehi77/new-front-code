import React from 'react';
import logoBlack from '../../Assets/Images/yourcase-logo-dark.png'
import logoWhite from '../../Assets/Images/yourcase-logo-light.png'

interface props {
  className?: string,
  styles?: any,
  light?: boolean
}

const LogoComponent = ({className, styles, light}: props) => {


  return <img className={className} style={styles} src={light ? logoWhite : logoBlack } alt=""/>

};

export default LogoComponent;