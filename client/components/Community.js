import CommunityCard from "./CommunityCard"

const Community = () => {
    return (
        <div className="community-content">
            <div className="community-header">
                <h5 className="community-title">Community Groups</h5>
            </div>
            <div className="community-cards">
                <CommunityCard title="Design Community" quality="112"/>
                <CommunityCard title="SEO Community" quality="78"/>
            </div>
            
        </div>
    )
}

export default Community