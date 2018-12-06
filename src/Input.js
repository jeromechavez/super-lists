import React from 'react'
import { Component } from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

export default class SaveTask extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      tasks: [],
      currentInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({currentInput: event.target.value})
  }

  handleSubmit = (event) => {
    alert(this.state.currentInput + ' was saved!')
    event.preventDefault()
  }
  
  render() {
    return (
      <div>
        <h2 className="title">Super Lists</h2>
        <div className="task-container">
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Input value={this.state.currentInput} onChange={this.handleChange} />
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
              >Save Task</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

