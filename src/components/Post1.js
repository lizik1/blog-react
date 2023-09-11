import { Card } from "react-bootstrap";
import Button from "./Button";

// import imgf from "../../content/manrelax.jpeg";
// console.log(imgf)
 
const Post1 = () => {
    return (
        <Card >
            <Card.Img
                variant="top"
                src =  "https://mdbootstrap.com/img/new/standard/nature/184.webp"
                // src = "/home/lizik/webLess/blog/content/manrelax.jpeg"
                // source={require('manrelax.jpeg')}
                width= {400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Michael</Card.Title>
                <Card.Text>
                    I want to relax...
                </Card.Text>
                <Button />
            </Card.Body>
        </Card>
    );
};
 
export default Post1;