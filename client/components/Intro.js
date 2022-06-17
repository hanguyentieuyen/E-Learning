import {Container, Button} from '@mui/material';
import Image from 'next/image';
import Img1 from '../images/Illustrations.png';
const Intro = () => {
    return (
        <>
        <div className="intro">
            <Container maxWidth="xl">
                <section className="intro-wrapper">
                    <div className="intro-text">
                        <h1 className="intro-title">Learn From World Class Mentors With AnyTime, Anywhere</h1>
                        <p className="intro-description">Finding quality courses with proper guidelines in online is really hard.
                            We provide quality courses with proper guide. Our mentors are highly expericed & expert.
                        </p>
                    </div>
                    <div>
                        <Image
                            height={500}
                            width={500} 
                            src={Img1} alt="illustrations"   
                        />
                    </div>
                </section>
            </Container>
        </div>
        </>
    )
}

export default Intro;