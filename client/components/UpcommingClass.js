import Image from 'next/image';
import Slack from '../images/slack.png';

const UpcomingClass = () => {
    return(

        <div className="col-lg-3">
            <div className="upcoming-class-wrapper">
                <div className="upcoming-class-header">
                    <h5>Upcomming Class</h5>
                </div>
                <div className="upcoming-class-cards">
                    <div className="upcoming-class-card">
                        <div className="upcoming-class-img">
                            <Image width="60px" height="60px" src ={Slack}/>
                        </div>
                        <div className="upcoming-class-text">
                            <h6 className="upcoming-class-name">English Language</h6>
                            <span>15 May</span>
                        </div>
                    </div>
                    <div className="upcoming-class-card">
                        <div className="upcoming-class-img">
                            <Image width="60px" height="60px" src ={Slack}/>
                        </div>
                        <div className="upcoming-class-text">
                            <h6 className="upcoming-class-name">English Language</h6>
                            <span>15 May</span>
                        </div>
                    </div>
                    <div className="upcoming-class-card">
                        <div className="upcoming-class-img">
                            <Image width="60px" height="60px" src ={Slack}/>
                        </div>
                        <div className="upcoming-class-text">
                            <h6 className="upcoming-class-name">English Language</h6>
                            <span>15 May</span>
                        </div>
                    </div>
                    
                </div>
                <button className="btn btn-seeall">See All Upcomming Class</button>
            </div>
        </div>
    )
}

export default UpcomingClass