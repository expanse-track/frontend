import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './index.css'

const HistoryCard = ({ title, active, description }) => {
    return (
        <Container>
            <Card className='toddoCardStyle'>
                <Card.Body>
                    <Card.Title>Title  -:  {title}</Card.Title>
                    <Card.Text>
                        Description  -:  {description} <br />
                        Status  -:  {active ? 'Active' : 'Complete'}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}
export default HistoryCard
