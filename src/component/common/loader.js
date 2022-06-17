import { useSelector } from "react-redux";
export default function Loader() {
    const { loader } = useSelector((state) => state.AuthReducer);

    return (
        loader ?
            <div className="loader-bg">
                <div className="loading">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            :
            <></>
    )
}