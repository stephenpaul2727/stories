import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      votes: 0,
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      votes: this.state.votes,
      body: this.state.body,
    }

    fetch('http://localhost:4000/api/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json()).then(data=>console.log(data));
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Welcome to stories</h1>
          <Link to="/about">About</Link>
        </header>
        <h3> Create a new post </h3><br/>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="postTitle">
            <Col smOffset={1} sm={1}>
              <ControlLabel>TITLE</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl type="text" name="title" placeholder="Title of the post" onChange={this.handleChange} value={this.state.title} />
            </Col>
          </FormGroup>

          <FormGroup controlId="postTitle">
            <Col smOffset={1} sm={1}>
              <ControlLabel>VOTES</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl type="number" name="votes" placeholder="0" onChange={this.handleChange} value={this.state.votes} />
            </Col>
          </FormGroup>

          <FormGroup controlId="postBody">
            <Col smOffset={1} sm={1}>
              <ControlLabel>BODY</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl componentClass="textarea" name="body" placeholder="Body of the post" onChange={this.handleChange} value={this.state.body} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Button type="submit" className="btn-success">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default PostForm;
