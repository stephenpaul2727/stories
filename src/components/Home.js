import React, { Component } from 'react';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <h2>Writing</h2>
                <p>
                  This is a simple react redux based website where i can share my ideas and implementations with the rest of the world.
                </p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
