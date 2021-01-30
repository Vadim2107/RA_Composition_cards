import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <Card>
          <img src="https://cdn2.hexlet.io/derivations/image/fill/850/400/eyJpZCI6IjhkZjFkY2M5MTU1N2NkYWY4NzY4OWQxNmJhNzYzOThmLmpwZWciLCJzdG9yYWdlIjoic3RvcmUifQ?signature=85aa61960604801d554d75746a971a269c73ecd543cd1aa07187350d5886aed6" className="card-img-top" alt="..."></img>
          <h3 className="card-title">Card title</h3>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Card>
        <Card>
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </Card>
      </React.Fragment>                
    );
  }
}

export default App;
