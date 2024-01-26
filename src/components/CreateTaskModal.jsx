import {useContext, useState} from "react";
import {tasksDispatch, tasksStatus} from "../context/index.jsx";
import {toast} from "react-toastify";



export default function CreateTaskModal({settasktoupdate, tasktoupdate, children}) {
    const {formMode, setFormMode} = useContext(tasksStatus);
    const dispatch = useContext(tasksDispatch);
    let [formData, setFormData] = useState(  tasktoupdate || {
        id: null,
        title: "", description: "", tags: "", priority: ""
    });


    const toastShowError = () => {
        toast.error("One or more fields are empty!");
    };
    const toastShowSuccess = () => {
        toast.success("Your task has been added into the list.");
    }

    const toastShowUpdate = () => {
        toast.success("Your task has been updated.");
    }

    function updateHandler(e) {
        e.preventDefault();
        for(let key in formData) {
            if(formData[key] === ""){
                toastShowError();
                return;
            }
        }
        dispatch({
            type: "update",
            data: formData
        });
        toastShowUpdate();
        setFormMode(null);
        settasktoupdate(null);
        setFormData({
            id: null,
            title: "", description: "", tags: "",
            priority: ""
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        for(let key in formData) {
            if(formData[key] === ""){
                toastShowError();
                return;
            }
        }
        dispatch({
            type: "create",
            data: formData
        });
        toastShowSuccess();
        setFormData({
            id: null,
            title: "", description: "", tags: "", priority: ""
        })
    }

    return (
        <>
            <form onSubmit={formMode === 'edit' ? updateHandler : handleSubmit} method="POST" className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    {formMode === 'edit' ? "Edit the task" : "Add New Task"}
                </h2>
                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => setFormData(formData => (
                                    {...formData, [e.target.name]: e.target.value}
                                )
                            )}
                            value={formData.title}
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[120px]"
                            type="text"
                            name="description"
                            id="description"
                            
                            onChange={(e) => setFormData(formData => (
                                    {...formData, [e.target.name]: e.target.value}
                                )
                            )}
                            value={formData.description}
                        ></textarea>
                    </div>
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                
                                onChange={(e) => setFormData(formData => (
                                        {...formData, [e.target.name]: e.target.value.split(",")}
                                    )
                                )}
                                value={formData.tags}
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5" name="priority" id="priority"  value={formData.priority} onChange={(e) => setFormData(formData => (
                                        {...formData, [e.target.name]: e.target.value}
                                    )
                                )}>
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-between lg:mt-20">
                    {children}
                </div>
            </form>
        </>
    )
}