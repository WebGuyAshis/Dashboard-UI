import '../../../assets/styles/categoryTabs.css'

import saasImg from '../../../assets/images/icons/Library.png'
import mainImg from '../../../assets/images/icons/Layoutgrey.png'
import videoImg from '../../../assets/images/icons/Movie.png'
import salesImg from '../../../assets/images/icons/Equalizergrey.png'
import securityIg from '../../../assets/images/icons/Shield-check.png'


const CategoryTabs = () =>{
    return(
        <div className="category-tabs">
            <div className="category-tabs-blocks">
                <img src={saasImg} alt="" />
                <p>SaaS
                    Application
                </p>
            </div>

            <div className="category-tabs-blocks">
                <img src={mainImg} alt="" />
                <p>Main
                    Categories
                </p>
            </div>

            <div className="category-tabs-blocks active-cat-tab">
                <img src={videoImg} alt="" />
                <p>Video
                    Tutorials
                </p>
            </div>

            <div className="category-tabs-blocks">
                <img src={salesImg} alt="" />
                <p>Sales
                    Statistics
                </p>
            </div>

            <div className="category-tabs-blocks">
                <img src={securityIg} alt="" />
                <p>ARC
                    Security
                </p>
            </div>
        </div>
    )
}

export default CategoryTabs;