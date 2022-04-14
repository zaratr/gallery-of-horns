import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
import data from './data.json';

class App extends React.Component
{
  //constructor(props)//constructor constructs functionality in the code and props gives you the access to the parent. 
  //both are needed and pass to the super in the hierarchy
  //{
    //super(props)
    //this.state =
    //{
      //beast: {}
      //beast: '',
      //image_url: '',
      //description: '',
      //title: ''
    //}
  //}
  
  render(){
    return (
      <>
      <Header/>
      <Main 
      data = {data}
      //openModal={this.openModal}
      //hideModal={this.hideModal}
      //beast={this.state.beast}//empty object
      //showModal={this.state.showModal}
      />
      <Footer/>
      </>
    )
  }
}


export default App;