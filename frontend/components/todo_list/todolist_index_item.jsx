import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class TodolistIndexItem extends React.Component {
    constructor(props) {
        super(props);
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
            </div>
        )
    }
}

export default TodolistIndexItem; 