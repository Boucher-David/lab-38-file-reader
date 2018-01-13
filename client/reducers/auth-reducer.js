const initialState = {
    loggedIn: false
};

export default (state = initialState, action) => {
    let {type, payload} = action;
    let newState = {...state};

    switch(type) {

        case 'SIGNUP':
            newState.message = payload.message;
            return newState;

        case 'SIGNIN':
            newState.loggedIn = payload.authenticated;
            newState.message = payload.message;
            return newState;

        case 'SIGNOUT':
            newState.loggedIn = false;
            delete newState.message;
            return newState;

        case 'INIT':

            newState.loggedIn = payload;
            return newState;

        case 'ERROR':
            newState.message = payload;
            return newState;

        case 'UPDATE':
            newState.message = payload.message;
            newState.loggedIn = !payload.authenticated;
            return newState;

        default:
            return newState
    }

}