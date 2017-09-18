export function todosHasErrored(state = false, action) {
    switch(action.type) {
        case 'CREATE_TODO_ERROR':
        case 'TODO_UPDATE_ERROR':
        case 'TODOS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}
export function todosLoading(state = false, action) {
    switch(action.type) {
        case 'TODOS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function todos(state = [], action) {
    switch(action.type) {
        case 'TODOS_FETCH_DATA_SUCCESS':
            return action.todos;

        case 'CREATE_TODO':
            return [...state, action.todo];

        case 'CREATE_TODO_SUCCESS':
            return state.map(todo =>
                (todo.id === "")
                    ? { ...todo,
                        id: action.todo.id,
                        createdAt: action.todo.createdAt,
                        updatedAt: action.todo.updatedAt }
                    : todo
            );

        case 'UPDATE_TODO':
            return state.map(todo =>
                (todo.id === action.todo.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );

        default:
            return state;
    }
}


