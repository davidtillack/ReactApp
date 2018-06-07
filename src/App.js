import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Footer from "./components/Footer";
import "./App.css";

// Set changing variables
let score = 0;
let topScore = 0;
let message = "Click an image to begin!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    topScore,
    message
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-m-4 col-lg-4 col-xl-4">
              <a href=".">Clicky Game</a>
            </div>
            <div class="col-xs-12 col-sm-12 col-m-4 col-lg-4 col-xl-4">
              {this.state.message}
            </div>
            <div class="col-xs-12 col-sm-12 col-m-4 col-lg-4 col-xl-4">
              {" "}
              Score: {this.state.score}
              | Top Score: {this.state.topScore}
            </div>
          </div>
        </NavBar>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            score={this.state.score}
            handleIncrement={this.handleIncrement}
          />
        ))}
        <Footer> &copy; Click Thingys </Footer>
      </Wrapper>
    );
  }
}

export default App;
