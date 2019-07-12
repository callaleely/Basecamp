import React from 'react';
import {Link} from 'react-router-dom';
import TodolistIndexItem from './todolist_index_item';

class TodolistIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchLists();
    }

    render() {
        if (!this.props.todolists.length) return null;
        const lists = this.props.todolists.map(todolist => (
        <TodolistIndexItem
            todolist = {todolist}
            key = {todolist.id}/>
            ))

        return(
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}


export default TodolistIndex; 