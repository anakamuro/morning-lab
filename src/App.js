import logo from './logo.svg';
import './App.css';
import React from 'react'
import Comments from "./Comments"

 class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Dinosaurs',
      author: 'Stealthy Stegosaurus',
      body: 'Check out this body property!',
      comments: ["First!", "Great post", "Hire this author now!"]
    };
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h1>Title: {this.state.title}</h1>
       <h1>Author: {this.state.author}</h1>
       <h1>Body: {this.state.body}</h1>
       <Comments comments={this.state.comments} />
      </header>
    </div>
  );
  }
}

export default App;
