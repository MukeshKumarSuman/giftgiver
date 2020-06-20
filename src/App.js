import React, {Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import Gift from './Gift';
import { maxNumber } from './helper';

class App extends Component {
  state = {
    gifts: []
  }

 addGift = event => {
  const { gifts } = this.state;
  const ids = this.state.gifts.map(gift => gift.id);
  const maxId = maxNumber(ids);
  gifts.push({id: maxId + 1});
  this.setState(gifts);
 } 

 removeGift = id => {
  const gifts = this.state.gifts.filter(gift => gift.id !== id);
  this.setState({gifts});
 }



 render() {
  return (
    <div className="App">
      <h1>Gift Givere</h1>
      <div className='gift-list'>
        {this.state.gifts.map(gift => <Gift key={gift.id} gift={gift} removeGift={this.removeGift}/>)}
      </div>
      <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
    </div>
  );
 }
}
export default App;
