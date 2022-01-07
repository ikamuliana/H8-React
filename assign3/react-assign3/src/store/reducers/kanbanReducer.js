const initialState = {
    inputkanban: "",
    backlogkanban: [],
    inprogresskanban: [],
    evaluatekanban: [],
    donekanban: []
}

export default function kanbanReducer (state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case 'AddKanban':
            return{...state, inputkanban: payload};
        case 'ToBacklog':
            return{...state, backlogkanban: payload};
        case 'ToInProgres':
            return{...state, inprogresskanban: payload};
        case 'ToEvaluate':
            return{...state, evaluatekanban: payload};
        case 'ToDone':
            return{...state, donekanban: payload};
        default:
            return state
    }
}