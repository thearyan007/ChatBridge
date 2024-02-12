import { GrChatOption } from "react-icons/gr";
import { useAuthContext } from "../../context/AuthContext";
const NoChatSelected=()=>{
    const {authUser}= useAuthContext();
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Hi 👋 {authUser.fullName}, Welcome to <span className='text-yellow-500'> ChatBridge</span></p>
                <p>Created by: Aryan Gupta😎</p>
                <p>Select Message to Start Briding the chat gap!</p>
                <GrChatOption className="text-3xl md:text-6xl text-center"/>

            </div>
        </div>
    )
}

export default NoChatSelected;