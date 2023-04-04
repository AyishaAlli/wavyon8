import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carnival from "../../images/homepage/carnival.png";

function ArticleCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={carnival} />
      <Card.Body>
        <Card.Title>In Your Area - Gabriela Jimenez </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;