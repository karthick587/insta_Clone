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
    
    
    const [ facts, setFacts ] = useState([]);
    const [ clients, setclients ] = useState([]);
  const [ listening, setListening ] = useState(false);

  useEffect( () => {
    if (!listening) {
      const events = new EventSource('http://localhost:3001/api/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setFacts((facts) => facts.concat(parsedData));
      };

      setListening(true);
    }
    if (!listening) {
        const events = new EventSource('http://localhost:3001/api/client');
  
        events.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
  
          setclients((clients) => clients.concat(parsedData));
        };
  
        setListening(true);
      }
  }, [listening, facts,clients]);
console.log(facts)
console.log(clients)

    return (
        // <div>
        //     messenger
        //     <div>
        //         <div>
        //             <p>Reciver id</p>
        //             <input ref={reciverId} />
        //         </div>
        //         <div>
        //             <p>message</p>
        //             <input ref={text} />
        //         </div>
        //     </div>
        //     <button
        //     //  onClick={send}
        //     >
        //         send
        //     </button>

        //     {fhfg}
        // </div>
        <table className="stats-table">
        <thead>
          <tr>
            <th>Fact</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {
            facts.map((fact, i) =>
              <tr key={i}>
                <td>{fact.info}</td>
                <td>{fact.source}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
}
