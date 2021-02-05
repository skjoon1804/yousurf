export const setSearchQuery = (query) => {
    return {
        type: 'SET_SEARCH_QUERY',
        query
    };
};

export const setResults = (results) => {
    return {
        type: 'SET_RESULTS',
        results
    };
};

export const setNextPageToken = (nextPageToken) => {
    return {
        type: 'SET_NEXT_PAGE_TOKEN',
        nextPageToken
    }
}

export const addResults = (results) => {
    return {
        type: 'ADD_RESULTS',
        results
    }
}