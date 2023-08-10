import { useEffect } from "react"

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.clear();
        window.location.href = "/";
    })
    return(
        <div>Loggin out...</div>
    )
}

export default Logout;