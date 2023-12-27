import '../../assets/styles/widgets.css'

import statsImg from '../../assets/images/icons/statsImg.png'
import addUserImg from '../../assets/images/icons/addUserImg.png'
import ordersImg from '../../assets/images/icons/ordersImg.png'
import bugImg from '../../assets/images/icons/bugImg.png'


const Widgets = () => {
    return (
        <div className="widgets-container">
            <div className="widgets-item weeklySales">
                <img src={statsImg} alt="" />
                <h3>Weekly Sales</h3>
            </div>

            <div className="widgets-item new-users">
                <img src={addUserImg} alt="" />
                <h3>New Users</h3>


            </div>

            <div className="widgets-item item-orders">
                <img src={ordersImg} alt="" />
                <h3>Item Orders</h3>

            </div>

            <div className="widgets-item bug-reports">
                <img src={bugImg} alt="" />
                <h3>Bug Rreports</h3>

            </div>

        </div>
    )
}

export default Widgets;