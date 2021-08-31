import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './Course.module.css';

const Course = (props) => {
    const {children, plan} = props
    return (
        <div className={classes.Course}>
        <span>
            <div className={classes.plan}>{plan ? plan : 'paid'}</div>
            <h2>{children ? children : 'Web development'}</h2>
        </span>
        <Button>Continue</Button>
        </div>
    )
}

export default Course
