import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    name: null,
  };

  // fetch pokemon data
  async componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allpokemon) => console.log(allpokemon));
      
      
  }
  

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.name) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.name.title}</div>
        {/* <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} /> */}
      </div>
    );
  }
}
