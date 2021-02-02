const queryReducer = (state = "", action) => {
    console.log("TEST!!", action.query);
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.query;
        default:
            return state;
    }
}
export default queryReducer;