import { useDispatch, useSelector } from "react-redux";
import Postactions from "../../redux/post/actions";
import { useHistory } from "react-router-dom";

export default function Like(props) {
    const dispatch = useDispatch()
    const history = useHistory();
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { following } = UserDetails
    const { post, id } = props
    // console.log(people)
    // console.log(UserDetails.UserId)
    const Like = () => {
        dispatch({
            type: Postactions.SET_LIKE, payload: {
                data: {
                    likedUserId: UserDetails?.UserId,
                    PostId: post?._id
                },
                userId: id
            }
        })
    }
    return (
        <div class="p-2 rounded-full text-black" onClick={Like}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class={post?.likes?.find(val => val.likedUserId === UserDetails?.UserId) ? "color-pink s-30" : ""}>
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
        </div>
    )
}