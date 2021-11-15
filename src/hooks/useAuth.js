import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider/Authprovider"

const useAuth = () => {

    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;