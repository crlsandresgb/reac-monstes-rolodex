/**
 * Base libraries
 */
import React, { Component } from "react";
/**
 * Import CSS
 */
import "./App.css";

/**
 * Import Components
 */
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  /**
   * create constructor and state
   */
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  /**
   * get data for the state, this is a fetch
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * Handle change on search box, by using => function we set THIS to the
   * container where is created, in this case on the class app
   */
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  /**
   * render all the code for the app
   */
  render() {
    /**
     * get values from state
     */
    const { monsters, searchField } = this.state;
    /**
     * filter monsters
     */
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
