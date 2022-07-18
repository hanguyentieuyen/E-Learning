import {Container} from '@mui/material';
import { 
            AccessAlarm, 
            MonetizationOnOutlined,
            LockOpenOutlined, 
            HeadsetMicOutlined,
            GroupsOutlined
       } from '@mui/icons-material';

const Benerfit = () => {
    return(
        <>
        <div className="wrapper benerfit">
            <Container maxWidth="xl">
                <div className="services">
                    <div className="service">
                        <div className="service-icon bg-red">
                            <AccessAlarm className="icon-outline"/>
                        </div>
                        <span className="service-desc">10k+ Courses</span>
                    </div>
                    <div className="service">
                        <div className="service-icon bg-blue">
                            <LockOpenOutlined className="icon-outline"/>
                        </div>
                        <span className="service-desc">Lifetime Access</span>
                    </div>
                    <div className="service">
                        <div className="service-icon bg-yellow">
                            <MonetizationOnOutlined className="icon-outline"/>
                        </div>
                        <span className="service-desc">Value For Money</span>
                    </div>
                    <div className="service">
                        <div className="service-icon bg-violet">
                            <HeadsetMicOutlined className="icon-outline"/>
                        </div>
                        <span className="service-desc">Lifetime Support</span>
                    </div>
                    <div className="service">
                        <div className="service-icon bg-green">
                            <GroupsOutlined className="icon-outline"/>
                        </div>
                        <span className="service-desc">Community Support</span>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Benerfit;