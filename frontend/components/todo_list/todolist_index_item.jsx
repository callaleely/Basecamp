import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class TodolistIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (
            <div>
                <h3> {this.props.todolist.title}</h3>
                <br/>
                <p>{this.props.todolist.body}</p>
            </div>
        )
    }
}

export default TodolistIndexItem; 