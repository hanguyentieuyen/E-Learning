import Image from "next/image";


const RecommendCourseCard = (props) => {
    return(
        <div className="recommend-course-card">
          
          <Image className="recommend-course-img" width="250" height="150"src={props.image} />  
          <p className="recommend-course-tag">{props.category}</p>
          <p className="recommend-course-name">{props.name}</p>
          <div className="recommend-course-less-dura">
            <span>{props.lesson} lessons</span>
            <span>{props.duration} duration</span>
          </div>
          <button className="btn btn-primary btn-enroll">Enroll</button>
        </div>
    )
}

export default RecommendCourseCard;