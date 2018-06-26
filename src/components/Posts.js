import React, { Component } from 'react';
import { Panel, Col, Tooltip, OverlayTrigger, Button, Modal } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      show: false
    }

    this.handleHide = this.handleHide.bind(this);
  }

  handleUpVote(id) {
    let post = this.state.posts.filter(eachPost => eachPost._id===id)[0];
    post.upvotes++;
    delete post._id;
    fetch('http://localhost:4000/api/posts/'+id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json()).then((data) => window.location.reload()).catch(err => console.log(err));
  }

  handleDownVote(id) {
    let post = this.state.posts.filter(eachPost => eachPost._id===id)[0];
    post.downvotes++;
    delete post._id;
    fetch('http://localhost:4000/api/posts/'+id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json()).then((data) => window.location.reload()).catch(err => console.log(err));
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleDelete(id) {
    fetch('http://localhost:4000/api/posts/'+id, {
      method: 'DELETE'
    }).then(res => res.json()).then(data => {
      if(data.status==="success") {
        alert("successfully deleted post");
        window.location.reload();
      }
      else {
        alert("Deleting failed!");
        this.handleHide();
      }
    }).catch(err => {
      console.log(err);
      this.handleHide();
    });
  }

  componentWillMount() {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => {
        data.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        });
        this.setState({posts:data})
      });
  }

  render() {
    const upVoteToolTip = (
      <Tooltip id="tooltip">
        <strong>Upvote</strong>
      </Tooltip>
    );
    const downVoteToolTip = (
      <Tooltip id="tooltip">
        <strong>Downvote</strong>
      </Tooltip>
    );
    const postItems = this.state.posts.map(post => (
      <div key={post._id}>
        <Col md={1} xs={6}>
          <OverlayTrigger placement="top" overlay={upVoteToolTip}>
            <FontAwesome onClick={this.handleUpVote.bind(this, post._id)} name="thumbs-up" size="4x" style={{float:'right',cursor: 'pointer', color: '#18700d'}}/>
          </OverlayTrigger>
        </Col>
        <Col md={1} xs={6}>
          <OverlayTrigger placement="top" overlay={downVoteToolTip}>
            <FontAwesome onClick={this.handleDownVote.bind(this, post._id)} name="thumbs-down" size="4x" style={{float:'right',cursor: 'pointer', color: '#770817'}}/>
          </OverlayTrigger>
        </Col>
        <Col md={10} xs={12}>
          <Panel id={post._id} key={post._id} className="Post-Panel">
            <Panel.Heading>
              <Panel.Title toggle>
                {post.title}
                <span style={{marginLeft: "15px"}}></span><span style={{fontWeight: 'normal', textDecoration: 'underline', color: '#18700d'}}>{post.upvotes || 0} Upvotes</span> <span style={{marginLeft: "15px"}}></span> <span style={{fontWeight: 'normal', textDecoration: 'underline', color: '#770817'}}>{post.downvotes || 0} Downvotes</span>
                <FontAwesome name="chevron-circle-down" size="2x" style={{float:'right', marginTop: '-5px'}}/>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <div className="modal-container" style={{ height: 200 }}>
                  {post.body}
                  <Button bsStyle="danger" bsSize="small" style={{position: 'absolute',right: '0'}} onClick={() => this.setState({ show: true })}>Delete this post</Button>
                  <Modal
                      show={this.state.show}
                      onHide={this.handleHide}
                      container={this}
                      aria-labelledby="contained-modal-title">
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                          Are you sure?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete this post? you cannot go back.
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                        <Button bsStyle="danger" onClick={this.handleDelete.bind(this,post._id)}>Delete</Button>
                      </Modal.Footer>
                  </Modal>
                </div>
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
