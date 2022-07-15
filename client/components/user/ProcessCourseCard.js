import Image from "next/image";

const ProcessCourseCard = (props) => {
  return (
    <div className="Card-process">
      <div className="recommend-process-card">
        <div className="recommend-process-card-header">
          <Image
            width={50}
            height={50}
            className="recommend-process-card-header-img"
            src={props.logoimage}
          />
          <h5 className="process-course-name">{props.namecourse}</h5>
        </div>
        <div className="recommend-process-card-content">
          <Image
            width={40}
            height={40}
            className="process-card-content-avatar"
            src={props.image}
          />
          <p className="process-course-nameuser">{props.name}</p>
        </div>
        <div className="process-course-unit">
          <span>{props.lesson} lessons</span>
          <span>{props.hours} </span>
        </div>
        <div className=" course-progress">
          {props.percent === 100 ? (
            <p style={{ color: "blue" }}> Completed </p>
          ) : (
            <progress id="file" value={props.percent} max="100">
              {" "}
              ${props.percent} %{" "}
            </progress>
          )}
          {props.percent === 100 ? (
            <p> </p>
          ) : (
            <p className="percent">{props.percent} % </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessCourseCard;
