import '../../assets/styles/dashboard.css'
import DashArea from './DashArea';
import Sidebar from './Sidebar';

const Dashboard = ()=>{
    return(
        <div className="dashboard-container">
            <Sidebar/>
            <DashArea/>
        </div>
    )
}

export default Dashboard;