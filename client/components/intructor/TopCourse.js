import CommunityCard from "../CommunityCard"

const TopCourse = () => {
    return (
        <div className="community-wrapper">
            <div className="community-header">
                <h5 className="community-title">Top Course</h5>
            </div>
            <div className="community-cards">
                <CommunityCard title="Bussiness Management" quality="112"/>
                <CommunityCard title="Web Fundamental" quality="78"/>
                <CommunityCard title="System " quality="78"/>
            </div>
            
        </div>
    )
}

export default TopCourse