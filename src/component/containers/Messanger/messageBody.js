import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../../../utils/constants";
import Pusher from 'pusher-js';
import useSWR from 'swr'
import axios from 'axios';
import SendMessage from "./sendMesage";
const fetcher = url => fetch(url).then(r => r.json())
export default function MessageBody(props) {

    const dispatch = useDispatch()
    const history = useHistory();
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { following } = UserDetails
    const { ConversationId } = props
    const [chat, setchat] = useState([])



    const pusher = new Pusher('d9259f061ae07969923f', {
        cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    var fhfg = ""
    // const callback = (e) => {
    //     console.log(e)
    //     setchat(e)
    // }
    useEffect(() => {
        channel.bind('message', data => {
            setchat(data)
            console.log(data)
        });
    }, [channel])




    //     setchat(data)
    // //     }
    // // }, [data])
    // const events = new EventSource(`http://localhost:3001/api/events`);

    // events.onmessage = (event) => {
    //     const parsedData = JSON.parse(event.data);
    //     console.log(parsedData)
    //     if (parsedData?.ConversationId === ConversationId) {
    //         setchat([...chat, parsedData])

    //     }
    // };
    useEffect(() => {
        if (ConversationId) {
            fetch(`${API_URL}/api/messages/${ConversationId}`)
                .then(res => res.json())
                .then(res =>
                    setchat(res)
                )

            // const result = axios.get()
            // if (result?.data) {
            //     setchat(result.data)
            // }
            // console.log(result)
        }

    }, [ConversationId]);
    // // const { data, error } = useSWR(`https://insta-clone-database.vercel.app/api/messages/${ConversationId}`, fetcher)

    // // useEffect(() => {
    // //     if (data) {
    // //    
    // console.log(chat)
    return (
        <div className="Chat-person-Div">
            <div className="Chat-person-head">

            </div>
            <div className="Chat-person-body">
                {chat.length !== 0 ?
                    chat?.map(val =>
                        <div className={localStorage.getItem('UserId') === val?.sentBy ? "user_meaasge" : "meaasge"}>
                            {val.text}
                        </div>
                    )
                    :
                    <></>
                }
            </div>
            <div className="Chat-person-footer">
                <SendMessage ConversationId={ConversationId} />
            </div>
        </div>

    )
}