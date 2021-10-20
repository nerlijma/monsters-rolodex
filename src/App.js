// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        {/* <input
          type="search"
          placeholder="enter any text"
          onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}
        /> */}
        {/* <SearchBox onChange={(e) => this.onChange(e)} /> */}
        <SearchBox onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
