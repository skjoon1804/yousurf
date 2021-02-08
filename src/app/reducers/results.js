export const results = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return action.results;
        case 'ADD_RESULTS':
            let oldResults = [...state];
            return oldResults.concat(action.results);
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