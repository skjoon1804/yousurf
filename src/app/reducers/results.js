export const results = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.results;
        case 'ADD_RESULTS':
            console.log("ADD_RESULTS");
            return [...state, action.results];
        default:
            return state;
    }
};

export const nextPageToken = (state = "", action) => {
    switch (action.type) {
        case 'SET_NEXT_PAGE_TOKEN':
            return action.nextPageToken;
        default:
            return state;
    }
}