import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { Link, useParams } from 'react-router-dom'

function Date({movies}) {
  const {date}=useParams()
  return (
    <div>
    <Row xs={1} md={3} className="g-4">
        {movies?.filter(el => Number(el.date) <= Number(date)).map(el=>  (
          <Col>
            <Card>
              <Link to={`/movie/${el._id}`}><Card.Img height="450" variant="top" src={el.imgUrl} /></Link>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  {el.description}
                 
                </Card.Text>
              </Card.Body>
              <Card.Footer className='d-flex justify-content-center'>
              <ReactStars
                    value={el.rate}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
  )
}

export default Date