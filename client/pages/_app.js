import TopNav from "../components/TopNav";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import Footer from "../components/Footer"
function MyApp({Component, pageProps}){
    return (
        <>
            <TopNav/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp;