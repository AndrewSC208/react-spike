import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/list';
import Checkbox from 'material-ui/Checkbox';

const compBtn = {
    marginLeft: 20
};

const Todo = ({ onClick, completed, text}) => (
        <ListItem leftCheckbox={<Checkbox onClick={onClick}/>}>{text}</ListItem>
    );

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;