import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class TodolistIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.deleteList(this.props.todolist.scope_id, this.props.todolist.id)
    }

    render () {
        return (
            <div className="todolist_index-contents">
                <div className="todolist_index-title">
                    {this.props.todolist.title}
                </div>
                <div className="todolist_index-body">
                    {this.props.todolist.body}
                </div>
                <input type="submit" value="Delete"
                onClick={() => this.handleSubmit()}/> 
            </div>
        )
    }
}

export default TodolistIndexItem; 