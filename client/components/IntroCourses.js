import CourseCard from './CourseCard';
import {
            Container, 
            Select, 
            FormControl,
            InputLabel,
            MenuItem, 
            Button, 
            Chip
       } 
        from "@mui/material";
import Figma from "../images/figma.jpg";

const categories = [
    'Development',
    'Business',
    'Design',
    'Marketing'
];



const IntroCourses = () => {

    return(
        <>
        <div className="intro-courses">
            <Container maxWidth="xl">
                <div className="intro-courses-header">
                    <span>Courses</span>
                    <h2>Find The Best Courses For You</h2>
                </div>
                <div className="intro-courses-sort">
                   
                        <FormControl  variant="standard" sx={{ m: 1, width: 300 }}>
                            <InputLabel>Categories</InputLabel>
                            <Select>
                                <MenuItem value={1}>Development</MenuItem>
                                <MenuItem value={2}>Business</MenuItem>
                                <MenuItem value={3}>Design</MenuItem>
                                <MenuItem value={4}>Marketing</MenuItem>

                            </Select>
                        </FormControl>

                </div>
                <div className="intro-courses-list">
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="30 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                        <CourseCard 
                            title="Learn Figma: User Interface Design Essentials-UI/UX Design"
                            author="John Doe"
                            lesson="5 lesson"
                            duration="21.3 hours"
                            price="9.99"
                            img={Figma}
                        >
                        </CourseCard>
                </div>
                <div className="see-more">
                    <Button  variant="contained">See More</Button>
                </div>
            </Container>
        </div>
        </>
    )
}
export default IntroCourses;