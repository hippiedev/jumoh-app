import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './Course.module.css';

const Course = (props) => {
    let description = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    const {children, plan, isLive} = props
    return (
        <div className={classes.Course}>
        <span>
            <div className={classes.plan}>{plan ? plan : 'paid'}</div>
            <h2>{children ? children : 'Web development'}</h2>
            <p>{description}</p>
            <div className={isLive ? classes.live : classes.not_live}>{isLive ? 'live now' : '9:00pm'}</div>
        </span>
        <Button>Continue</Button>
        </div>
    )
}

export default Course
