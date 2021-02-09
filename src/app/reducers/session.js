export const session = (state={}, action) => {
    let {type, authenticated, session} = action;
    switch (type) {
        case 'SET_STATE':
            return {...state, id: action.state.session.id};
        case 'PROCESS_AUTHENTICATE_USER':
            return {...state, authenticated}
        default:
            return state;
    }
}