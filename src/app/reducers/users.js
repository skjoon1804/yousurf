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
        
        
        default:
            return state;
    }
}