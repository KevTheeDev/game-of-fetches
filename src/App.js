import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      character: null,
      // res1: null,
      // res2: null,
      // res3: null,
     };
  }

  // like the componentDidMount() {}
  // use async in order to access fetch or the URL
  // try --> basically an upper eshelon if statement
  // await --> waits for the async func??
  // this.setState --> update the information from the API
  // json () a asynchronous call 
  // ({ update character with the data from the object })
  // catch --> catches the error if try fails
    // async gameofT(){
    //   const rungameofT = await axios.get('http://anapioficeandfire.com/api/characters/583')
    //   this.setState ({ character: rungameofT });
    // } catch(e){
    //   console.log(`something went wrong`);
    // }
  

    // this may be like a component did mount(){ }
    // axios .get(s) whats inside the data property --> in this the (what's inside the URL)
      // calls an api
      // await mimics asynchronous function
    // .then in the promise to grab the result
    // res and res.data --> to get the results of the in url
      // this.etsTate to update the character : add the res. to the .data to .born
      // .catch to resolve any errors and then log those errors in the console
johnSnow(){
  let chaUrl = 'https://anapioficeandfire.com/api/characters/583';
  axios.get(chaUrl)
        .then(res => this.setState({ character: res.data.character })).catch(e => console.error(e))
      }


getTheRestOfTheCharacters(){
  let margery = 'http://anapioficeandfire.com/api/characters/16';
  let targeayenHouse = 'http://www.anapioficeandfire.com/api/houses/378';
  let lannisterHouse = 'http://www.anapioficeandfire.com/api/houses/229';

// promises wrap asynchronous functions --> promise.all
}   
    
componentDidMount(){
  this.johnSnow();
  this.getTheRestOfTheCharacters()
}

    render() {
      return (
        // render the data I found in the url for Jon snow's birth
        // 
        <div>
    <h1> John Snow was born {this.state.character}</h1> 
    {/* <h1> Margaery Tyrell born in { this.state.character } </h1>
    <h1> The region of House Targaryen is { this.state } </h1>
    <h1> The coat of arms of House Lannister is { this.state } </h1> */}
    {/* watch a video on api's / axios and DOM */}
    </div>
    )
  }
}
export default App;

console.log('because nothing else will show up on the console')