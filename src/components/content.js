import React, { Component } from "react";
import styled from 'styled-components'

class Kalkulasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count : 0
    };
  }

  IncrementItem = () => this.setState({
      count : this.state.count + 1})
    

  DecrementItem = () => this.setState({
      count : this.state.count - 1 
  })
    
  reset = () => this.setState({
      count : this.state.count = 0
  })

  render() {
    let showCount
    if (this.state.count < 0){
        window.alert('Tidak ada nilai minus');
        this.state.count = 0
    }else {
        showCount = this.state.count
    }

    return (
      <div>
          <Wrapper>
            <Button classname="button" onClick={this.IncrementItem}>+</Button>
            <Input value={this.state.count}></Input>
            <Button onClick={this.DecrementItem}>-</Button>
          </Wrapper>
        <Button className="reset" onClick={this.reset}>Reset</Button>
       
      </div>
    );
  }
}
export default Kalkulasi;

const Button = styled.button`
     background-color : blue;
     color : white;
     border-radius : 30%;
     font-size: 40px;   
     padding : 10px 40px;

     &:hover {
         color: black;
         background-color: skyblue;
     }
`

const Wrapper = styled.section`
     margin-bottom : 40px;
     display : flex;
     flex-direction : row;
`

const Input = styled.input`
     text-align : center;
     margin : 0 20px;
     border-radius : 20px;
     border : 2px ridge grey;
`