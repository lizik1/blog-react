import { Card } from "react-bootstrap";
import Button from "./Button";

// import imgf from "../../content/manrelax.jpeg";
// console.log(imgf)
 
const Post3 = () => {
    return (
        <Card >
            <Card.Img
                variant="top"
                src =  "https://mdbootstrap.com/img/new/standard/nature/189.webp"
                // src = "/home/lizik/webLess/blog/content/manrelax.jpeg"
                // source={require('manrelax.jpeg')}
                width= {400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Kate</Card.Title>
                <Card.Text>
                I went on vacation at the seaside...
                </Card.Text>
                <Button />
            </Card.Body>
        </Card>
    );
};
 
export default Post3;