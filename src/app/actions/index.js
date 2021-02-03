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