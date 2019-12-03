import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
    render () {
        return (
            <div>
                {this.props.list.map((item) =>
                <Todo toChange={this.props.todoChange} id={item.id}
                task={item.task} completed={item.completed}/>
                )}
            </div>
        )
    }
}

export default TodoList