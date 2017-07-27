import React from 'react';
import TodoItem from './todoitem';
export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    var taskList=this.props.data.map(listItem=>
      <TodoItem taskId={listItem.id}
                key={listItem.id}
                task={listItem.task}
                complete={listItem.complete}
                toggleComplete={this.props.toggleComplete}
                deleteTask={this.props.deleteTask}/>
    )
    return(
      <ul className="list-group">
        {taskList}
      </ul>
    )
  }
}
