import { createSlice } from '@reduxjs/toolkit';

const getInitialTask = () => {
  // getting task list
  const localTaskList = window.localStorage.getItem('taskList');
  // if task list is not empty
  if (localTaskList) {
   // return JSON.parse(localTaskList);
   return localTaskList;
  }
  window.localStorage.setItem('taskList', []);
  return [];
};

const initialValue = {
  filterStatus: 'all',
  taskList: getInitialTask(),
};

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialValue,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
      const taskList = window.localStorage.getItem('taskList');
      if (taskList) {
        //const taskListArr = JSON.parse(taskList);
        const taskListArr = taskList;
        taskListArr.push({
          ...action.payload,
        });
        //window.localStorage.setItem('taskList', JSON.stringify(taskListArr));
        window.localStorage.setItem('taskList', taskListArr);
      } else {
        window.localStorage.setItem(
          'taskList',
          //JSON.stringify([
            ([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateTask: (state, action) => {
      const taskList = window.localStorage.getItem('taskList');
      if (taskList) {
        const taskListArr = JSON.parse(taskList);
        taskListArr.forEach((task) => {
          if (task.id === action.payload.id) {
            task.status = action.payload.status;
            task.title = action.payload.title;
            task.data = action.payload.data;
            task.description = action.payload.description;
            task.priority = action.payload.priority;
          }
        });
        window.localStorage.setItem('taskList', JSON.stringify(taskListArr));
        state.taskList = [...taskListArr];
      }
    },
    deleteTask: (state, action) => {
      const taskList = window.localStorage.getItem('taskList');
      if (taskList) {
        const taskListArr = JSON.parse(taskList);
        taskListArr.forEach((task, index) => {
          if (task.id === action.payload) {
            taskListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('taskList', JSON.stringify(taskListArr));
        state.taskList = taskListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, updateFilterStatus } =
  taskSlice.actions;
export default taskSlice.reducer;