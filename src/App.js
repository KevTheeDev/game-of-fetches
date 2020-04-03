import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // data: true,
      character: null,
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
    // axios gets whats inside the data property --> in this the (what's inside the URL)
    // res and res.data --> to get the results of the in url
johnSnow(){
  axios.get('https://anapioficeandfire.com/api/characters/583')
        .then(res => this.setState({ character: res.data.born })).catch(e => console.error(e))
          // console.log(this.state.character); 
      }
      

    
componentDidMount(){
  this.johnSnow();
}

    render() {
      return (
        // render the data I found in the url for Jon snow's birth
        // how though? --> maybe a this.setState
        <div>
    <h1> John Snow was born {this.state.character}</h1> 
    {/* watch a video on api's / axios and DOM */}
    </div>
    )
  }
}
export default App;

console.log('because nothing else will show up on the console')