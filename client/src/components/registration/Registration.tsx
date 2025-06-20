import { FC, useState } from 'react';
import classes from './Registration.module.css';
import { courseArr } from '../courses/Course';
import { Helmet } from 'react-helmet-async';
import { Payloades } from './RegTypes';

<Helmet>
  <meta name="description" content="Register on EduSphere to access top-quality courses and track your learning progress." />
  <meta name="keywords" content="register, sign up, student registration, join, education platform" />
</Helmet>

const Registration:FC = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [area, setArea] = useState<string | number>(''); 

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSelected(event.target.id); 
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!name.trim()) {
            alert('Please fill in your full name');
            return;
        }
    
        const checkedName = name.trim().split(/\s+/);
        if (checkedName.length < 2) {
            alert('Please enter your full name (first and last)');
            return;
        }
    
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const trimmedEmail = email.trim();
        const checkedEmail = emailCheck.test(trimmedEmail)
        if (!trimmedEmail || !checkedEmail) {
            alert('Please fill in your email again');
            return;
        }
    
        if (!selected) {
            alert('Please select a course');
            return;
        }

        const payload : Payloades = {
            name,
            email,
            area: area || '',
            course: selected
        }
           
        try {
            document.cookie = `name=${name}; path=/;`;
            document.cookie = `email=${email}; path=/;`;
            document.cookie = `course=${selected}; path=/;`;
            document.cookie = `area=${area}; path=/;`;

            console.log('sending datas', payload)
     
            await fetch('http://localhost:5000/Registration', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(payload)
            });                              

            const response = await fetch('http://localhost:5000/Registration');
            const data = await response.json();
            console.log('status information', data);
            console.log('array', courseArr);            

            switch (`${data.status}, ${selected}`) {
                case '200, First Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[0].name}`)
                    }, 1000);     
                    break;
                case '200, Second Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[1].name}`)
                    }, 1000);     
                    break;
                case '200, Third Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[2].name}`)
                    }, 1000);     
                    break;
                case '200, Fourth Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[3].name}`)
                    }, 1000);     
                    break;
                case '200, Fifth Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[4].name}`)
                    }, 1000);     
                    break;
                case '200, Sixth Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[5].name}`)
                    }, 1000);     
                    break;
                case '200, Seventh Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[6].name}`)
                    }, 1000);     
                    break;
                case '200, Eight Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[7].name}`)
                    }, 1000);     
                    break;
                case '200, Ninth Course Name':
                    setTimeout(() => {
                        alert(`Congratulations, you have successfully registered in ${courseArr[8].name}`)
                    }, 1000);     
                    break;
                default:
                    setTimeout(() => {
                        alert('Something went wrong, please try again later!')
                    }, 1000);
                    break;
            };

            if (data.status === '400') {
                setTimeout(() => {
                    alert('Something went wrong, please try again later!')
                }, 1000);
            };

            setName('');
            setEmail('');
            setArea('');
            setSelected(null);
        } catch (error) {
            console.log('Error:', error);
        }
    };

  return (
    <div className={classes.registration}>
        <div className={classes.registrationGuide}>
            <h2>Register on Edusphere</h2>
            <span>Start Your Career With Us</span>
            <span>Start Your Career With Right</span>
        </div>

        <div className={classes.registrationContainer}>
            <div className={classes.registrationDatas}>
                <input 
                    className={classes.input}
                    type="text" 
                    placeholder='Name Surname' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email"
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <textarea 
                    name="Message" 
                    id="message"
                    placeholder='Send a message if you want'
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                ></textarea>
            </div>

            <div onChange={handleSelect} className={classes.registrationBranches}>
                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="First Course Name" className={classes.input}/> 
                    <label 
                        className={selected === 'First Course Name' ? classes.selLabel : classes.label}
                        htmlFor="First Course Name">{courseArr[0].name}
                    </label> 
                </div>
        
                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Second Course Name" /> 
                    <label
                        className={selected === 'Second Course Name' ? classes.selLabel : classes.label} 
                        htmlFor="Second Course Name">{courseArr[1].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Third Course Name" /> 
                    <label 
                        className={selected === 'Third Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Third Course Name">{courseArr[2].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Fourth Course Name" /> 
                    <label 
                        className={selected === 'Fourth Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Fourth Course Name">{courseArr[3].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Fifth Course Name" /> 
                    <label 
                        className={selected === 'Fifth Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Fifth Course Name">{courseArr[4].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Sixth Course Name" /> 
                    <label 
                        className={selected === 'Sixth Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Sixth Course Name">{courseArr[5].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Seventh Course Name" /> 
                    <label 
                        className={selected === 'Seventh Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Seventh Course Name">{courseArr[6].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Eighth Course Name" /> 
                    <label 
                        className={selected === 'Eighth Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Eighth Course Name">{courseArr[7].name}
                    </label> 
                </div>

                <div className={classes.registrationBranchesBranch}>
                    <input type="radio" name="course" id="Ninth Course Name" /> 
                    <label 
                        className={selected === 'Ninth Course Name' ? classes.selLabel : classes.label}
                        htmlFor="Ninth Course Name">{courseArr[8].name}
                    </label> 
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <div className={classes.registrationButton}>
                <button type="submit">Send</button>
            </div>
        </form>
    </div>
  )
}

export default Registration
