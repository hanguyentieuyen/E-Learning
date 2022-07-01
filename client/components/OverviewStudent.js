import OverviewCard from "./OverviewCard";

const OverviewStudent = () => {
    return(
        <div className=" container-fluid">
            <div className="row overview-student">
                <OverviewCard title="Course in Progress" quality="18" />
                <OverviewCard title="Course Complete" quality="97" />
                <OverviewCard title="Certificates Earned" quality="62" />
                <OverviewCard title="Community Support" quality="245" />
            </div>
        </div>
    )
}

export default OverviewStudent;