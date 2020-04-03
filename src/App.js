import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // data: true,
      character: [],
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
johnSnow(){
  // axios gets whats inside the data property --> in this the (what's inside the URL)
  // res and res.data --> to get the results of the in url
  //
  axios.get('http://anapioficeandfire.com/api/characters/583')
        .then(res => { console.log(res); this.setState({ character: res.data});
      }).catch();
    }

  render() {
    return (
      // render the data I found in the url for Jon snow's birth
      // how though? --> maybe a this.setState
      <div>
    <h1> John Snow was born in {this.props.character}</h1> 
    {/* watch a video on api's / axios and DOM */}
    </div>
    );
  }
}

export default App;
