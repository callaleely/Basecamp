export const fetchMessages = scopeId => (
    $.ajax({
        method: "GET",
        url: `api/scopes/${scopeId}/messages`
    })
)

export const fetchMessage = (scopeId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/scopes/${scopeId}/messages/${id}`
    })
)

export const createMessage = message => (
    $.ajax({
        method: 'POST',
        url: `api/scopes/${message.scope_id}/messages`,
        data: {message}
    })
)

export const updateMessage = message => (
    $.ajax({
        method: 'PATCH',
        url: `api/scopes/${message.scope_id}/messages/${message.id}`,
        data: {message}
    })
)

export const deleteMessage = (scopeId, id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/scopes/${scopeId}/messages/${id}`
    })
)
