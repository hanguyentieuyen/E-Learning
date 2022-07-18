import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
const TestimonialsCard = (props) => {
    return(
        <>
            <div className="testimonials-card">
                <div className="testimonials-card-header">
                    <Image width="80" height="80"src={props.img} />
                    <div className="testimonials-card-user">
                        <span className="testimonials-card-name">{props.name}</span>
                        <span className="testimonials-card-job">{props.job}</span>
                    </div>
                    <div className="testimonials-card-ratting"></div>
                </div>
                <p className="testimonials-card-review">{props.review}</p>
            </div>
        </>
    )
}

export default TestimonialsCard;