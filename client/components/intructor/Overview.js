import OverviewCard from "../OverviewCard";

const OverviewIntructor = () => {
    return(
            <div className="overview-student">
                <OverviewCard title="Total Courses" quality="5" />
                <OverviewCard title="Total Video" quality="200" />
                <OverviewCard title="Total Earning" quality="$45.000" />
                <OverviewCard title="Engagement" quality="85.2%" />
            </div>
 
    )
}

export default OverviewIntructor;