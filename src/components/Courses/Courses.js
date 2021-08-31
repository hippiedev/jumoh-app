import React from 'react';
import PageTitle from '../Navigation/PageTitle/PageTitle';
import Course from './Course/Course';
import classes from './Courses.module.css';

const Courses = () => {
    return (
        <div className={classes.Courses}>
            <PageTitle>courses</PageTitle>
            <Course plan="free" />
            <Course isLive={true} />
            <Course>Learn about life</Course>
        </div>
    )
}

export default Courses
