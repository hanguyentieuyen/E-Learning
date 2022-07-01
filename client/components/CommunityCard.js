import Image from 'next/image';
import Slack from "../images/slack.png"

const CommunityCard = (props) => {
    return(
        <>
            <div className="community-card">
                <Image src={Slack} className="community-logo" />
                <div className="community-text">
                    <h6>{props.title}</h6>
                    <span>{props.quality}k Members</span>
                </div>
            </div>
        </>
    )
}

export default CommunityCard;