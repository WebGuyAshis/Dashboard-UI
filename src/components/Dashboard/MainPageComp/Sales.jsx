import '../../../assets/styles/sales.css'
import bookImg from '../../../assets/images/icons/BookImg.png'
import micImg from '../../../assets/images/icons/Micimg.png'
import msgImg from '../../../assets/images/icons/msgImg.png'
import attachImg from '../../../assets/images/icons/attachImg.png'
import secoreImg from '../../../assets/images/icons/secureImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Sales =()=>{
    return(
        <div className="sales-container">
            <div className="sales-header">
                <h3>Sales Progress

                    <span>
                    <FontAwesomeIcon icon={faEllipsis} />
                    </span>
                </h3>

            </div>

            <ul className="sales-record">
                <li className="sales-record-item">
                    <img src={bookImg} alt="" />
                    <div className="sale-details">
                        <h4>Briviba SaaS</h4>
                        <p>PHP, SQLite, Artisan CLimm</p>
                    </div>
                </li>

                <li className="sales-record-item">
                    <img src={micImg} alt="" />
                    <div className="sale-details">
                        <h4>Briviba SaaS</h4>
                        <p>PHP, SQLite, Artisan CLimm</p>
                    </div>
                </li>

                <li className="sales-record-item">
                    <img src={msgImg} alt="" />
                    <div className="sale-details">
                        <h4>Briviba SaaS</h4>
                        <p>PHP, SQLite, Artisan CLimm</p>
                    </div>
                </li>

                <li className="sales-record-item">
                    <img src={attachImg} alt="" />
                    <div className="sale-details">
                        <h4>Briviba SaaS</h4>
                        <p>PHP, SQLite, Artisan CLimm</p>
                    </div>
                </li>

                <li className="sales-record-item">
                    <img src={secoreImg} alt="" />
                    <div className="sale-details">
                        <h4>Briviba SaaS</h4>
                        <p>PHP, SQLite, Artisan CLimm</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sales;