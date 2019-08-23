import React from 'react';
import {Link} from 'react-router-dom';
import TodolistIndexItem from './todolist_index_item';
import CreateTodolistFormContainer from './create_todolist_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container'


class TodolistIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchLists(this.props.match.params.scopeId);
        this.props.fetchScopes()
    }

    render() {
        let lists = this.props.todolists
        let listRender;
        let scopeName = this.props.scopes.map(scope => {
            if (scope.id == this.props.id) {
            return scope.name}});
        if (!lists.length) {
            listRender = ""
        } else {
        listRender = lists.map(todolist => (
        <TodolistIndexItem
            todolist = {todolist}
            key = {todolist.id}
            deleteList = {this.props.deleteList}/>
            ))
        }

        let scopePage = '/scopes/'+this.props.match.params.scopeId

        return(
            <div className="feature_page">
                <NavBarContainer />
                <div className="feature_container">
                    <div className="scope_name_container">
                        <Link to={scopePage} className="scope_name">
                            {scopeName}
                        </Link>
                    </div>
                    <div className="feature_index">
                        <div className="feature_index-container">
                            <div className="feature_index-feature_name">
                                Todo List 
                            </div>
                            <ul>
                                {listRender}
                            </ul>
                            <div className="feature_form_container">
                                <CreateTodolistFormContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TodolistIndex; 