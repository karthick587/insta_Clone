import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/auth/actions";
import { Link } from "react-router-dom";
export default function UserDetails() {
    const dispatch = useDispatch()
    const { UserDetails } = useSelector((state) => state.AuthReducer);
    const [update, setupdate] = useState(false)
    const [profileImg, SetprofilrImg] = useState([])
    var imgPreview = UserDetails?.ProfileImage
    if (profileImg[0]) {
        imgPreview = URL.createObjectURL(profileImg[0]);
    }
    const UserName = useRef()
    const Status = useRef()
    const District = useRef()
    console.log(UserDetails)
    const Update = () => {
        const data = new FormData();
        data.append("file", profileImg[0]);
        data.append("id", UserDetails?.UserId);
        data.append("status", Status.current.value);
        data.append("UserName", UserName.current.value);
        data.append("District", District.current.value);
        dispatch({
            type: actions.UPDATE_USER_DETAILS, payload:{data:data,userId:UserDetails?.UserId}
        });
        setupdate(false)
    }
    return (update ?
        <div class="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
            <div>
                <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">
                    <img src={imgPreview} class="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />

                    <div class="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                        <a href="#" class="hover:text-white profile-page-image">
                            <input type="file" className="profile-page-image-input" onChange={(e) => SetprofilrImg(e.target.files)} />
                            <i class="uil-camera"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:w/8/12 flex-1 flex flex-col lg:items-start ">

                <h4 className="font-semibold mb-1">Name</h4>
                <input type="text" class="profile-update-input font-semibold lg:text-2xl text-lg mb-2" defaultValue={UserDetails?.UserName} ref={UserName} />
                <h4 className="font-semibold mb-1">District</h4>
                <input type="text" class="lg:text-left mb-2 text-center  dark:text-gray-100" defaultValue={UserDetails?.District} ref={District} />
                <h4 className="font-semibold mb-1">status</h4>
                <textarea type="text" class="lg:text-left mb-2 text-center  dark:text-gray-100" defaultValue={UserDetails?.status} ref={Status} />



                <div class="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
                    <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a>
                </div>


                <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
                    <a href="#" class="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700" onClick={Update}>Save
                    </a>
                    <div>

                        <a href="#" class="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700">
                            <i class="icon-feather-chevron-down"></i>
                        </a>

                        <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900" uk-drop="mode: click">

                            <ul class="space-y-1">
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-user-minus mr-2"></i>Unfriend
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-eye-slash  mr-2"></i>Hide Your Story
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-share-alt mr-2"></i> Share This Profile
                                    </a>
                                </li>
                                <li>
                                    <hr class="-mx-2 my-2  dark:border-gray-700" />
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                        <i class="uil-stop-circle mr-2"></i> Block
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
                    <div class="flex lg:flex-row flex-col"> {UserDetails?.posts} <strong class="lg:pl-2">Posts</strong></div>
                    <div class="lg:pl-4 flex lg:flex-row flex-col"> {UserDetails?.followersCount} <strong class="lg:pl-2">Followers</strong></div>
                    <div class="lg:pl-4 flex lg:flex-row flex-col"  >  {UserDetails?.followingCount} <strong class="lg:pl-2">Following</strong></div>
                </div>
            </div>
            <div class="w-20"></div>
        </div>
        :
        <div class="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
            <div>
                <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">
                    <img src={UserDetails?.ProfileImage} class="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />
                    {/* <div class="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                        <a href="#" class="hover:text-white">
                            <i class="uil-camera"></i>
                        </a>
                        <a href="#" class="hover:text-white">
                            <i class="uil-crop-alt"></i>
                        </a>
                    </div> */}
                </div>
            </div>
            <div class="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center">
                <h2 class="font-semibold lg:text-2xl text-lg mb-2">{UserDetails?.UserName}</h2>
                <p class="lg:text-left mb-2 text-center  dark:text-gray-100"> {UserDetails?.status}</p>
                <div class="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
                    <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a>
                </div>
                <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
                    <a href="#" class="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700" onClick={() => setupdate(true)}>Edit Prifile</a>
                    <div>
                        <a href="#" class="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700">
                            <i class="icon-feather-chevron-down"></i>
                        </a>
                        <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900" uk-drop="mode: click">
                            <ul class="space-y-1">
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-user-minus mr-2"></i>Unfriend
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-eye-slash  mr-2"></i>Hide Your Story
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                                        <i class="uil-share-alt mr-2"></i> Share This Profile
                                    </a>
                                </li>
                                <li>
                                    <hr class="-mx-2 my-2  dark:border-gray-700" />
                                </li>
                                <li>
                                    <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                        <i class="uil-stop-circle mr-2"></i> Block
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
                    <div class="flex lg:flex-row flex-col"> {UserDetails?.posts} <strong class="lg:pl-2">Posts</strong></div>
                    <Link to="/FollowersPeopleList" class="lg:pl-4 flex lg:flex-row flex-col"> {UserDetails?.followersCount} <strong class="lg:pl-2">Followers</strong></Link>
                    <Link to="/FollowingPeopleList" class="lg:pl-4 flex lg:flex-row flex-col">  {UserDetails?.followingCount} <strong class="lg:pl-2">Following</strong></Link>
                </div>
            </div>
            <div class="w-20"></div>
        </div>
    )
}