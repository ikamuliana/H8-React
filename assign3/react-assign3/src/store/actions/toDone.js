export const toDone = (payload) => {
    return (dispatch, getState) => {
      let newkanban = [...getState().kanban.donekanban];
      newkanban.push(payload);
      setTimeout(() => {
        dispatch({ type: "ToDone", payload: newkanban });
        newkanban = [...getState().kanban.evaluatekanban].filter((el) => {
          return el !== payload;
        });
        dispatch({ type: "ToEvaluate", payload: newkanban });
      }, 20);
    };
  };