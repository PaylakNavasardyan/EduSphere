import { FC } from 'react'
import classes from './Contacts.module.css';
import { CiPhone, CiLocationOn } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import type { IconBaseProps } from "react-icons";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

<Helmet>
  <meta name="description" content="Get in touch with EduSphere for support, inquiries, or collaboration opportunities." />
  <meta name="keywords" content="contact, support, education help, email, phone" />
</Helmet>

const PhoneIcon: FC<IconBaseProps> = (props) => {
  const IconComponent = CiPhone as React.ComponentType<IconBaseProps>;
  return <IconComponent {...props} />
}

const GmailIcon: FC<IconBaseProps> = (props) => {
  const IconComponent = BiLogoGmail as React.ComponentType<IconBaseProps>;
  return <IconComponent {...props} />
}

const LocationIcon: FC<IconBaseProps> = (props) => {
  const IconComponent = CiLocationOn as React.ComponentType<IconBaseProps>;
  return <IconComponent {...props} />
}

const Contacts:FC = () => {
  return (
    <div className={classes.contacts}>
      <div className={classes.contactsContainer}>
        <div className={classes.containerGuide}>
          <h2>Conract Information</h2>
          <p>It's very easy to contact us</p>
        </div>

        <div className={classes.containerContacts}>
          <div className={classes.containerContactsContact}>
            <div className={classes.containerIcon}> 
              <PhoneIcon size={24}/>
            </div> 
            <a href="tel:+10241564223" target='_blank'>
              <span>+1024 1564 223</span>
            </a>
          </div>

          <div className={classes.containerContactsContact}> 
            <div className={classes.containerIcon}>
              <GmailIcon size={24} />
            </div>
            <a href="https://www.gmail.com" target='_blank'>
              <span>edusphere@gmail.com</span>
            </a>
          </div>

          <div className={classes.containerContactsContact}> 
            <div className={classes.containerIcon}>
              <LocationIcon size={24} />
            </div>
            <a href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+USA/@42.3467604,-71.0786931,644m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x3b977ca25eeffaaa!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11p106jvz9?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            target='_blank'>
              <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </a>
          </div>
        </div>

        <div className={classes.contactsButton}>
          <Link to='/Registration'>
            <button>Registration</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contacts
