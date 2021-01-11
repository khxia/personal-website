import Link from 'next/link'
import React, { ReactComponentElement } from "react"
import PropTypes from 'prop-types';
import Image from 'next/image'
import Header from '../Header/Header';

 
const IconLink = ({icon, link }: {link: string, icon: any}) => {
	return (
		<a target="_blank" href={link}>
			<Image src={icon} width={30} height={30} />
		</a>
	);
}

const Footer = () => {
    return(
      <div style={{
        marginTop: `50px`,
        display: `flex`,
        flexDirection: `row`,
        alignItems: `baseline`,
        justifyContent: `space-evenly`,
		flexWrap: `wrap`,
      }}>
		<IconLink icon="/images/facebook.png" link="https://www.facebook.com/alex.xia.58/"/>
		<IconLink icon="/images/github-logo.png" link="https://github.com/khxia/"/>
		<IconLink icon="/images/linkedin-logo.png" link="https://www.linkedin.com/in/alex-xia-52065019a/"/>
      </div>
    );
}

export default Footer;