export const fetchTodos = (scopeId, todoListId) => (
    $.ajax({
        method: "GET",
        url: `api/scopes/${scopeId}/todo_lists/${todoListId}/todos`
    })
)

export const fetchTodo = (scopeId, todoListId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/scopes/${scopeId}/todo_lists/${todoListId}/todos/${id}`
    })
)

export const createTodo = todo => (
    $.ajax({
        method: 'POST',
        url: `api/scopes/${todo.todolist.scope_id}/todo_lists/${todo.list_id}/todox/${todo.id}`,
        data: {todo}
    })
)

export const updateTodo = todo => (
    $.ajax({
        method: 'PATCH',
        url: `api/scopes/${todo.todolist.scope_id}/todo_lists/${todo.list_id}/todos/${todo.id}`,
        data: {todo}
    })
)

export const deleteTodo = (scopeId, todoListId, id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/scopes/${scopeId}/todo_lists/${todoListId}/todos/${id}`
    })
)
