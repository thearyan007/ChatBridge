import useGetConversations from "../../hooks/useGetConversations";
import getEmoji from "../../utils/getRandomEmoji";
import Conversation from "./Conversation";

const Conversations=()=>{
    const {loading, conversations}=useGetConversations();
    console.log(conversations)
    return (<div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversation, indx)=>(
            <Conversation
                key={conversation._id}
                conversation={conversation}
                emoji={getEmoji()}
                lastIndx={indx=== conversations.length-1}
            />
        ))}

        {loading?<span className="loading loading-spinner"></span>:null}
    </div>)
}

export default Conversations;