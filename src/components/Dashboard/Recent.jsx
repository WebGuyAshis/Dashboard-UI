import '../../assets/styles/recent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


const Recent = () => {
    return (
        <div className="recent-activities">
            <div className="recent-header">

                <div className="recent-left-header">
                    <h3>Recent Activities</h3>
                    <p>890,344 Sales</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>

            <ul className="recent-list">
                <li className="recent-list-item">
                    <p className='timer'>
                        08:42
                    </p>
                    <div className="msg-track">
                        <p className="circularmsg-track brown">

                        </p>
                        <p className='vertical-track'>

                        </p>
                    </div>

                    <div className="recent-msg">
                        <p>
                        Outlines keep you honest. Indulging in poorly driving and keep structure
                        </p>
                    </div>
                </li>

                <li className="recent-list-item">
                    <p className='timer'>
                        10:00
                    </p>
                    <div className="msg-track">
                        <p className="circularmsg-track green">

                        </p>
                        <p className='vertical-track'>

                        </p>
                    </div>

                    <div className="recent-msg">
                        <h4>AEOL meeting with</h4>
                    </div>
                </li>

                <li className="recent-list-item">
                    <p className='timer'>
                        14:37
                    </p>
                    <div className="msg-track">
                        <p className="circularmsg-track red">

                        </p>
                        <p className='vertical-track'>

                        </p>
                    </div>

                    <div className="recent-msg">
                        <h4>Make deposit <span className='amount-msg'>USD 700</span> to ESL</h4>
                    </div>
                </li>

                <li className="recent-list-item">
                    <p className='timer'>
                        16:50
                    </p>
                    <div className="msg-track">
                        <p className="circularmsg-track blue">

                        </p>
                        <p className='vertical-track'>

                        </p>
                    </div>

                    <div className="recent-msg">
                        <p>
                        Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Recent;