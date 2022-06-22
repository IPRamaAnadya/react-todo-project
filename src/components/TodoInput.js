import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control form-input"
                            placeholder="New Todo"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-input"
                    >
                        {editItem ? 'Edit task' : 'Add new task'}
                    </button>
                </form>
            </div>
        )
    }
}
