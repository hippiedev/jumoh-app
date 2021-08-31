import classes from './Sidebar.module.css';
import logo from '../../../assets/logo/jumoh.png';

const Sidebar = () => {
    return (
        <nav className={classes.Sidebar}>
            <div className={classes.Logo}>
                <img src={logo} alt=""/>
                Jumoh
            </div>
            <ul>
                <li><i class="fas fa-home"></i><span>Home</span></li>
                <li><i class="fas fa-graduation-cap"></i><span>Courses</span></li>
            </ul>
        </nav>
    )
}

export default Sidebar
