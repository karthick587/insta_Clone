import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../../../utils/constants";
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
    // const { data, error } = useSWR(`https://insta-clone-database.vercel.app/api/messages/${ConversationId}`, fetcher)

    // useEffect(() => {
    //     if (data) {
    //         setchat(data)
    //     }
    // }, [data])
    const events = new EventSource(`http://localhost:3001/api/events`);

    events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData)
        if (parsedData?.ConversationId === ConversationId) {
            setchat([...chat, parsedData])
            
        }
    };
    console.log(chat)
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