import {SET_STORY} from './type'

const initialState = {
    story: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_STORY:
            return Object.assign({}, state, {story: action.payload})
            break
        default:
            return state
    }
}
