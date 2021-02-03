export const query = (state = "", action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.query;
        default:
            return state;
    }
};