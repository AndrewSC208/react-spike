import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {List} from 'material-ui/list';
import Subheader from 'material-ui/Subheader';

const TodoList = ({ todos, toggleComplete }) => (

    <List>
        <Subheader>Today's Tasks:</Subheader>
        {todos.map((todo)=> (
            (todo.completed === false) ? <Todo key={todo.id} {...todo} onClick={() => toggleComplete(todo)} /> : ''
        ))}
    </List>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TodoList;