import Image from 'next/image';

const FeatureCard = (props) => {
    return(
        <>
           <div className="feature-card">
                <div className="feature-card-img">
                    <Image width={50} height={50} src={props.img}></Image>
                </div>
                <div className="feature-card-text">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </div>
           </div>
        </>
    )
}
export default FeatureCard;