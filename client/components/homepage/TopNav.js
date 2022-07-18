import Link from "next/link";
import { Container, Button } from "@mui/material";
import Image from "next/image";
import NavImg from "../../images/logo_shopvienthong_new3.png";

const TopNav = () => {
  return (
    <div className="wrapper">
      <Container maxWidth="xl">
        <div className="navbar">
          <Link href="/">
            <Image height={50} width={180} alt="logo" src={NavImg} />
          </Link>
          <ul className="navbar-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Courses</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className="navbar-btn">
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="contained">Register</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TopNav;
