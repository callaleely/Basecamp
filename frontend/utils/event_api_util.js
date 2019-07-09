export const fetchEvents = scopeId => (
    $.ajax({
        method: "GET",
        url: `api/scopes/${scopeId}/events`
    })
)

export const fetchEvent = (scopeId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/scopes/${scopeId}/events/${id}`
    })
)

export const createEvent = event => (
    $.ajax({
        method: 'POST',
        url: `api/scopes/${event.scope_id}/events`,
        data: {event}
    })
)

export const updateEvent = event => (
    $.ajax({
        method: 'PATCH',
        url: `api/scopes/${event.scope_id}/events/${event.id}`,
        data: {event}
    })
)

export const deleteEvent = (scopeId, id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/scopes/${scopeId}/events/${id}`
    })
)
