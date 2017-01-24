import React from "react"
import _ from "lodash"
import TodoList from "./Todolist"
import TodoItems from "./Todoitems"

export default class TodoInput extends React.Component {
	renderItems(){
		const props = _.omit(this.props, 'todos')

		return _.map(this.props.todos, (todo, index) => <TodoItems key={index} {...todo}
		 {...this.props}/>)
	}

	render() {
		return(
			<table>
				<TodoList />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}

