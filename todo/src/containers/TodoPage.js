import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos,
         sendUpdateTodo } from '../actions/todos';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class TodoPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                <AddTodo />
                <TodoList todos={this.props.todos} toggleComplete={this.props.toggleComplete}/>
            </div>
        )
    }
}

TodoPage.propTypes = {
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        hasErrored: state.hasErrored,
        isLoading: state.todosLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchTodos()),
        toggleComplete: (todo) => dispatch(sendUpdateTodo(todo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);