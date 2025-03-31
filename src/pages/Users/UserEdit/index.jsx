import {useParams} from "react-router";

function UserEdit() {
    const {uid} = useParams();
    return (
        <>
            <h1>User id: {uid}</h1>
        </>
    )
}

export default UserEdit