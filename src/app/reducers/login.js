export const login = (state=true, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state;
        default:
            return state;
    }
}