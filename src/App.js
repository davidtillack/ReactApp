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
let message = "Click a card to begin!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    topScore,
    message
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ score: this.state.score + 1 });
  // };

  cardClicked = id => {
    const friends = this.state.friends;
    const friendCards = friends.filter(friend => friend.id === id);

    // If card clicked statement
    if (friendCards[0].clicked) {
      // Change message to if card already clicked matches with card clicked and
      // alert user they lose and refresh the page to start new game for them
      let message = "You already clicked that card!";
      this.setState({ message });
      alert("Oh no - you lose!");
      window.location.reload();
      let score = 0;

      console.log(score);
      console.log(topScore);
      // Game logic for below the top score of getting all cards
    } else if (score < 12) {
      for (let i = 0; i < friends.length; i++) {
        // Alignment of cards to be assigned value
        friendCards[0].clicked = i;
      }
      // Increment score counter
      score++;
      console.log(score);
      message = "Good Job! Keep on clicking new cards!";

      // Randomly sort the cards
      friends.sort(function() {
        return Math.random();
      });

      // Have score match topScore for topscore monitoring... logic needs work
      // to keep top score versus score matching topScore
      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
      } else {
        topScore = 0;
        console.log(topScore);
      }
      this.setState({ friends });
      this.setState({ score });
      this.setState({ message });
    } else {
      // alert user that they won and refresh game
      alert("Great job, you won!");
      window.location.reload();
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-m-4 col-lg-4 col-xl-4">
              <a href=".">Clicky Memory Game</a>
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
            cardClicked={this.cardClicked}
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
