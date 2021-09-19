const initialTask = {
  task: [],
};

const todoReducer = (state = initialTask, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        task: [
          ...state.task,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newTask = state.task.filter((element) => element.id !== action.id);
      return {
        ...state,
        task: newTask,
      };
    default:
      return state;
  }
};

export default todoReducer;
