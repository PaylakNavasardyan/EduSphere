import React, { FC, useState } from "react"
import classes from "./Navbar.module.css"
import image from "../../ExportImages"
import { Link, useLocation } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci"
import type { IconBaseProps } from "react-icons"

const IconWrapper: FC<IconBaseProps> = (props) => {
  const IconComponent = CiMenuBurger as React.ComponentType<IconBaseProps>
  return <IconComponent {...props} />
}

const Navbar:FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const location = useLocation();

  const handleBurgerMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLinkClick = (): void => {
    setIsOpenMenu(false);
  };

  return (
    <div className={`${isOpenMenu ? classes.navbarBurger : classes.navbar}`}>
      <div className={classes.navbarLogo}>
        <img src={image.logo} alt="EduSphere" />
        <span>EduSphere</span>
      </div>

      <div className={classes.navbarLinks}>
        <Link 
          to="/" 
          onClick={handleLinkClick}
          className={`${location.pathname === '/' ? classes.navbarActiveLink : classes.navbarLink}`}
          >Home</Link>
        <Link 
          to="/Courses"
          onClick={handleLinkClick}
          className={`${location.pathname === '/Courses' ? classes.navbarActiveLink : classes.navbarLink}`}
        >Courses</Link>
        <Link 
          to="/Teachers" 
          onClick={handleLinkClick}
          className={`${location.pathname === '/Teachers' ? classes.navbarActiveLink : classes.navbarLink}`}
        >Teachers</Link>
        <Link 
          to="/Contacts" 
          onClick={handleLinkClick}
          className={`${location.pathname === '/Contacts' ? classes.navbarActiveLink : classes.navbarLink}`}
        >Contacts</Link>
        <Link 
          to="/Registration" 
          onClick={handleLinkClick}
          className={`${location.pathname === '/Registration' ? classes.navbarActiveLink : classes.navbarLink}`}
        >Registration</Link>

        <div className={classes.navbarBurgerMenu}>
          <IconWrapper
            className={`${ isOpenMenu ? classes.menuIconRotated : classes.menuIcon}`}
            size={24}
            onClick={handleBurgerMenu} />
        </div>
      </div>
    </div>
  )
}

export default Navbar