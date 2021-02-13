import React from 'react';
import './App.css';
import Card from './components/Card';
import img from './img/transmission.jpg'

class App extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <Card img={img} title='Card title'>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Card>
        <Card title='Special title treatment'>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </Card>
      </React.Fragment>                
    );
  }
}

export default App;
