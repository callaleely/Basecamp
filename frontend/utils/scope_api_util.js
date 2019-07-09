export const fetchScopes = () => (
    $.ajax({
        method: "GET",
        url: `api/scopes`
    })
)

export const fetchScope = id => (
    $.ajax({
        method: 'GET',
        url: `api/scopes/${id}`
    })
)

export const createScope = scope => (
    $.ajax({
        method: 'POST',
        url: `api/scopes`,
        data: {scope}
    })
)

export const updateScope = scope => (
    $.ajax({
        method: 'PATCH',
        url: `api/scopes/${scope.id}`,
        data: {scope}
    })
)

export const deleteScope = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/scopes/${id}`
    })
)
