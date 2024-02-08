import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";
const LogoutButton =()=>{
    const {loading, logOut} = useLogOut();
    return (
    <div className="mt-auto">
        {!loading?(<BiLogOut className="w-7 h-7 cursor-pointer text-white" onClick={logOut}/>):<span className="loading loading-spinner"></span>}
    </div>

    )
}

export default LogoutButton;