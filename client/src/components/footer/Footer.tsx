import { FC } from 'react'
import classes from './Footer.module.css'
import image from '../../ExportImages';
import { Link } from 'react-router-dom';
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons";

const FacebookIcon: FC<IconBaseProps> = (props) => {
    const IconComponent = CiFacebook as React.ComponentType<IconBaseProps>;
    return <IconComponent {...props} />
}

const InstagramIcon: FC<IconBaseProps> = (props) => {
    const IconComponent = CiInstagram as React.ComponentType<IconBaseProps>;
    return <IconComponent {...props} />
}

const XIcon: FC<IconBaseProps> = (props) => {
    const IconComponent = FaXTwitter as React.ComponentType<IconBaseProps>;
    return <IconComponent {...props} />
}

const LinkedinIcon: FC<IconBaseProps> = (props) => {
    const IconComponent = CiLinkedin as React.ComponentType<IconBaseProps>;
    return <IconComponent {...props} />
}

const Footer:FC = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.footerContainer}>
            <div className={classes.footerGuide}>
                <div className={classes.footerGuideLogo}>
                    <img src={image.logo} alt="EduSphere" />
                    <h2>EduSphere</h2>
                </div>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />Sit sunt quia alias nisi soluta. Cum, cupiditate earum.</span>
            </div>

            <div className={classes.footerHelp}>
                <h2>Get Help</h2>
                <Link to='/Contacts' className={classes.footerHelpLink}>Contacts</Link>
                <Link to='/Registration' className={classes.footerHelpLink}>Registration</Link>
            </div>

            <div className={classes.footerSocial}>
                <h2>We On Social Media</h2>
                <a href="https://www.facebook.com" target='_blank'>
                    <FacebookIcon  size={24} />
                    <span>Faceboook</span>
                </a>
                <a href="https://www.instagram.com" target='_blank'>
                    <InstagramIcon size={24} />
                    <span>Instagram</span>
                </a>
                <a href="https://www.x.com" target='_blank'>
                    <XIcon size={24}/>
                    <span>X</span>
                </a>
                <a href="https://www.linkedin.com" target='_blank'>
                    <LinkedinIcon size={24} />
                    <span>Linkedin</span>
                </a>
            </div>
        </div>

        <div className={classes.footerCopy}>
            <span>Copyright © 2025 LearnPress LMS | Powered by ThimPress</span>
        </div>
    </div>
  )
}

export default Footer