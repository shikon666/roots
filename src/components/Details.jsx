import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { useParams } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`https://movie-app-gmc.herokuapp.com/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Button variant="outline-primary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Button variant="outline-warning" onClick={() => navigate("/")}>
        Home
      </Button>
      <Card className="p-5 movieCard" style={{ width: "85%" }}>
        <Card.Img height="500" variant="top" src={movie.imgUrl} />
        <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text>{movie.description}</Card.Text>
          {movie.category?.includes(" | ") ? (
            movie.category?.split(" | ").map((el) => (
              <Link to={`/Categorie/${el}`}>
                <Card.Text>{el}</Card.Text>
              </Link>
            ))
          ) : (
            <Link to={`/Categorie/${movie.category}`}>
              <Card.Text>{movie.category}</Card.Text>
            </Link>
          )}
        </Card.Body>
        <Link to={`/Date/${movie.date}`}>
        <Card.Footer>{movie.date}</Card.Footer>
        </Link>
      </Card>
    </div>
  );
}

export default Details;
