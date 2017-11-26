import React from 'react';

import Input from './Input.jsx';
import List from './List.jsx';

import request from 'superagent';

export default class View extends React.Component{

constructor(props){
  super(props);
  this.state={
    inputValue:"",
    list:[]
  }
}

componentDidMount(){

  request.get('/getList').end((err,res)=>{
    this.setState({list:JSON.parse(res.text)});
  })
}

handleInputChange(e){
  this.setState({inputValue:e.target.value})
}

handleSubmitClick(){

  request.post('/updateList').send({"value":this.state.inputValue}).end((err,res)=>{
    this.setState({list:JSON.parse(res.text),inputValue:""})
  })

}

onClick(){
 this.setState({list:[]})
}

render(){

  return(
    <div>

    <Input value={this.state.inputValue} onInputChange={this.handleInputChange.bind(this)} onSubmitClick={this.handleSubmitClick.bind(this)}/>
    <List data={this.state.list}/>
    <input type="reset" onClick={ this.onClick.bind(this)}/>
    </div>
  )

}
}
