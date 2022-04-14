import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
import data from './data.json';

class App extends React.Component
{
  constructor(props)//constructor constructs functionality in the code and props gives you the access to the parent. 
  //both are needed and pass to the super in the hierarchy
  {
    super(props)
    this.state =
    {
      showModal: false,
      beast: {}
    }
  }
  hideModal = () => {
    this.setState({
        showModal: false
    })
  }
  openModal = (beast) =>
  {
    this.setState({
      showModal: true
    })
  }

  render(){
    return (
      <>
      <Header/>
      <Main 
      data = {data}
      openModal={this.openModal}
      hideModal={this.hideModal}
      beast={this.state.beast}
      showModal={this.state.showModal}
      />
      <Footer/>
      </>
    )
  }
}


export default App;