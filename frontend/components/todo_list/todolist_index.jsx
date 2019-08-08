import React from 'react';
import {Link} from 'react-router-dom';
import TodolistIndexItem from './todolist_index_item';
import CreateTodolistFormContainer from './create_todolist_form_container';

class TodolistIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchLists(this.props.match.params.scopeId);
    }

    render() {
        let lists = this.props.todolists
        let listRender;
        if (!lists.length) {
            listRender = "Please add todo"
        } else {
        listRender = lists.map(todolist => (
        <TodolistIndexItem
            todolist = {todolist}
            key = {todolist.id}/>
            ))
        }
        debugger
        return(
            <div>
                <ul>
                    {listRender}
                </ul>
                <div>
                    <CreateTodolistFormContainer />
                </div>
            </div>
        )
    }
}


export default TodolistIndex; 