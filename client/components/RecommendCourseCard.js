import Image from "next/image";


const RecommendCourseCard = (props) => {
    return(
        <div className="recommend-course-card">
          <div className="recommend-course-img">
            <Image  width="100%" height="100%" objectFit="cover" layout="responsive" position="relative" src={props.image} />  
          </div>
          <div className="recommend-course-content">
            <p className="recommend-course-tag">{props.category}</p>
            <p className="recommend-course-name">{props.name}</p>
            <div className="recommend-course-less-dura">
              <span>{props.lesson} lessons</span>
              <span>{props.duration} duration</span>
            </div>
            <button className="btn btn-primary btn-enroll">Enroll</button>
          </div>
        </div>
    )
}

export default RecommendCourseCard;