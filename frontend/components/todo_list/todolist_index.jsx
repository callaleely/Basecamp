import React from 'react';
import {Link} from 'react-router-dom';
import TodolistIndexItem from './todolist_index_item';
import CreateTodolistFormContainer from './create_todolist_form_container';

class TodolistIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchLists(this.props.match.params.scopeId);
    }

    render() {
        let lists;
        if (!this.props.todolists.length) {
            lists = "Please add todo"
        } else {
        lists = this.props.todolists.map(todolist => (
        <TodolistIndexItem
            todolist = {todolist}
            key = {todolist.id}/>
            ))
        }

        return(
            <div>
                <ul>
                    {lists}
                </ul>
                <div>
                    <CreateTodolistFormContainer />
                </div>
            </div>
        )
    }
}


export default TodolistIndex; 