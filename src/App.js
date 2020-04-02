import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: null,
      url: 'http://anapioficeandfire.com/api/characters/583',
      character: [],
     };
  }

  // 
  async gameofT(){
    // try --> basically an upper eshelon if statement
    // await --> waits for the async func??
    // this.setState --> update the information from the API
    // catch --> catches the error if try fails
    try {
      const rungameofT = await axios.get('http://anapioficeandfire.com/api/characters/583')
      this.setState ({ character: rungameofT.data });
    } catch(e){
      console.log(`something went wrong`);
    }
  }
  render() {
    return (
    <h1> John Snow was born in thi{this}</h1>
    );
  }
}

export default App;
