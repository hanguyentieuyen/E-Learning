import Footer from "../components/Footer"
import TopNav from "../components/TopNav";
import Intro from "../components/Intro";
import BestFeature from "../components/BestFeature"
import IntroCourses from "../components/IntroCourses"
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import BrandSchool from "../components/BrandSchool";
import Benerfit from "../components/Benerfit";
const Index = () => {
    return (
        <>
            <TopNav/>
            <Intro/>
            <Benerfit/>
            <BestFeature/>
            <IntroCourses/>
            <Testimonials/>
            <BrandSchool/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default Index;