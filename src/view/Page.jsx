import Navbar from "../components/Navbar.jsx";
import Logo from "../assets/lws-logo-en.svg";
import Search from "../components/Search.jsx";
import CreateTaskModal from "../components/CreateTaskModal.jsx";
import Button from "../components/Button.jsx";
import Hero from "../components/Hero.jsx";
import HeroImage from "../assets/frame.png";
import Heading from "../components/Heading.jsx";
import Tasks from "../components/Tasks.jsx";
import Footer from "../components/Footer.jsx";
import {useContext, useState} from "react";
import {sortTaskData} from "../utilities/utilities.js";
import Task from "../components/Task.jsx";
import {tasksContext, tasksFormStatus} from "../context/index.jsx";


export default function Page() {
    let taskData = useContext(tasksContext);
    let {formMode, setFormMode} = useContext(tasksFormStatus);
    let year = new Date().getFullYear();
    let [taskToUpdate, setTaskToUpdate] = useState(null);

    let btnTxt = formMode === 'add' ? "Create Task" : "Save Task";
    let taskRender = [...taskData]?.sort(sortTaskData).map(task => {
        return <Task handleedit={handleEdit} key={task.id} task={task} />
    });

    function handleEdit(data) {
        setTaskToUpdate(data);
    }
    return (
        <>
            <Navbar logo={Logo}>
                {
                    formMode === 'edit' && <Search/>
                    || formMode === 'add' && <Search/>
                }
            </Navbar>
            {formMode === 'add' || formMode === 'edit' ?
            <CreateTaskModal tasktoupdate={taskToUpdate} settasktoupdate={setTaskToUpdate}>
                <Button skin={"red"} clickEvent={() => {
                    setFormMode(null);
                    if (taskToUpdate?.id) {
                        setTaskToUpdate(null);
                    }
                }}>Close</Button>
                <Button skin={"blue"} type={"submit"}>
                    {btnTxt}
                </Button>
            </CreateTaskModal> : <> <Hero heroImage={HeroImage}>
                <Heading>
                    Tasker
                </Heading>
                <p className="text-lg my-2 opacity-60">Effortlessly Organize, Prioritize, and Conquer Tasks
                    with
                    Tasker Your Personal Productivity Ally for Seamless Goal Achievement and Stress-Free
                    Task
                    Management.</p>
            </Hero>
                <Tasks>
                    {taskRender}
                </Tasks>
            </>}
            <Footer>
                Copyright &copy;{year} | All rights reserved by Learn with Sumit
            </Footer>
        </>
    )
}