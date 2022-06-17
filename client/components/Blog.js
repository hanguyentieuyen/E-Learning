import { Container } from "@mui/material";
import BlogCard from "./BlogCard";
import ImgMesh from "../images/mesh5.png"
const Blog = () => {
    return(
        <>
        <div className="blog">
            <Container maxWidth="xl">
                <div className="blog-text">
                    <span>Blogs & Updates</span>
                    <h2>Read Blogs From Our Community</h2>
                </div>
                <div className="blog-cards">
                    <BlogCard 
                        img={ImgMesh}
                        title="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams"
                        description="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams..."
                    >
                    </BlogCard>
                    <BlogCard 
                        img={ImgMesh}
                        title="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams"
                        description="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams..."
                    >
                    </BlogCard>
                    <BlogCard 
                        img={ImgMesh}
                        title="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams"
                        description="Microsoft Mesh metaverse dành riêng cho ứng dụng Teams..."
                    >
                    </BlogCard>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Blog;
