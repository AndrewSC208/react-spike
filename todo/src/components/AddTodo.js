import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewTodo } from "../actions/todos";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 25,
};

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {
                id: '',
                text: '',
                completed: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            todo: {
                id: '',
                text: event.target.value,
                completed: false
            }
        })
    };

    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.submitTodo(this.state.todo);
                        this.setState({
                            todo: {
                                id: '',
                                text: '',
                                completed: false
                            }
                        });
                    }}>
                    <TextField
                        id="todo-text-field"
                        value={this.state.todo.text}
                        onChange={this.handleChange}
                        hintText="Add A task"/>

                    <RaisedButton type="submit" label="Add" primary={true} style={style}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitTodo: (todo) => dispatch(sendNewTodo(todo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
