import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed} = this.props

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={`mt-auto mb-auto align-middle ${completed ? 'completed-task' : ''}`}>{title}</h6>
                <div className="todo-icon">
                    <button
                        className="mx-2 btn btn-done"
                        onClick={() => handleDoneTask(id)}
                    >
                        done
                    </button>
                    <button
                        className="mx-2 btn btn-edit"
                        onClick={handleEdit}
                    >
                        edit
                    </button>
                    <button
                        className="mx-2 btn btn-delete"
                        onClick={handleDelete}
                    >
                        delete
                    </button>
                </div>
            </li>
        )
    }
}
