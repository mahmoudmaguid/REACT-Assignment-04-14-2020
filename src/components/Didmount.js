import React, { Component } from 'react';

class DidMount extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'hover here'
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet , i would like to make too much money from stock market '
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default DidMount;