
import {useState} from "react";
import FormSearch from "./FormSearch.jsx";
import StarRating from "./StarRating";

const data = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        rating: 4
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        rating: 3
    },
    {
        id: 3,
        name: "Mike Doe",
        email: "mike.doe@example.com",
        rating: 2
    }
]

function UserList() {
    const [users, setUsers] = useState(data)

    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            const newUsers = users.filter(user => user.id !== id);
            setUsers(newUsers); // cap nhat lai component
        }
    }

    const handleSearchUser = (e) => {
        const keyword = e.target.value;
        const newUserFilter = data.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
        setUsers(newUserFilter); // cap nhat lai component
    }

    const handleRatingClick = (id, rating) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, rating } : user)));
    };

    return (
        <>
            <div className="card mt-2">
                <h5 className="card-header">
                    <div className="row">
                        <div className="col-md-3">User List</div>
                        <div className="col-md-9">
                            <FormSearch handleActionSearch={handleSearchUser}/>
                        </div>
                    </div>


                </h5>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user,index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><StarRating user={user} onRatingChange={handleRatingClick}/></td>
                                <td>
                                <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default UserList