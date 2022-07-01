
import {FaGem} from "react-icons/fa";

const OverviewCard = (props) => {
    return(
        <>
            <div className="overviewcard col">
                <div className="overviewcard-icon">  
                    <FaGem/>
                </div>
                <span>{props.title}</span>
                <h1>{props.quality}</h1>
            </div>
        </>
    )
}

export default OverviewCard;