export const Inprogres = (payload) => {
    return (dispatch, getState) => {
        let newkanban = [...getState().kanban.inprogresskanban]
        newkanban.push(payload);
        setTimeout(() => {
            dispatch ({type: 'ToInProgres', payload: newkanban})
            newkanban = [...getState().kanban.backlogkanban].filter((e) => {
                return e !== payload
            })
            dispatch({type: "ToBacklog", payload: newkanban})
        }, 20)
    }
}