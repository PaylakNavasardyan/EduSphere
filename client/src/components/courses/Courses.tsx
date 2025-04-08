import { FC, useMemo, useState } from 'react';
import classes from './Courses.module.css';
import { courseArr, CourseSources } from './Course';
import { Helmet } from 'react-helmet-async';

<Helmet>
  <meta name="description" content="Browse a variety of courses taught by professional educators on EduSphere." />
  <meta name="keywords" content="online courses, subjects, classes, edusphere, learning" />
</Helmet>

const getFilterCources = (courseArr: CourseSources[], search: string) => {
    if (!search) {
        return courseArr
    };

    return courseArr.filter(course => course.name.toLowerCase().includes(search.toLowerCase()))
};

const Courses:FC = () => {
   const [search, setSearch] = useState<string>('');

   const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
   };

   const filterCourse = useMemo(() => getFilterCources(courseArr, search), [courseArr, search]);

  return (
    <div className={classes.courses}>
      <div className={classes.coursesSearchBar}>
        <input
            type="text"     
            placeholder='Search'
            value={search}    
            onChange={onHandleChange}
        />
      </div>

      <div className={classes.coursesCourse}> 
        {filterCourse.map((course, index) => (           
            <div key={index} className={classes.separatelyCourse}>
                <img src={course.img} alt={course.name} />
                <h2>{course.name}</h2>
                {course.newPrice ? (
                    <span className={classes.oldPrice}>
                        <s>{course.price}</s>
                        <span className={classes.newPrice}>{course.newPrice}</span>
                    </span> 
                ) : (
                    <span className={classes.price}>{course.price}</span>
                )}
            </div>
        ))}
      </div> 
    </div>
  )
}

export default Courses
