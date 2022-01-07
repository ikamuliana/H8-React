export const Toevaluate = (payload) => {
    return (dispatch, getState) => {
        let newkanban = [...getState().kanban.evaluatekanban]
        newkanban.push(payload)
        setTimeout(() => {
            dispatch ({type: "ToEvaluate", payload: newkanban})
            newkanban = [...getState().kanban.inprogresskanban].filter((e) => {
                return e !== payload
            })
            dispatch({type: "ToInProgres", payload: newkanban})
        }, 20)
    }
}