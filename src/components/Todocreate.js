import React from "react"

export default class TodoCreate extends React.Component {
	render() {
		return(
			<form>
				<input type="text" placeholder="What to do?" />
				<button>Create</button>
			</form>
		)
	}
}

