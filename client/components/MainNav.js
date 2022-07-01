import Image from 'next/image';
import Ava4 from '../images/Avatar4.png';
import {FaRegBell} from "react-icons/fa";

const MainNav = () => {
    return(
        <>
            <div className="mainnav row">
                <h2 className="col">Overview</h2>
         
                <div className="mainnav-user col">
                    <form className="d-flex" role="search">
                        <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"/>
                        {/* <button className="btn btn-sm btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <div className="mainnav-noti"><FaRegBell/></div>
                    <div className="mainnav-username">
                        <Image src={Ava4}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNav;