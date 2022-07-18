import Footer from "../components/homepage/Footer";
import TopNav from "../components/homepage/TopNav";
import Intro from "../components/homepage/Intro";
import BestFeature from "../components/homepage/BestFeature";
import IntroCourses from "../components/homepage/IntroCourses";
import Blog from "../components/homepage/Blog";
import Testimonials from "../components/homepage/Testimonials";
import BrandSchool from "../components/homepage/BrandSchool";
import Benerfit from "../components/homepage/Benerfit";
const Index = () => {
  return (
    <>
      <TopNav />
      <Intro />
      <Benerfit />
      <BestFeature />
      <IntroCourses />
      <Testimonials />
      <BrandSchool />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;
