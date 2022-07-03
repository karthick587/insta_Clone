import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import actions from "../../../src/redux/post/actions";
import Like from "../common/like";
import FeedDiv from "../common/feeds-div";
export default function PeoplesPost(props) {
    const dispatch = useDispatch()
    const { people } = props
    const { userPost } = useSelector((state) => state.PostReducer);
    useEffect(() => {
        if (people) {
            dispatch({
                type: actions.GET_POST_LIST_USER_ID, payload: people?.UserId
            });
        }
    }, [people])
    console.log(userPost)
    return (
        <div>
            {userPost ?
                userPost?.map(val =>
                  <FeedDiv val={val} /> 
                )
                :
                <></>}
        </div>

    )
}