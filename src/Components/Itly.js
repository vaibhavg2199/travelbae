import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Itly = () => {
  
  const navigate = useNavigate()

  const handleclick = () => {
    navigate('/Italypage')
  }
    return (
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://placehold.co/400x300/EFEFEFF/grey?text=Italy" />
        <Card.Body>
          <Card.Title>Italy</Card.Title>
          <Card.Text>
           Discover the beauty of Italy
          </Card.Text>
          <Button variant="primary" onClick={handleclick}>View Details</Button>
        </Card.Body>
      </Card>
    )
}

export default Itly