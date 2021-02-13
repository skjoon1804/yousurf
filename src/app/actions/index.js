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

export const setState = (state = {}) => {
    return {
        type: 'SET_STATE',
        state
    }
}

export const processAuthenticateUser = (status='AUTHENTICATING', session=null) => {
    return {
        type: 'PROCESS_AUTHENTICATE_USER',
        session,
        authenticated: status
    }
}

export const removeFavorite = (userID, videoID) => {
    return {
        type: 'REMOVE_FAVORITE',
        userID,
        videoID
    }
}

export const addFavorite = (userID, videoID, imageUrl, title, description) => {
    return {
        type: 'ADD_FAVORITE',
        userID,
        videoID,
        imageUrl,
        title,
        description
    }
}

export const setName = (userID, name) => {
    return {
        type: 'SET_NAME',
        userID,
        name
    }
}

export const setEmail = (userID, email) => {
    return {
        type: 'SET_EMAIL',
        userID,
        email
    }
}

export const setDob = (userID, dob) => {
    return {
        type: 'SET_DOB',
        userID,
        dob
    }
}

export const createUser = (
    id, username, passwordHash, name, email, dob
) => {
    return {
        type: 'CREATE_USER',
        id,
        username,
        passwordHash,
        name,
        email,
        dob
    }
}