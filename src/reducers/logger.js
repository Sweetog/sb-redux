/* eslint-disable import/no-anonymous-default-export */
export default function (state = false, action) {
    switch (action.type) {
        case 'SIGNIN':
            return !state;
        default:
            return state;
    }
}