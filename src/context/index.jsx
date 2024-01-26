import {createContext, useState} from "react";
import {useImmerReducer} from "use-immer";
import taskReducers from "../reducers/task-reducer/taskReducers.js";
import taskList from "../data.js";

export const tasksContext = createContext([]);
export const tasksDispatch = createContext();
export const tasksFormStatus = createContext();

export default function TaskElementProvider({children}) {
    let [tasksList, dispatch] = useImmerReducer( taskReducers, taskList || []);
    let [formMode, setFormMode] = useState({});
    return (
        <tasksContext.Provider value={tasksList}>
            <tasksDispatch.Provider value={dispatch}>
                <tasksFormStatus.Provider value={{formMode, setFormMode}}>
                    {children}
                </tasksFormStatus.Provider>
            </tasksDispatch.Provider>
        </tasksContext.Provider>
    )
}