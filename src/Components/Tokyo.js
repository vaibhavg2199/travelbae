import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Tokyo = () => {
  const navigate = useNavigate()

  const handleclick = () => {
     navigate('/tokoyopage')
  }
    return (
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo" />
        <Card.Body>
          <Card.Title>Tokyo</Card.Title>
          <Card.Text>
           Discover the beauty of Tokyo
          </Card.Text>
          <Button variant="primary" onClick={handleclick}>View Details</Button>
        </Card.Body>
      </Card>
    )
}

export default Tokyo