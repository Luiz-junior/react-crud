import React from 'react';
import API from './api';

export default class PersonList extends React.Component {

    state = {
        persons: [],
        name: '',
        id: ''
    }

    componentDidMount() {
        API.get(`/users`)
            .then(res => this.setState({ persons: res.data }))
            .catch(erro => console.log(erro));
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = { name: this.state.name };
        if (user.name) {
            API.post(`/users`, { user })
                .then(res => console.log(res))
                .catch(erro => console.log(erro));
            this.componentDidMount();
        } else
            console.log('User Empty!');
    }

    handleDelete = (event) => {
        let id = event.target.value;
        if (id) {
            API.delete(`/users/${id}`)
                .then(res => console.log(res))
                .catch(erro => console.log(erro));
            this.componentDidMount();
        } else
            console.log('id Empty!');
    }

    handleUpdate = (event) => {
        let id = event.target.value;
        console.log(id);
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="form-group mb-2">
                    <form onSubmit={this.handleSubmit} className="form-inline" >
                        <div className="form-group">
                            <label> Person Name: </label>
                            <input className="form-control" type="text" name="name" onChange={this.handleChange} />
                            <button className="btn btn-primary" type="submit"> Add </button>
                        </div>

                    </form>
                </div>
                <br />

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button value={item.id} onClick={this.handleUpdate} className="btn btn-success">Edit</button></td>
                                <td><button value={item.id} onClick={this.handleDelete} className="btn btn-danger"> Delete </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>


            </div>

        );
    }
};
