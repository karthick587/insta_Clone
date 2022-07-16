import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";
import MessengerAction from "../../../redux/messager/actions";
import { useState } from "react";
import useSWR from 'swr'
import axios from 'axios';
const fetcher = url => fetch(url).then(r => r.json())
export default function SendMessage(props) {

    const dispatch = useDispatch()
    const { ConversationId } = props
    const history = useHistory();
    const message = useRef()
    const { UserDetails } = useSelector((state) => state.AuthReducer);

    const [chat, setchat] = useState([])

    const send = () => {
        console.log(localStorage.getItem('UserId'),ConversationId)
        if (localStorage.getItem('UserId') && ConversationId) {
            console.log("send")
            dispatch({
                type: MessengerAction.SEND_MESSAGE, payload:
                {
                    ConversationId: ConversationId,
                    sentBy: localStorage.getItem('UserId'),
                    text: message.current.value
                }
            })
            message.current.value=""
        }

    }
    return (
        <div className="d-flex">
            <input ref={message} />
            <button onClick={send} className="float-end" >Send</button>
        </div>

    )
}