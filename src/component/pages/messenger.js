import React, { Component, useEffect, useRef, useState } from 'react'
// import { io } from 'socket.io-client'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../redux/messager/actions';
import Pusher from 'pusher-js';
export default function Messenger() {
    const dispatch = useDispatch()
    const reciverId = useRef()
    const text = useRef()
    const [socket, setSocket] = useState("")
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { conversationList } = useSelector((state) => state.MessangerReducer);



    const pusher = new Pusher('d9259f061ae07969923f', {
        cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    var fhfg = ""
    const callback = (e) => {
        setSocket(e)
    }
    useEffect(() => {
        channel.bind('message', data => {
            callback(data)
            console.log(data)
        });
    }, [channel])

    //   channel.bind('message', data => {

    //     console.log(data)
    //   });
    channel.emit('message', "hello")

    console.log(fhfg)
    // useEffect(() => {
    //     setSocket(io("https://insta-clone-database.vercel.app"))
    //     dispatch({
    //         type: actions.GET_CONVERSATION_LIST, payload: UserDetails?.UserId
    //     });
    // }, [UserDetails])
    // useEffect(() => {
    //     //add user 
    //     if (UserDetails?.UserId) {
    //         socket?.emit("adduser", UserDetails?.UserId)
    //     }
    //     // get user
    //     socket?.on("getUser", users => {
    //         console.log(users)
    //     })
    //     // get message
    //     socket?.on("getMessage", (data) => {
    //         console.log(data)
    //     })
    // }, [socket, UserDetails])
    // console.log(socket)
    // const send = () => {
    //     //send message
    //     socket?.emit("sendMessage", {
    //         senderId: UserDetails?.UserId,
    //         receiverId: reciverId.current.value,
    //         text: text.current.value,
    //     });
    // }
    // console.log(conversationList)
    return (
        <div>
            messenger
            <div>
                <div>
                    <p>Reciver id</p>
                    <input ref={reciverId} />
                </div>
                <div>
                    <p>message</p>
                    <input ref={text} />
                </div>
            </div>
            <button
            //  onClick={send}
            >
                send
            </button>

            {fhfg}
        </div>
    )
}
