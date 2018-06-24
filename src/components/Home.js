import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Posts from './Posts';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Welcome to stories</h1>
          <Link to="/about">About</Link>
        </header>

        <Grid fluid className="About-Body">
          <Row>
            <Col>
              <Jumbotron>
                <h2>Stephen's Posts</h2>
                <p>
                  This is a simple react redux based website where i can share my ideas and implementations with the rest of the world.
                </p>
                <p>
                  <Link to="newpost" className="btn btn-primary">Create a new post</Link>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={1} sm={10} mdOffset={1} md={10}>
              <Posts />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
