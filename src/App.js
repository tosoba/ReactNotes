import React, { Component } from 'react';
import logo from './logo.svg';
import NoteGroup from './NoteGroup/notegroup';
import GroupForm from './GroupForm/groupform';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //setting up the React state of the component
    this.state = {
      groups: [
        { id: 1, name: "group 1" },
        { id: 2, name: "group 2" },
        { id: 3, name: "group 3" },
        { id: 4, name: "group 4" },
        { id: 5, name: "group 5" }
      ]
    };

    this.addGroup = this.addGroup.bind(this);
    this.removeGroup = this.removeGroup.bind(this);
  }

  addGroup(name) {
    const previousGroups = this.state.groups;
    let maxId = Math.max(previousGroups.map((group) => group.id));
    previousGroups.push({ id: maxId, name: name });
    this.setState({
      groups: previousGroups
    });
  }

  removeGroup(id) {
    const previousGroups = this.state.groups;
    let indexToRemove = previousGroups.findIndex((group) => group.id === id);
    previousGroups.splice(indexToRemove, 1);
    this.setState({
      groups: previousGroups
    });
  }

  render() {
    return (
      <div className="notesWrapper">
        {
          this.state.groups.map((group) => {
            return (
              <NoteGroup id={group.id} name={group.name} key={group.id} removeGroup={this.removeGroup}/>
            );
          })
        }
        <GroupForm addGroup={this.addGroup} />
      </div>
    );
  }
}

export default App;
