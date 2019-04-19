import React from 'react';
import axios from 'axios';
import 'tachyons';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      intro: '',
      description: '',
    };
  }

  // Upadting the value of title state
  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  // Updating the value of intro state
  onChangeIntro = (event) => {
    this.setState({
      intro: event.target.value,
    });
  }

  // Updating the value of description state
  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  // When the user clicks on post, we will send all the values
  // of title, intro and description as an object to our server
  // This object will then be updating our database
  onClickPost = () => {
    const { title, intro, description } = this.state;

    const newBlog = {
      title: title,
      intro: intro,
      description: description,
    };

    axios.post('http://localhost:4000/blogs/create', newBlog)
      .then(res => console.log(res.data));

    // To reset the input fields
    this.setState({
      title: '',
      intro: '',
      description: '',
    });
    // To redirect to the homepage
    this.props.history.push('/');
  }

  render() {
    const { title, intro, description } = this.state;
    return (
      <div className="ba2 br2 ma3 shadow-5 mw8 center bg-washed-yellow">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset className="ba b--transparent ph0 mh0">
              <legend className="dark-blue f4 fw6 ph0 mh0">Create a Blog</legend>
              <div className="mt3">
                <div className="db fw6 lh-copy f6 blue">Title</div>
                <input style={{ outline: 'none' }} onChange={this.onChangeTitle} value={title} className="pa2 input-reset ba br2 b--washed-red bg-transparent hover-bg-washed-red hover-blue w-100" type="text" />
              </div>
              <div className="mt3">
                <div className="db fw6 lh-copy f6 blue">Introduction </div>
                <textarea value={intro} style={{ height: '200px', outline: 'none' }} onChange={this.onChangeIntro} className="db bg-transparent ba b--washed-red hover-bg-washed-red hover-blue border-box w-100 measure ba b--black-20 pa2 br2 mb2" />
              </div>
              <div className="mt3">
                <div className="db fw6 lh-copy f6 blue">Description </div>
                <textarea value={description} style={{ height: '500px', outline: 'none' }} onChange={this.onChangeDescription} className="db bg-transparent ba b--washed-red hover-bg-washed-red hover-blue border-box w-100 measure ba b--black-20 pa2 br2 mb2" />
              </div>
            </fieldset>
            <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
              <span className="f2 pointer dib blue bg-animate hover-bg-washed-red no-underline pv2 ph4 br-pill ba b--blue-20 ma2-ns ma1" onClick={this.onClickPost}>Post</span>
            </div>
          </form>
        </main>
      </div>
    );
  }
}


export default Create;
