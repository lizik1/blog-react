import { Card } from "react-bootstrap";
import Button from "./Button";

 
const Post2 = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src="https://mdbootstrap.com/img/new/standard/nature/187.webp"
                width={400}
                height={400}
            />
            <Card.Body>
                <Card.Title>Dan</Card.Title>
                <Card.Text>
                    Sun
                </Card.Text>
                <Button />
            </Card.Body>
        </Card>
    )
}
 
export default Post2;