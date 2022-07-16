import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function ConversationDiv(props) {

    const dispatch = useDispatch()
    const history = useHistory();
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { following } = UserDetails
    const { PersonId, peoples ,onClick} = props

    // console.log(people)
    const [person, setPerson] = useState()
    // console.log(UserDetails.UserId)

    useEffect(() => {
        if (peoples && PersonId) {
            setPerson(peoples?.find(val => val._id === PersonId))
        }

    }, [peoples, PersonId])


    return (
        <div className="Chat-person-Div">
            <div class="flex items-center justify-between py-3">
                <div class="flex flex-1 items-center space-x-4" onClick={onClick}>
                    <a href="">
                        <img src={person?.ProfileImage} class="bg-gray-200 rounded-full w-10 h-10" />
                    </a>
                    <div class="flex flex-col">
                        <span class="block capitalize font-semibold">{person?.UserName}</span>
                    </div>
                </div>
                <div className="float-end">
                    10:00 pm
                </div>
            </div>
        </div>
    )
}