import { React, useState,useEffect } from 'react'
import axios  from 'axios'
import { useHistory,useParams } from 'react-router-dom'

const EditUser = () => {
    let history = useHistory();

    const {id} = useParams();
    

    useEffect(()=>{
        loadUser();
    },[])

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const loadUser = async () => {
        const result = await axios('http://localhost:3003/users/'+id);
        console.log(result);
        setUser(result.data);
    }


    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(user);
        await axios.put('http://localhost:3003/users/'+id, user);
        history.push('/');
    }
    const { name, username, email ,phone,website} = user;
    return (
        <div className="container">
            <h1>Edit user</h1>
            <form className="form-horizontal" onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="name">Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter name" name="name" value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="username">Username:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter username" name="username" value={username}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Email:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" placeholder="Enter email" name="email" value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="phone">Phone:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Enter phone" name="phone" value={phone}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="website">website:</label>
                    <div class="col-sm-10">
                        <input type="website" class="form-control" placeholder="Enter website" name="website" value={website}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>

                <button className="btn btn-warning">Update User</button>

            </form>
        </div>
    )
}

export default EditUser