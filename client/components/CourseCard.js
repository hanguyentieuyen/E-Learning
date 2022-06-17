import Image from "next/image";
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const CourseCard = (props) => {
    return(
        <>
            <div className="course-card">
                <Image className="course-card-img" width="350" height="200" src={props.img}></Image>
                <h6 className="course-card-title">{props.title}</h6>
                <span className="course-card-author"><PersonOutlinedIcon/> {props.author}</span>
                <div className="course-card-sp">
                    <span><PlayLessonOutlinedIcon/> {props.lesson}</span>
                    <span><AccessTimeOutlinedIcon/> {props.duration}</span>
                </div>
                <div>
                    <span className="course-card-price"><PaidOutlinedIcon/> {props.price}</span>
                </div>
            </div>
        </>
    )
}

export default CourseCard;