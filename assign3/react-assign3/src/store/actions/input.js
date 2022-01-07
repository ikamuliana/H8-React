export const kanbanForm = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch ({type: 'AddKanban', payload: payload})
        }, 20)
    }
}