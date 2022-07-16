import React, { Component, useEffect, useRef, useState } from 'react'
// import { io } from 'socket.io-client'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../redux/messager/actions';
import Pusher from 'pusher-js';
import ConversationDiv from '../common/conversationDiv';
import useSWR from 'swr'
import MessageBody from '../containers/Messanger/messageBody';
const fetcher = url => fetch(url).then(r => r.json())
export default function Messenger() {
  const dispatch = useDispatch()
  const reciverId = useRef()
  const text = useRef()
  const [socket, setSocket] = useState("")
  const { UserDetails } = useSelector((state) => state.AuthReducer);
  const { conversationList } = useSelector((state) => state.MessangerReducer);
  const { data, error } = useSWR('https://insta-clone-database.vercel.app/api/user/list', fetcher)

  useEffect(() => {
    if (localStorage.getItem('UserId')) {
      dispatch({ type: actions.GET_CONVERSATION_LIST, payload: localStorage.getItem('UserId') })
    }

  }, [localStorage.getItem('UserId')])

  // const pusher = new Pusher('d9259f061ae07969923f', {
  //   cluster: 'ap2'
  // });

  // const channel = pusher.subscribe('chat');
  // var fhfg = ""
  // const callback = (e) => {
  //   setSocket(e)
  // }
  // useEffect(() => {
  //   channel.bind('message', data => {
  //     callback(data)
  //     console.log(data)
  //   });
  // }, [channel])

  //   channel.bind('message', data => {

  //     console.log(data)
  //   });
  // channel.emit('message', "hello")

  console.log(conversationList)
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




  // const source = new EventSource(`http://localhost:3001/api/server-sent-events`);

  // source.addEventListener('message', function(e) {            
  //    console.log(e.data) 
  // }, false)
  // source.addEventListener('message', function (e) {
  //     console.log(e.data) 
  // }, false)

  // const source2 = new EventSource(`http://localhost:3001/api/events`);

  // source2.addEventListener('message', function(e) {            
  //    console.log(e.data) 
  // }, false)


  const [facts, setFacts] = useState([]);
  const [clients, setclients] = useState([]);
  const [listening, setListening] = useState(false);
  const [message, setmessage] = useState([]);
  //   useEffect( () => {
  //     if (!listening) {
  //       const events = new EventSource('http://localhost:3001/api/events');

  //       events.onmessage = (event) => {
  //         const parsedData = JSON.parse(event.data);

  //         setFacts((facts) => facts.concat(parsedData));
  //       };

  //       setListening(true);
  //     }
  //     // if (!listening) {
  //  /     events.onmessage = (event) => {
  //     //       const parsedData = JSON.parse(event.data);

  //     //       setclients((clients) => clients.concat(parsedData));
  //     //     };

  //     //     setListening(true);
  //     //   }
  //   }, [listening, facts,clients]);
  // console.log(facts)
  // console.log(clients)   //     const events = new EventSource('http://localhost:3001/api/client');

  //     /
 
  const viewMsg = (val) => {
    setmessage(val)
  }
  
  return (
    <div className='chat-div d-flex'>
      <div className='col-4'>
        <div className='left-body'>

          {data &&
            conversationList?.map(val =>
              <div>
                <ConversationDiv peoples={data} PersonId={val?.Members[1]===localStorage.getItem('UserId')&&val?.Members[0]||val?.Members[0]===localStorage.getItem('UserId')&&val?.Members[1]} ConversationId={val?._id} onClick={() => viewMsg(val)} />
              </div>
            )}
        </div>
      </div>
      <div className='col-8'>
        <div className='right-body'>
          {message?._id ?
            <MessageBody ConversationId={message?._id} />
            :
            <></>
          }

        </div>
      </div>
    </div>
  )
}
