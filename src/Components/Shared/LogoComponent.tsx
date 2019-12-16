import React from 'react';
import logoBlack from '../../Assets/Images/logoBlack.png'
import logoWhite from '../../Assets/Images/logoWhite.png'

interface props {
  className?: string,
  styles?: any,
  light?: boolean
}

const LogoComponent = ({className, styles, light}: props) => {


  return <img className={className} style={styles} src={light ? logoWhite : logoBlack } alt=""/>
};

export default LogoComponent;