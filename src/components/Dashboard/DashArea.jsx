import '../../assets/styles/dasharea.css';
import Header from './Header';
import Sunheader from './Sunheader';


const DashArea = () =>{
    return(
        <div className="dasharea-container">
            <Header/>
            <Sunheader/>
        </div>
    )
}

export default DashArea;