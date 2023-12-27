import '../../assets/styles/dasharea.css';
import Header from './Header';
import CategoryBlocks from './CategoryBlocks';
import CategoryTabs from './CategoryTabs';
import Sales from './Sales';
import Sunheader from './Sunheader';
import NewArrival from './NewArrival';
import Stats from './Stats';
import Widgets from './Widgets';


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
                    <NewArrival/>
                </div>


                <div className="stats-widgets-section">
                    <Stats/>
                    <Widgets/>
                </div>

            </div>
        </div>
    )
}

export default DashArea;