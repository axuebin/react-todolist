var React = require('react');
var ReactDOM = require('react-dom');
import TodoBox from './components/todobox';

export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
      <div>
        <TodoBox />
      </div>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"))
