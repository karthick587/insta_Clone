import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/people/actions";
import { useHistory } from "react-router-dom";

export default function PeopleCard(props) {
    const dispatch = useDispatch()
    const history = useHistory();
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const { following } = UserDetails
    const { people } = props
    // console.log(people)
    // console.log(UserDetails.UserId)
    const follow = () => {
        dispatch({
            type: actions.SET_FOLLOW_PEOPLE, payload:{UserId:UserDetails.UserId,ToFollowId:people?._id}
        });
        dispatch({ type: actions.GET_PEOPLE_LIST })
    }
    const Unfollow = () => {
        dispatch({
            type: actions.SET_UNFOLLOW_PEOPLE, payload:{UserId:UserDetails.UserId,ToUnFollowId:people?._id}
        });
        dispatch({ type: actions.GET_PEOPLE_LIST })
    }

    function ViewPeopleProfile() {
      
        history.push('/PeopleProfile',people?._id);
    };

    return (
        <div class="flex items-center justify-between py-3">
            <div class="flex flex-1 items-center space-x-4">
                <a onClick={ViewPeopleProfile} href="">
                    <img src={people?.ProfileImage} class="bg-gray-200 rounded-full w-10 h-10" />
                </a>
                <div class="flex flex-col">
                    <span class="block capitalize font-semibold">{people?.UserName}</span>
                    <span class="block capitalize text-sm"> {people?.District} </span>
                </div>
            </div>
            {following.find(val => val.UserId === people._id) ?
                <a href="#" onClick={Unfollow} class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> UnFollow </a>
                :
                <a href="#" onClick={follow} class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" > Follow </a>
            }
        </div>
    )
}