import {
    ADD, SUBTRACT, VISIBLE, HIDDEN,
} from '../actionCreators/typeConfig';

const reducers = {
    count: (state, action) => {
        const { type } = action;
        const newState = Object.assign({ count: 0 }, state);
        switch (type) {
            case ADD:
                newState.count = state.count + 1;
                break;
            case SUBTRACT:
                newState.count = state.count - 1;
                break;
            default:
                break;
        }
        return newState;
    },
    visible: (state, action) => {
        const { type } = action;
        const newState = Object.assign({ visible: true }, state);
        switch (type) {
            case VISIBLE:
                newState.visible = true;
                break;
            case HIDDEN:
                newState.visible = false;
                break;
            default:
                break;
        }
        return newState;
    },
};
export default reducers;
