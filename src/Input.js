import React from 'react'
import { Component } from 'react'
import Button from 'antd/lib/button'
import { Input } from 'antd'

export default class SaveTask extends Component {
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
        <h2 className="title">Super Lists</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Task</label>
          <Input
            type="text"
            name="task"
          />
          
          <Button type="submit">Save</Button>
        </form>
      </div>
    )
  }
}

