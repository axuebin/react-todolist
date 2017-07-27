import React from 'react';
export default class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    this.toggleComplete=this.toggleComplete.bind(this)
    this.deleteTask=this.deleteTask.bind(this)
  }
  toggleComplete(){
    this.props.toggleComplete(this.props.taskId)
  }
  deleteTask(){
    this.props.deleteTask(this.props.taskId)
  }
  render(){
    let task=this.props.task
    let itemChecked
    if(this.props.complete==="true"){
      task=<del>{task}</del>
      itemChecked=true
    }else{
      itemChecked=false
    }
    return(
      <li>
        <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete} />
        {task}
        <button type="button" onClick={this.deleteTask}>删除</button>

      </li>
    )
  }
}
