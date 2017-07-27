import React from 'react';
import TodoList from './todolist';
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "id": "1",
          "task": "做一个TodoList Demo",
          "complete": "false"
        }, {
          "id": "2",
          "task": "学习ES6",
          "complete": "false"
        }, {
          "id": "3",
          "task": "Hello React",
          "complete": "true"
        }
      ]
    }
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }
  handleToggleComplete(taskId) {
    let data = this.state.data;
    for (let item of data) {
      if (item.id === taskId) {
        item.complete = item.complete === "true" ? "false" : "true"
      }
    }
    this.setState({data})
  }
  handleTaskDelete(taskId) {
    let data = this.state.data
    data = data.filter(task => task.id !== taskId)
    this.setState({data})
  }
  render() {
    return (
      <div>
        <h1>React Todo</h1>
        <TodoList data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete}/>
      </div>
    )
  }
}
