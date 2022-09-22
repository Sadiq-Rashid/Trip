import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welocme to Trip Manager</h1>
        <p>Welcome Manager to manage Trips Bye:</p>
        <ul>
          <li>Add new Trip</li>
          <li>Edit  Trip</li>
          <li>Delete  Trip</li>
          <li>Show all  Trips</li>
          
        </ul>
       
      </div>
    );
  }
}
