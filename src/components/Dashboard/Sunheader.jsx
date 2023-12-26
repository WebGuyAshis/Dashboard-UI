import '../../assets/styles/sunheader.css'
import addFileImg from '../../assets/images/icons/File Plus icon.png'

const Sunheader = () =>{
    return(
        <div className="sunheader-container">
            <div className="sunheader-left">
                <p>Dashboard</p>
                <p className='separator'></p>
                <p className='add-new-btn'>Add New</p>
            </div>

            <div className="sunheader-right">
                <div className="timeline">
                    <p className='active-timeline'>Today</p>
                    <p>Month</p>
                    <p>Year</p>
                </div>

                <div className="actions">
                    <p>Actions</p>
                    {/* Icon/ Img */}
                    <img src={addFileImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sunheader;