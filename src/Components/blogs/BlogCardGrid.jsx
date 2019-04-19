import React from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import './BlogCardGrid.css';
import 'tachyons';

class BlogCardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
    };
  }

  // Once all the components are mounted we will reach out to the
  // database and get retreive all the blog posts
  componentDidMount() {
    axios.get('http://localhost:4000/blogs/')
      .then(res => this.setState({
        blogData: res.data,
      }))
      .catch(err => console.log(err));
  }

  // This was added because when we edited a blog post, the data was updated
  // at the backend(DB) but was not updated at the frontend, since componentDidMount
  // is called only once. Hence on update this will be called.
  componentDidUpdate() {
    axios.get('http://localhost:4000/blogs/')
      .then(res => this.setState({
        blogData: res.data,
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { blogData } = this.state;
    const blogDataArray = blogData.map((post, index) => (
      <BlogCard
        key={index}
        id={post._id}
        intro={post.intro}
        content={post.description}
        title={post.title}
      />
    ));
    return (
      <div className="container">
        {blogDataArray}
      </div>
    );
  }
}

export default BlogCardGrid;
