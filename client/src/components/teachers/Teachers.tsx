import { FC } from 'react';
import classes from './Teachers.module.css';
import image from '../../ExportImages';
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import type { IconBaseProps } from "react-icons";
import { courseArr } from '../courses/Course';
import { Helmet } from 'react-helmet-async';

<Helmet>
  <meta name="description" content="Meet our experienced and dedicated teachers guiding you through each course." />
  <meta name="keywords" content="teachers, instructors, education staff, mentors" />
</Helmet>

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

const Teachers: FC = () => {
  return (
    <div className={classes.teachers}>
      <div className={classes.teachersGuide}>
        <h2>Our Teachers</h2>
        <h3>Meet the EduSphere team</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque quisquam explicabo.</p>
      </div>

      <div className={classes.teachersTeam}>
        <div className={classes.teachersData}>
          <img src={image.teacherone} alt="Content Writing Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Aram Mirzoyan</span>
            <span className={classes.teachersProfession}>{courseArr[0].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
          </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teachertwo} alt="Art and Design Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Mihran Simonyan</span>
            <span className={classes.teachersProfession}>{courseArr[1].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teacherthree} alt="Finance Teacher" />
          <div className={classes.teachersDataSegment}>
          <span className={classes.teachersName}>Zoya Ghukasyan</span>
          <span className={classes.teachersProfession}>{courseArr[2].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teacherfour} alt="Marketing Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Sara Amirkhanyan</span>
            <span className={classes.teachersProfession}>{courseArr[3].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>  

        <div className={classes.teachersData}>
          <img src={image.teacherfive} alt="Comunication Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Marine Aramyan</span>
            <span className={classes.teachersProfession}>{courseArr[4].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teachersix} alt="Network Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Sam Mirzoyan</span>
            <span className={classes.teachersProfession}>{courseArr[5].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teacherseven} alt="Photography Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Hakob Ghukasyan</span>
            <span className={classes.teachersProfession}>{courseArr[6].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.teachersData}>
          <img src={image.teachereight} alt="Videpgraphy Teacher" />
          <div className={classes.teachersDataSegment}>
            <span className={classes.teachersName}>Gaya Lusinyan</span>
            <span className={classes.teachersProfession}>{courseArr[7].name.replace('Course', '')}Teacher</span>
            <div className={classes.teachersSocial}>
              <a href="https://www.facebook.com" target='_blank'>
                <FacebookIcon  size={22} />
              </a>
              <a href="https://www.instagram.com" target='_blank'>
                <InstagramIcon size={22} />
              </a>
              <a href="https://www.x.com" target='_blank'>
                <XIcon size={22}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank'>
                <LinkedinIcon size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers
