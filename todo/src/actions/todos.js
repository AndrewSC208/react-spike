import fetch from 'isomorphic-fetch';
/*
 * fetch all todos
 */
export function todosHasErrored(bool) {
    return {
        type: 'TODOS_HAS_ERRORED',
        hasErrored: bool
    }
}
export function todosLoading(bool) {
    return {
        type: 'TODOS_LOADING',
        isLoading: bool
    }
}
export function todosFechedDataSuccess(todos) {
    return {
        type: 'TODOS_FETCH_DATA_SUCCESS',
        todos
    }
}
export function fetchTodos() {
    return dispatch => {
        dispatch(todosLoading(true));

        return fetch(`http://localhost:9000/todos`)
            .then((response) => {
                if (!response.ok) {
                    dispatch(todosHasErrored(true));
                    throw Error(response.statusText);
                }

                dispatch(todosLoading(false));

                return response.json();
            })
            .then(todos => dispatch(todosFechedDataSuccess(todos)))
            .catch(() => dispatch(todosHasErrored(true)));
    }
}
/*
 *  update todo
 */
export function updateSuccess(bool) {
    return {
        type: 'TODO_UPDATE_SUCCESS',
        isUpdated: bool
    }
}
export function updateError(bool) {
    return {
        type: 'TODO_UPDATE_ERROR',
        hasErrored: bool
    }
}
export function updateTodo(todo) {
    return {
        type: 'UPDATE_TODO',
        todo
    }
}
export function sendUpdateTodo(todo) {
    return dispatch => {
        let t = {
            id: todo.id,
            text: todo.text,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
            completed: true
        };
        dispatch(updateTodo(t));

        const headers = new Headers({
            "Content-type": "application/json"
        });

        const payload = {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(t)
        };

        return fetch(`http://localhost:9000/todos/${t.id}`, payload)
            .then((res) => {
                if(!res.ok) {
                    dispatch(updateError(true));
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(updateSuccess(true));
            })
            .catch(() => dispatch(updateError(true)));
    }
}
/*
 * create todo
 */
export function createSuccess(todo) {
    return {
        type: 'CREATE_TODO_SUCCESS',
        todo
    }
}
export function createError(bool) {
    return {
        type: 'CREATE_TODO_ERROR',
        hasErrored: bool
    }
}
export function createTodo(todo) {
    return {
        type: 'CREATE_TODO',
        todo
    }
}
export function sendNewTodo(todo) {
    return dispatch => {

        dispatch(createTodo(todo));

        const headers = new Headers ({
            "Content-type": "application/json"
        });

        const payload = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(todo)
        };

        return fetch(`http://localhost:9000/todos`, payload)
            .then((res) => {
                if(!res.ok) {
                    dispatch(createError(true));
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                dispatch(createSuccess(data));
            })
            .catch(() => dispatch(createError(true)));

    }
}