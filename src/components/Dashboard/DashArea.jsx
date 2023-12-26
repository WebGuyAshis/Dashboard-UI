import '../../assets/styles/dasharea.css';
import Header from './Header';
import CategoryBlocks from './MainPageComp/CategoryBlocks';
import CategoryTabs from './MainPageComp/CategoryTabs';
import Sales from './MainPageComp/Sales';
import Sunheader from './Sunheader';


const DashArea = () => {
    return (
        <div className="dasharea-container">
            <div className="page-header">
                <Header />
                <Sunheader />
            </div>

            <div className="page-main">

                <div className="category-section">
                    {/* cat tabs */}
                    <div className="catTabs-recent">
                        {/* <div className="category-tabs">
                        
                        Tabs
                    </div> */}

                        <CategoryTabs />

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
                    <CategoryBlocks />
                </div>


                <div className="sales-newArr-section">
                    <Sales/>
                </div>


                <div className="stats-widgets-section">

                </div>

            </div>
        </div>
    )
}

export default DashArea;