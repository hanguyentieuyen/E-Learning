import { Container } from "@mui/material";
import FeatureCard from "./FeatureCard";
import StarImg from "../../images/star.png";
import TeacherImg from "../../images/teacher.png";
import JobImg from "../../images/job-search.png";
import ResearchImg from "../../images/research.png";
const BestFeature = () => {
  return (
    <>
      <section className="wrapper feature">
        <Container maxWidth="xl">
          <div className="feature-text">
            <h2 className="feature-title">Why We Are The Best?</h2>
            <p className="feature-description">
              We are the best because we are a complete for your learning
            </p>
          </div>
          <div className="feature-cards">
            <FeatureCard
              img={StarImg}
              title="15 Years Of Glory"
              description="Lorem ipsum dolor sit am, lorem ipsum dolor sit am"
            ></FeatureCard>
            <FeatureCard
              img={TeacherImg}
              title="500+ Expert Mentors"
              description="Lorem ipsum dolor sit am, lorem ipsum dolor sit am"
            ></FeatureCard>
            <FeatureCard
              img={JobImg}
              title="Job placement Support"
              description="Lorem ipsum dolor sit am, lorem ipsum dolor sit am"
            ></FeatureCard>
            <FeatureCard
              img={ResearchImg}
              title="Research and Inovation"
              description="Lorem ipsum dolor sit am, lorem ipsum dolor sit am"
            ></FeatureCard>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BestFeature;
