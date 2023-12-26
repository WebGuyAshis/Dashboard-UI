import '../../../assets/styles/categoryBlocks.css'

import giftImg from '../../../assets/images/icons/gift.png'
import spinnerImg from '../../../assets/images/icons/spinner.png'
import fingerImg from '../../../assets/images/icons/fingerprint.png'
import patternImg from '../../../assets/images/icons/pattern.png'
import cakeImg from '../../../assets/images/icons/cake.png'
import rocketImg from '../../../assets/images/icons/rocket.png'




const CategoryBlocks = () =>{
    return(
        <div className="category-blocks">
            <div className="category-blocks-items">
                <img src={giftImg} alt="" />
                <h3>Great Gifts</h3>
            </div>

            <div className="category-blocks-items">
                <img src={spinnerImg} alt="" />
                <h3>Great Gifts</h3>
            </div>

            <div className="category-blocks-items">
                <img src={fingerImg} alt="" />
                <h3>Great Gifts</h3>
            </div>

            <div className="category-blocks-items">
                <img src={patternImg} alt="" />
                <h3>Great Gifts</h3>
            </div>

            <div className="category-blocks-items">
                <img src={cakeImg} alt="" />
                <h3>Great Gifts</h3>
            </div>
            <div className="category-blocks-items">
                <img src={rocketImg} alt="" />
                <h3>Great Gifts</h3>
            </div>
        </div>
    )
}


export default CategoryBlocks;