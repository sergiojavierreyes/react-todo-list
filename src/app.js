import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoInput from './components/Todoinput'
import TodoCreate from './components/Todocreate'

const todos = [
{
	task: 'make React Tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			todos
		}
	}

    render() {
  
        return (
            <div>
            	<TodoCreate />
   				<TodoInput todos={this.state.todos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))