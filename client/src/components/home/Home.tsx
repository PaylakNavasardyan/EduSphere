import { FC } from 'react'
import image from '../../ExportImages';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

const Home:FC = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homeImage}></div>

      <div className={classes.homeInfo}>
        <h1>Build Skills With<br />Online Course</h1>
        <span>We denounce with righteous indignation and dislike men who are<br />so beguiled and demoraized that cannot trouble.</span>
      </div>

      <div className={classes.homeCategories}>
        <div className={classes.homeContainer}>
            <div className={classes.homeContainerHead}>
                <div className={classes.homeContainerText}>
                    <h2>Top Categories</h2>
                    <span>Explore our Popular Categories</span>
                </div>

                <div className={classes.homeContainerHeadButton}>
                    <Link to='/Courses'><button>All Categores</button></Link>
                </div>
            </div>

            <div className={classes.homeContainerCategories}>
                <img src={image.marketing} alt="development" />
                <img src={image.design} alt="design" />
                <img src={image.comunication} alt="comunication" />
                <img src={image.photography} alt="photography" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home