import React from 'react';

class TodolistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.todolist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <label onClick={this.handleSubmit}>
                        Title:
                        <input type="text"
                            value="Name this list..."
                            onChange={this.update("title")}/>
                        <br/>
                    </label>
                    <label>
                        Note:
                        <input type="text"
                            value="Add extra details..."
                            onChange={this.update('body')}/>
                            <br/>
                    </label>
                    <button>Create</button>
                </form>
                <button>Cancel</button>
            </div>
        )
    }
}

export default TodolistForm;