import React from 'react'
import { Component } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

export default class SaveTask extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      tasks: []
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const target = event.target
    console.log(target)
    const data = new FormData(target)
    const newTask = {}
    for (let pair of data.entries()) {
      newTask[pair[0]] = pair[1]
    }
    console.log(newTask)
    const updatedTasks = [...this.state.tasks, newTask]
    this.setState({tasks: updatedTasks})
  }
  
  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <h2 className="title">Super Lists</h2>
        <div className="task-container">
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Input />
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
              >Save</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

