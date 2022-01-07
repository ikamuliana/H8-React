import { kanbanForm } from "./input"

export const Tobacklog = (payload) => {
    return (dispatch, getState) => {
        const newkanban = [...getState().kanban.backlogkanban]
        newkanban.push(payload)
        setTimeout(() => {
            dispatch ({type: "ToKanban", payload: newkanban})
            dispatch(kanbanForm(""))
        }, 20)
    }
}