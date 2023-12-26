import '../../assets/styles/dasharea.css';
import Header from './Header';
import CategoryTabs from './MainPageComp/CategoryTabs';
import Sunheader from './Sunheader';


const DashArea = () =>{
    return(
        <div className="dasharea-container">
            <div className="page-header">
            <Header/>
            <Sunheader/>
            </div>

            <div className="page-main">

                {/* cat tabs */}
                <div className="catTabs-recent">
                    {/* <div className="category-tabs">
                        
                        Tabs
                    </div> */}

                    <CategoryTabs/>

                    <div className="recent-categories">
                        <div className="categories-data">
                            {/* CategoryData */}
                            <div className="category-header">
                                <h3>Categories</h3>
                                <select name="" id="">
                                    <option value="...">Export</option>
                                </select>
                            </div>
                        </div>

                        <div className="recent-activities">
                            {/* recent activities */}
                            recent
                        </div>
                    </div>
                </div>

                <div className="category-blocks">
                    {/* Category blocks */}
                    category blocks
                </div>
            </div>
        </div>
    )
}

export default DashArea;