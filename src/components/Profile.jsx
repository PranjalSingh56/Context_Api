
import { useAppContext } from "../context/AppContext";

const Profile=()=> {
    const { user, setUser } = useAppContext();

    return (
        <div  className= "profile" style={{ padding: 20 }}>
            <h3>Profile Component</h3>

            <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
        </div>
    );
}

export default Profile