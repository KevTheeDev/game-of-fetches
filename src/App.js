import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: null,
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

johnSnow(){
  // axios gets whats inside the data property
  // res and res.data --> to get the results of the in url
  //
  axios.get('http://anapioficeandfire.com/api/characters/583')
        .then((res => console.log(res.data))
        ).catch();
}

  render() {
    return (
      // render the data I found in the url for Jon snow's birth
      // how though? --> maybe a this.setState
      <div>
    <h1> John Snow was born in {this.state.data}</h1> 
    </div>
    );
  }
}

export default App;
