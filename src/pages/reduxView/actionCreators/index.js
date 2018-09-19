import {
    ADD, SUBTRACT, VISIBLE, HIDDEN,
} from './typeConfig';

function createAddAction() {
    return {
        type: ADD,
    };
}

function createSubtractAction() {
    return {
        type: SUBTRACT,
    };
}

function createShowAction() {
    return {
        type: VISIBLE,
    };
}

function createHiddenAction() {
    return {
        type: HIDDEN,
    };
}

export {
    createAddAction,
    createSubtractAction,
    createShowAction,
    createHiddenAction,
};
