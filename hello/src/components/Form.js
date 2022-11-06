import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'react'
      }
    }
    handleUsername = (event) => {
        this.setState({
            username : event.target.value
        })

    }

    handleComment = event => {
        this.setState({
            comment : event.target.value
        })
    }

        handleTopics = event => {
            this.setState({
                topic: event.target.value
            })
        }
        handleSubmit = event => {
            alert(`${this.state.username} and ${this.state.comment}`)
            event.preventDefault();
        }
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea type='text' value={this.state.comment} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopics}>
                        <option value="react">react</option>
                        <option value="nodejs">nodejs</option>
                        <option value="express">express</option>
                    </select>
                </div>
                <button>submit</button>
            </form>
        )
    }
}

export default Form