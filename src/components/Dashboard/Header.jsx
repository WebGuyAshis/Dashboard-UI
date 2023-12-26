import '../../assets/styles/header.css'
// Importing icon Images
import layoutImg from '../../assets/images/icons/layout.png'
import cartImg from '../../assets/images/icons/cart.png'
import equalizerImg from '../../assets/images/icons/equalizer.png'
import compilingImg from '../../assets/images/icons/compiling.png'
import searchImg from '../../assets/images/icons/search.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                {/* For anything to add in left side */}
            </div>

            {/* for Right */}
            <div className="header-right">
                <div className="user-logo">
                    <span>N</span>
                </div>

                <span className='logged-in-user'>Nick Thomas</span>

                <div className="icons">
                    <img src={searchImg} alt="search" />
                    <img src={compilingImg} alt="search" />
                    <img src={equalizerImg} alt="search" />
                    <img src={cartImg} alt="search" />
                    <img src={layoutImg} alt="search" />
                </div>
            </div>
        </div>
    )
}

export default Header;