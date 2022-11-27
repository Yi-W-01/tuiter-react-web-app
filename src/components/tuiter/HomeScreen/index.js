
import TuitList from "../TuitList/tuit-list";
import WhatsHappening
    from "../WhatsHappening/whats-happening";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const setNavActive = (active) => {
        return {
            type: "change-active",
            active,
        };
    };

    useEffect(() => {
        dispatch(setNavActive("Home"));
    }, [dispatch]);

    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    )
}
export default HomeScreen;