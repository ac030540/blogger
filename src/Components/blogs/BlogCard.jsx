import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import './BlogCardGrid.css';
import axios from 'axios';


class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    // expanded is the variable which keeps a track that whether
    // the post is expanded or not
    this.state = {
      expanded: false,
    };
  }

  // This function expands the blog post by changing the expanded state
  expandBlogPost = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  // This function deletes the blogPost by passing the id to
  // the server and then deleting the post by provided id
  deleteBlogPost = () => {
    const { id } = this.props;
    axios.delete('http://localhost:4000/blogs/delete/' + id)
      .then(res => console.log(res.data));
  }

  render() {
    const {
      title, content, id, intro,
    } = this.props;
    const { expanded } = this.state;

    return (
      <div className="child center bg-washed-yellow shadow-5 mw6-ns mw5 br3 hidden ba b--black-10 mv4">
        <h1 className="f4 br3 br--top dark-blue mv0 pv2 ph3">{ title }</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure blue">
            { intro }
          </p>
          { expanded
            ? (
              <div>
                <p className="f6 f5-ns lh-copy measure blue">
                  { content }
                </p>
                <span className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.expandBlogPost}>Read Less </span>
                <span className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.deleteBlogPost}> Delete </span>
                <Link to={'/edit/' + id} className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.editBlogPost}> Edit </Link>
              </div>
            )
            : (
              <div>
                <span className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.expandBlogPost}>Read More </span>
                <span className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.deleteBlogPost}> Delete </span>
                <Link to={'/edit/' + id} className="f5-ns f7  dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1 pointer" onClick={this.editBlogPost}> Edit</Link>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}


export default BlogCard;
