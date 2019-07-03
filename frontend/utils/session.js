export const postUser = user => (
    $.ajas({
        url: `/api/users`,
        method: 'POST',
        data: {user}
    })
);

export const postSession = user => (
    $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: {user}
    })
);

export const deleteSession = () => (
    $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
);

