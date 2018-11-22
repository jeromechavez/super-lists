import React from 'react'
import { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      tasks: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const target = event.target
    const data = new FormData(target)
    const newTask = {}
    for (let pair of data.entries()) {
      newTask[pair[0]] = pair[1]
    }
    const updatedTasks = [...this.state.tasks, newTask]
    this.setState({tasks: updatedTasks})
  }
  
  render() {
    return (
      <div>
        <h2>Super Lists</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Task</label>
          <input
            type="text"
            name="task"
          />
          
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

