import React, { Component } from 'react';


class Todo extends Component {
   handleClick = () => {
       this.props.todoChange(this.props.id);
   }
   render() {
       return (
           <div>
               <ul style={{ textDecoration: this.props.completed ? 'line-through' : 'none',
               }} onClick={this.handleClick}>{this.props.task}</ul>
           </div>
       )
            }
   }

export default Todo;