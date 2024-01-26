import Search from "./Search.jsx";
import TasksActionHead from "./TasksActionHead.jsx";
import {tasksContext, tasksDispatch, tasksStatus} from "../context/index.jsx";
import {useContext} from "react";
import Button from "./Button.jsx";
import {toast} from "react-toastify";
import TaskBoard from "./TaskBoard.jsx";


export default function Tasks({children}) {
    const dispatch = useContext(tasksDispatch);
    const tasksData = useContext(tasksContext);
    let {setFormMode} = useContext(tasksStatus);


    function showToastDeleteAll() {
        toast.info("All tasks are removed from the list");
    }



    return (
        <>
            <section className="mb-20 relative" id="tasks">
                <div className="container">
                    <div className="p-2 flex justify-end">
                        <Search/>
                    </div>
                    <TaskBoard>
                        <TasksActionHead heading={"Your Tasks"} isAddTask>
                            <Button skin={'blue'} clickEvent={() => {
                                setFormMode('add');
                            }}>
                                Add Task
                            </Button>
                            <Button disable={tasksData.length === 0} clickEvent={() => {
                                dispatch({type: 'deleteAll'});showToastDeleteAll();
                            }
                            } skin={'red'}>
                                Delete All
                            </Button>
                        </TasksActionHead>
                        <div className="overflow-auto">
                            {tasksData.length > 0 ?
                                <table className="table-fixed overflow-auto xl:w-full">
                                    <thead>
                                    <tr>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title</th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description</th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags</th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority</th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {children}
                                    </tbody>
                                </table> : <div className="text-center text-2xl font-semibold">No task found!</div>}
                        </div>
                    </TaskBoard>
                </div>
            </section>
        </>
    )
}