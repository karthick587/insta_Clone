import Header from "../common/header";
import SideNavbar from "../common/sideNavbar";
import Explore from "../containers/PeopleProfile/explore";
import Heighths from "../containers/PeopleProfile/heighths";
import UserDetails from "../containers/PeopleProfile/userDetails";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Peopleactions from "../../redux/people/actions";
import PeoplePost from "./peoplePost";
export default function PeopleProfile() {
    const dispatch = useDispatch()
    const { PeopleProfile } = useSelector((state) => state.PeopleReducer);
    const state = useLocation();
    console.log(state)
    useEffect(() => {
        dispatch({
            type: Peopleactions.GET_PEOPLE_PROFILE, payload: state.state
        }
        );
    }, [])
    return (
        <div id="wrapper">

            <SideNavbar />
            <div class="main_content">
                <Header />
                <div class="container pro-container m-auto">

                    <UserDetails />
                    <h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-8"> Highths </h1>
                    <PeoplePost />


                    <div class="flex justify-center mt-6">
                        <a href="#" class="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white"> Load more ..</a>
                    </div>


                </div>

            </div>
        </div>
    )
}