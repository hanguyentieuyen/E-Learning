import { Container } from "@mui/material";
import Image from "next/image";
import FooterLogo from "../../images/logo_shopvienthong_new3.png";
import AppStore from "../../images/appstore.png";
import PlayStore from "../../images/playstore.png";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

// import {
//         BusinessOutlinedIcon,
//         EmailOutlinedIcon,
//         LocalPhoneOutlinedIcon
//        }
//        from '@mui/icons-material/';

const Footer = () => {
  return (
    <>
      <div className="wrapper footer">
        <Container maxWidth="xl">
          <div className="footer-content">
            <div className="footer-info">
              <Image
                width="180"
                height="50"
                src={FooterLogo}
                alt="Footer Logo"
              ></Image>
              <p>
                <BusinessOutlinedIcon /> 95 Ngo Quyen, Hiep Phu Ward, Ho Chi
                Minh City.{" "}
              </p>
              <p>
                <LocalPhoneOutlinedIcon /> 123.456.789
              </p>
              <p>
                <EmailOutlinedIcon /> info@athl.vn
              </p>
            </div>
            <div className="footer-col">
              <h6>Lastest Courses</h6>
              <ul className="footer-list">
                <li className="footer-item">NFT</li>
                <li className="footer-item">Software Development</li>
                <li className="footer-item">Graphic Design</li>
                <li className="footer-item">Digital Marketing</li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Quick Links</h6>
              <ul className="footer-list">
                <li className="footer-item">Pricing</li>
                <li className="footer-item">Become a mentor</li>
                <li className="footer-item">Career</li>
                <li className="footer-item">About Us</li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>App Download</h6>
              <p>Download Our App From Play Store Or App Store</p>
              <div className="footer-download-img">
                <Image src={AppStore}></Image>
                <Image src={PlayStore}></Image>
              </div>
            </div>
          </div>

          <div className="footer-policy">
            <div className="c">
              <span>Terms Of Use</span>
              <span>Privacy Policy</span>
            </div>
            <div className="footer-policy-right">
              <span>Copyright &copy; 2022 athl.vn</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
