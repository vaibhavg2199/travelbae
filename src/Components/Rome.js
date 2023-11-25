import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Rome = () => {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/romepage')
  }
  return (
    <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="./rome.svg" />
    <Card.Body>
      <Card.Title>Rome</Card.Title>
      <Card.Text>
       Discover the beauty of Rome
      </Card.Text>
      <Button variant="primary" onClick={handleclick}>View Details</Button>
    </Card.Body>
  </Card>
  )
}

export default Rome