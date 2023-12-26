import "../../assets/styles/sidebar.css";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLayerGroup,
    faShapes,
    faChevronRight,
    faExpand,
    faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// For sidebar
const Sidebar = () => {

    const [dropdown, setDropDown] = useState(false);

    const handleDropDown = () => {

        setDropDown(!dropdown);
    }

    return (
        <div className="sidebar-container">
            {/* Logo */}
            <h1 className="sidebar-logo">
                DASHBOARD
                {/* Icon */}
                <FontAwesomeIcon icon={faAnglesLeft} className="close-sidebar" />
            </h1>

            <div className="sidebar-nav active-sidenav">
                {/* Icon */}
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>Dashboard</span>
            </div>

            <p className="custom-header">Custom</p>

            {/* Custom Sidebar Btns */}
            <div className="sidebar-custom-btns">
                <div className="sidebar-btn">
                    <p className={dropdown ? "active-sub-sidenav" : ""} onClick={handleDropDown}>
                        <div className="btn-data">
                            {/* Icon */}
                            <FontAwesomeIcon icon={faShapes} />
                            <span>Applications</span>
                        </div>
                        {/* Side Arrow Icon*/}
                        <FontAwesomeIcon icon={faChevronRight} className={dropdown ? "active-sidenav-icon":""} />
                    </p>

                    {dropdown && (
                        <ul className="dropdown-list">
                            <li className="dropdown-items">
                                <span>- Users</span>
                                {/* Side Arrow Icon*/}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li className="dropdown-items">
                                <span>- Contacts</span>
                                {/* Side Arrow Icon*/}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li className="dropdown-items">
                                <span>- Chat</span>
                                {/* Side Arrow Icon*/}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                        </ul>
                    )}
                </div>

                <div className="sidebar-btn">
                    <p>
                        <div className="btn-data">
                            {/* Icon */}
                            <FontAwesomeIcon icon={faExpand} />
                            <span>Pages</span>
                        </div>
                        {/* Side Arrow Icon*/}
                        <FontAwesomeIcon icon={faChevronRight} className="" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
