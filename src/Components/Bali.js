import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Bali = () => {
  const navigate = useNavigate()

  const handleclick = () =>{
    navigate('/balipage')
  }
    return (
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://placehold.co/400x300/EFEFEFF/grey?text=Bali" />
        <Card.Body>
          <Card.Title>Bali</Card.Title>
          <Card.Text>
           Discover the beauty of Bali
          </Card.Text>
          <Button variant="primary" onClick={handleclick}>View Details</Button>
        </Card.Body>
      </Card>
    )
}

export default Bali