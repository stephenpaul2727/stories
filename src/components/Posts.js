import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => this.setState({posts:data}));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post._id}>
        <Col md={1} xs={6}>
          <FontAwesome name="thumbs-up" size="4x" style={{float:'right',cursor: 'pointer', color: '#18700d'}}/>
          <span className="Post-Votes">{post.votes || 0}</span>
        </Col>
        <Col md={1} xs={6}>
          <FontAwesome name="thumbs-down" size="4x" style={{float:'right',cursor: 'pointer', color: '#770817'}}/>
          <span className="Post-Votes">{post.votes || 0}</span>
        </Col>
        <Col md={10} xs={12}>
          <Panel id={post._id} key={post._id} className="Post-Panel">
            <Panel.Heading>
              <Panel.Title toggle>
                {post.title}
                <FontAwesome name="chevron-circle-down" size="2x" style={{float:'right'}}/>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                {post.body}
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </Col>
      </div>
    ));
    return (
      <div className="Post">
        {postItems}
      </div>
    )
  }
}

export default Posts;
