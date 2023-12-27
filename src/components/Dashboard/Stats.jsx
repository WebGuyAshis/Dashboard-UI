import '../../assets/styles/stats.css'
import { Chart } from "react-google-charts";

const Stats = () => {
    const data = [
        ["", "Sales", "Expenses"],
        ["1 Aug", 75, 58],
        ["8 Aug", 100, 80],
        ["15 Aug", 125, 112],
        ["22 Aug", 122, 105],
        ["25 Aug", 118, 110],
        ["8 Sep", 142, 130],
        
    ];

    const options = {
        colors: ["#FFA800", "#E5EAEE"],
        legend: { position: "none" }
      };

    return (
        <div className="stats-container">
            <div className="stats-header">

                <div className="stats-left-header">
                    <h3>New Arrivals</h3>
                    <p>More than 400+ new members</p>
                </div>

                <div className="stats-right-header">
                    <p>Month</p>
                    <p>Week</p>
                    <p className='active-arrival-filter'>Day</p>
                </div>
            </div>

            <div className="stats-chart">
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="300px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Stats;