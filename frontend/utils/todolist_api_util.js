export const fetchLists = scopeId => (
    $.ajax({
        method: "GET",
        url: `api/scopes/${scopeId}/todo_lists`
    })
)

export const fetchList = (scopeId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/scopes/${scopeId}/todo_lists/${id}`
    })
)

export const createList = todoList => {
    return (
    $.ajax({
        method: 'POST',
        url: `api/scopes/${todoList.scope_id}/todo_lists`,
        data: {todoList}
    })
)}

export const updateList = todoList => (
    $.ajax({
        method: 'PATCH',
        url: `api/scopes/${todoList.scope_id}/todo_list/${todoList.id}`,
        data: {todoList}
    })
)

export const deleteList = (scopeId, id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/scopes/${scopeId}/events/${id}`
    })
)
