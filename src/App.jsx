import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Page from "./view/Page.jsx";
import TaskElementProvider from "./context/index.jsx";


function App() {
    return (
        <>
            <TaskElementProvider>
                <ToastContainer autoClose={500} position="top-center"/>
                <Page />
            </TaskElementProvider>
        </>
    )
}

export default App