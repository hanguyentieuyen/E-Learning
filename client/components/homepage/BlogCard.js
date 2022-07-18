import Image from "next/image";

const BlogCard = (props) => {
    return(
        <>
            <div className="blog-card">
                <Image className="blog-card-img" width="400" height="250" src={props.img}></Image>
                <div className="blog-content">
                    <h6>{props.title}</h6>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}
export default BlogCard;