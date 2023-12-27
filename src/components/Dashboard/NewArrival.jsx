import '../../assets/styles/newArrival.css'

import santImg from '../../assets/images/icons/santImg.png'
import telegramImg from '../../assets/images/icons/telegramImg.png'
import ciscoImg from '../../assets/images/icons/ciscoImg.png'
import hrImg from '../../assets/images/icons/hrImg.png'
import ktrImg from '../../assets/images/icons/ktrImg.png'


import toggleImg from '../../assets/images/icons/toggle.png'
import editImg from '../../assets/images/icons/edit.png'
import trashImg from '../../assets/images/icons/trash.png'

const NewArrival = () => {
    return (
        <div className="newArrival-container">
            <div className="newArr-header">

                <div className="newArr-left-header">
                    <h3>New Arrivals</h3>
                    <p>More than 400+ new members</p>
                </div>

                <div className="newArr-right-header">
                    <p>Month</p>
                    <p>Week</p>
                    <p className='active-arrival-filter'>Day</p>

                </div>
            </div>

            <ul className="newArr-list">
                <li className="newArr-list-item">
                    <div className="newArr-left">
                        <img src={santImg} alt="" className="newArr-logo" />
                        <div className="newArr-details">
                            <h4>Sant Outstanding</h4>
                            <p><b>FTP:</b> bprow@bnc.cc</p>
                        </div>
                    </div>

                    <div className="newArr-right">
                        <div className="newArr-amount">
                            <h4>$2,000,000</h4>
                            <p>Paid</p>
                        </div>

                        <div className="newArr-status-cont">
                            <p className='newArr-status approved'>Approved</p>
                        </div>

                        <div className="newArr-btns">
                            {/* Toggler Icon */}
                            <img src={toggleImg} alt="" />
                            {/* Edit Icon */}
                            <img src={editImg} alt="" />
                            {/* Delete Icon */}
                            <img src={trashImg} alt="" />
                        </div>
                    </div>

                </li>

                <li className="newArr-list-item">
                    <div className="newArr-left">
                        <img src={telegramImg} alt="" className="newArr-logo" />
                        <div className="newArr-details">
                            <h4>Telegram Application</h4>
                            <p><b>FTP:</b> bprow@bnc.cc</p>
                        </div>
                    </div>

                    <div className="newArr-right">
                        <div className="newArr-amount">
                            <h4>$4,600,000</h4>
                            <p>Paid</p>
                        </div>

                        <div className="newArr-status-cont">
                            <p className='newArr-status progress'>In Progress</p>
                        </div>

                        <div className="newArr-btns">
                            {/* Toggler Icon */}
                            <img src={toggleImg} alt="" />
                            {/* Edit Icon */}
                            <img src={editImg} alt="" />
                            {/* Delete Icon */}
                            <img src={trashImg} alt="" />
                        </div>
                    </div>

                </li>

                <li className="newArr-list-item">
                    <div className="newArr-left">
                        <img src={ciscoImg} alt="" className="newArr-logo" />
                        <div className="newArr-details">
                            <h4>Cisco Management</h4>
                            <p><b>FTP:</b> bprow@bnc.cc</p>
                        </div>
                    </div>

                    <div className="newArr-right">
                        <div className="newArr-amount">
                            <h4>$560,000</h4>
                            <p>Paid</p>
                        </div>

                        <div className="newArr-status-cont">
                            <p className='newArr-status success'>Success</p>
                        </div>

                        <div className="newArr-btns">
                            {/* Toggler Icon */}
                            <img src={toggleImg} alt="" />
                            {/* Edit Icon */}
                            <img src={editImg} alt="" />
                            {/* Delete Icon */}
                            <img src={trashImg} alt="" />
                        </div>
                    </div>

                </li>

                <li className="newArr-list-item">
                    <div className="newArr-left">
                        <img src={hrImg} alt="" className="newArr-logo" />
                        <div className="newArr-details">
                            <h4>HR Management</h4>
                            <p><b>FTP:</b> bprow@bnc.cc</p>
                        </div>
                    </div>

                    <div className="newArr-right">
                        <div className="newArr-amount">
                            <h4>$57,000</h4>
                            <p>Paid</p>
                        </div>

                        <div className="newArr-status-cont">
                            <p className='newArr-status rejected'>Rejected</p>
                        </div>

                        <div className="newArr-btns">
                            {/* Toggler Icon */}
                            <img src={toggleImg} alt="" />
                            {/* Edit Icon */}
                            <img src={editImg} alt="" />
                            {/* Delete Icon */}
                            <img src={trashImg} alt="" />
                        </div>
                    </div>

                </li>

                <li className="newArr-list-item">
                    <div className="newArr-left">
                        <img src={ktrImg} alt="" className="newArr-logo" />
                        <div className="newArr-details">
                            <h4>KTR Mobile Application</h4>
                            <p><b>FTP:</b> bprow@bnc.cc</p>
                        </div>
                    </div>

                    <div className="newArr-right">
                        <div className="newArr-amount">
                            <h4>$45,200,000</h4>
                            <p>Paid</p>
                        </div>

                        <div className="newArr-status-cont">
                            <p className='newArr-status progress'>In Progress</p>
                        </div>

                        <div className="newArr-btns">
                            {/* Toggler Icon */}
                            <img src={toggleImg} alt="" />
                            {/* Edit Icon */}
                            <img src={editImg} alt="" />
                            {/* Delete Icon */}
                            <img src={trashImg} alt="" />
                        </div>
                    </div>

                </li>

                
            </ul>
        </div>
    )
}

export default NewArrival;