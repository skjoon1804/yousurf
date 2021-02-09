export const users = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [...state, {
                id: action.userID,
                username: action.username,
                passwordHash: action.passwordHash,
                email: action.email,
                dob: action.dob,
                maxResults: 5,
                favorite: []
            }];
        case 'REMOVE_FAVORITE':
            return users.map(user => {
                return (user.id === action.userID) ? {
                    ...user, favorite: user.favorite.filter(
                        fav => fav.videoID === action.videoID
                    )
                } :
                user
            });
        case 'ADD_FAVORITE':
            return users.map(user => {
                return (user.id === action.userID) ? {
                    ...user, favorite: [
                        ...user.favorite,
                        {videoID: action.videoID}
                    ]
                } :
                user
            });
        default:
            return state;
    }
}