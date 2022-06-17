import { Container } from "@mui/material";
import Image from "next/image";
import Duke from "../images/duke.png";
import IBM from "../images/ibm.png";
import Google from "../images/google.png";
import Microsoft from "../images/microsoft.png";
import Zoom from "../images/ZoomLogo.png";
const BrandSchool = () => {
    return(
        <>
            <div className="wrapper brand">
                <Container maxWidth="xl">
                    <h2 className="brand-title">Our 100+ Companies Learning With Us</h2>
                    <div className="brand-images">
                        <Image width="150" height="50"src={Google}/>
                        <Image width="150" height="50"src={IBM}/>
                        <Image width="200" height="50"src={Microsoft}/>
                        <Image width="200" height="50"src={Zoom}/>
                        <Image width="150" height="50"src={Duke}/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BrandSchool;