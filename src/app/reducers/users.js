export const users = (state = [], action) => {
    switch (action.type) {
        case 'SET_STATE':
            return action.state.users;
        case 'CREATE_USER':
            return [...state, {
                id: action.userID,
                username: action.username,
                passwordHash: action.passwordHash,
                name: action.name,
                email: action.email,
                dob: action.dob,
                maxResults: 5,
                favorite: []
            }];
        case 'REMOVE_FAVORITE':
            return state.map(user => {
                return (user.id === action.userID) ? {
                    ...user, favorite: user.favorite.filter(
                        fav => fav.videoID !== action.videoID
                    )
                } :
                user
            });
        case 'ADD_FAVORITE':
            return state.map(user => {
                return (user.id === action.userID) ? {
                    ...user, favorite: [
                        ...user.favorite,
                        {videoID: action.videoID}
                    ]
                } :
                user
            });
        case 'SET_NAME':
            return state.map(user => {
                return (user.id === action.userID) ? {
                    ...user, name: action.name
                } :
                user
            });
        case 'SET_EMAIL':
            return state.map(user => {
                return (user.id === action.userID) ? {
                    ...user, email: action.email
                } :
                user
            });
        case 'SET_DOB':
            return state.map(user => {
                return (user.id === action.userID) ? {
                    ...user, dob: action.dob
                } :
                user
            });
        default:
            return state;
    }
}