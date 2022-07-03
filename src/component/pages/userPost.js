import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import actions from "../../../src/redux/post/actions";
import Like from "../common/like";
import FeedDiv from "../common/feeds-div";
export default function UserPost() {
    const dispatch = useDispatch()
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { userPost } = useSelector((state) => state.PostReducer);
    useEffect(() => {
        if (UserDetails) {
            dispatch({
                type: actions.GET_POST_LIST_USER_ID, payload: UserDetails?.UserId
            });
        }
    }, [UserDetails])
    console.log(userPost)
    return (
        <div className="mt-3">
            {userPost ?
                userPost?.map(val =>
                    <FeedDiv val={val} />
                )
                :
                <></>}
        </div>

    )
}