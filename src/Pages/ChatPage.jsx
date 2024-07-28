import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChatPage() {
    const [chatData, setChatData] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("/chat");
            console.log(data.chat);
            setChatData(data.chat);
        } catch (error) {
            console.error("Error fetching chat data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                chatData.map((chat) => (
                    <div key={chat.id}>
                        {chat.message}
                    </div>
                ))
            }
        </div>
    )
}

export default ChatPage;
