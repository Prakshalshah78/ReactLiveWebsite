import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link,useHistory } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);
let history = useHistory();
    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios("http://localhost:3003/users");
        setUsers(result.data.reverse());
    }

    const onDeleteUser = async (id) => {
        await axios.delete('http://localhost:3003/users/'+id);
        loadUsers();
    }
    return (
        <div className="container">
            <div className='py-4'>
                <h2> Home page</h2>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn-btn-primary mr-2">View</Link>
                                    <Link className="btn-btn-outline-primary mr-2" to={`user/editUser/${user.id}`}>
                                    Edit</Link>
                                    <Link className="btn-btn-danger mr-2" onClick={()=>onDeleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Home;