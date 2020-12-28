import React, { Component } from 'react'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]:value
    });
  }

  addItem(){
    //create element with unique id
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list];
//add items to list
    list.push(newItem)

    this.setState({
      list,newItem:""
    })
  }
  deleteItem(id){
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)

    this.setState({
      list:updatedList
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="input-container">
          <input 
            placeholder="Enter todos here...."
            type="text"
            value={this.state.newItem}
            onChange={e=>this.updateInput("newItem",e.target.value)}
          />
          <button className="addButton" onClick={()=>this.addItem()}>Add</button>
        </div>
        <div className="todo-items-container">
          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="delButton" onClick={()=>this.deleteItem(item.id)}>Del</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
