import React, { Component } from 'react';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>What is stories?</h1>
          <Link to="/">Home</Link>
        </header>

        <Grid fluid className="About-Body">
          <Row>
            <Col sm={6} md={4}>
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
            <Col sm={6} md={4}>
              <Jumbotron>
                <h2>Sharing</h2>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col sm={6} md={4}>
              <Jumbotron>
                <h2>Voting</h2>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
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

export default About;
