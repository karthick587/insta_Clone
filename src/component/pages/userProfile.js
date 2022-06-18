import Header from "../common/header";
import SideNavbar from "../common/sideNavbar";
import Explore from "../containers/Userprofile/explore";
import Heighths from "../containers/Userprofile/heighths";
import UserDetails from "../containers/Userprofile/userDetails";

import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/actions";
import { useEffect } from "react";
import UserPost from "./userPost";
export default function UserProfile() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch({ type: actions.SET_LOADER, payload: false });
    // }, [])
    return (
        <div id="wrapper">
            <SideNavbar />
            <div class="main_content">
                <Header />
                <div class="container pro-container m-auto">
                    <UserDetails />
                    <h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-8"> Highths </h1>
                    <UserPost />
                </div>
            </div>
        </div>
    )
}