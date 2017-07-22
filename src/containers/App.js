import React from 'react';
import Answer from './Answers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionNumber: 1,
      rightAnswer: 0,
      wrongAnswer: 0,
      pokemon: this.props.data[Math.floor(Math.random() * this.props.data.length)]
    }

    this.shuffleArray = this.shuffleArray.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  shuffleArray(arr) {
    let counter = arr.length - 1, temp, index;

    while ( counter > 0 ) {
        index = Math.floor( Math.random() * counter );
        counter--;
        temp = arr[ counter ];
        arr[ counter ] = arr[ index ];
        arr[ index ] = temp;
    }
    return arr;
  }

  onClick(event) {

    if (event.target.value === this.state.pokemon) {
      this.setState({rightAnswer: (this.state.rightAnswer + 1)})
    } else {
      this.setState({wrongAnswer: (this.state.wrongAnswer + 1)})
    }

    this.setState({ pokemon: (this.props.data[Math.floor(Math.random() * this.props.data.length)]) })
    this.setState({ questionNumber: (this.state.questionNumber + 1) })

  }

  render(){

    let url = `https://img.pokemondb.net/artwork/${this.state.pokemon}.jpg`

    return(
      <div>
        <div id="quiz" className="row">
          <div className="small-12 columns text-center">
            <h3>Pokemon Quiz</h3>
            <h4>Name that Pokemon!</h4>
            <div id="questionNumber" className="text-left">
              <h5>{this.state.questionNumber}.</h5>
            </div>
            <img id="picture" src={url} alt="pokemon here" />
            <br /><br />
            <Answer
              pokemon={this.state.pokemon}
              shuffleArray={this.shuffleArray}
              onClick={this.onClick}
            />
            <br />
            <div>
              <h4><span id="right">Right: {this.state.rightAnswer}</span> <span id="wrong">Wrong: {this.state.wrongAnswer}</span></h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
