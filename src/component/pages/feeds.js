import { useEffect } from "react";
import Header from "../common/header";
import SideNavbar from "../common/sideNavbar";
import PeopleCard from "../containers/PeopleList/PeopleCard";
import { useDispatch, useSelector } from "react-redux";
import Peopleactions from "../../redux/people/actions";
import useSWR from 'swr'
import Postactions from "../../redux/post/actions";
import Like from "../common/like";
import FeedDiv from "../common/feeds-div";
const fetcher = url => fetch(url).then(r => r.json())
export default function Feeds() {
    const { feeds } = useSelector((state) => state.PostReducer);
    const dispatch = useDispatch()
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    var data = []
    useEffect(() => {
        if (UserDetails?.UserId) {
            dispatch({ type: Postactions.GET_FEEDS, payload: UserDetails?.UserId })
        }
    }, [UserDetails])
    return (



        <div id="wrapper">
            <SideNavbar />
            <div class="main_content">
                <Header />
                <div class="container pro-container m-auto p-0 padding-top">
                    <div >
                        <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">

                            <div class="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100">
                                <div className="feed-body" >
                                    {feeds ?
                                        feeds?.map(val =>
                                            <FeedDiv val={val} />
                                        )
                                        :
                                        <></>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}