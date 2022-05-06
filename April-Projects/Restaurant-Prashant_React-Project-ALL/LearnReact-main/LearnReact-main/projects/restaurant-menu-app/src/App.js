import React, { Component } from 'react';
import Fooditems from './components/Fooditem';
import Drinks from './components/Drinks';
import Orderform from './components/Orderform';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      drinksData: null,
      view: false
    };
  }

  async componentDidMount(){
    try{
      let response = await fetch('http://localhost:3000/data');
      let userData = await response.json();
      this.setState({data: userData[0], drinksData: userData[1], view: true});
    }
    catch(error){
      console.log(error);
    }
  }

  render(){
      return(
        <div>
          {
            this.state.view ? 
            (
              <>
              <h2 className='App'>Prashant's Kitchen</h2>
              <h3 className='App'>Main Course</h3>
              <Fooditems dishType={this.state.data[0].dishType} dishName={this.state.data[0].dishName} dishPrice={this.state.data[0].dishPrice}></Fooditems>
              <Fooditems dishType={this.state.data[1].dishType} dishName={this.state.data[1].dishName} dishPrice={this.state.data[1].dishPrice}></Fooditems>
              <Fooditems dishType={this.state.data[2].dishType} dishName={this.state.data[2].dishName} dishPrice={this.state.data[2].dishPrice}></Fooditems>
              <Fooditems dishType={this.state.data[3].dishType} dishName={this.state.data[3].dishName} dishPrice={this.state.data[3].dishPrice}></Fooditems>
              <h3 className='App'>Drinks</h3>
              {this.state.drinksData.map((item) => <Drinks dType={item.dType} dName={item.dName} dPrice={item.dPrice}/>)}
              <h3 className='App'>Customer Form</h3>
              <Orderform></Orderform>
              </>
            )
            :
            (
              <></>
            )
          }
        </div>
      );
    }
}
export default App;