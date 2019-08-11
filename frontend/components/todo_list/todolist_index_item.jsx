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
                <div className="feature_index_item-flex">
                    <div className="feature_index_item-content">
                        <div className="todolist_index-title">
                            {this.props.todolist.title}
                        </div>
                        <div className="todolist_index-body">
                            {this.props.todolist.body}
                        </div>
                    </div>
                    <input className="feature_delete_button" 
                            type="submit" value="Delete"
                            onClick={() => this.handleSubmit()}/> 
                </div>
            </div>
        )
    }
}

export default TodolistIndexItem; 