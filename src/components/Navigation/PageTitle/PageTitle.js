import classes from './PageTitle.module.css';

function PageTitle(props) {
    
    const {children} = props

    return (
        <div className={classes.PageTitle}>
            {children}
        </div>
    )
}

export default PageTitle
