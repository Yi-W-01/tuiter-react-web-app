import nav from "../data/nav.json";

const navReducer = (state = nav, action) => {
    switch (action.type) {
        case "change-active":
            const { active } = action;
            return { ...state, active };
        default:
            return state;
    }
};

export default navReducer;