export default function user (state = {}, action) {
    switch (action.type) {
        case 'LOG_USER':
            return {...action.user}
        default :
            return state;
    }
}