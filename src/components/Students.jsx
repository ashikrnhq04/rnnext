import avatar from "./../assets/avatar.png";
import {useState} from "react";



export default function Students({students}) {
    let [studentlist, setStudentList] = useState(students);
    let studentofclassone, studentofclasstwo, studentofclassthree;
    studentofclassone = studentlist['class-one'].map(item => {
        return (<tr key={item.name.split(" ").join("-")} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{item.id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img className="w-8 h-8" src={avatar} width="32" height="32" alt={item.name}/>
                    <span className="whitespace-nowrap">{item.name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{item.grade}</td>
            <td className="p-5 text-sm md:text-xl text-center">{item.parcentage}%</td>
        </tr>)
    });
    studentofclasstwo = studentlist['class-two'].map(item => {
        return (<tr key={item.name.split(" ").join("-")} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{item.id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img className="w-8 h-8" src={avatar} width="32" height="32" alt={item.name}/>
                    <span className="whitespace-nowrap">{item.name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{item.grade}</td>
            <td className="p-5 text-sm md:text-xl text-center">{item.parcentage}%</td>
        </tr>)
    });
    studentofclassthree = studentlist['class-three'].map(item => {
        return (<tr key={item.name.split(" ").join("-")} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{item.id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img className="w-8 h-8" src={avatar} width="32" height="32" alt={item.name}/>
                    <span className="whitespace-nowrap">{item.name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{item.grade}</td>
            <td className="p-5 text-sm md:text-xl text-center">{item.parcentage}%</td>
        </tr>)
    });


    return (
        <>
            <div className="max-w-[848px] mx-auto overflow-auto">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">ID</th>
                        <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
                        <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                        <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class One
                        </td>
                    </tr>
                    {studentofclassone}
                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Two
                        </td>
                    </tr>
                    {studentofclasstwo}
                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Three
                        </td>
                    </tr>
                    {studentofclassthree}
                    </tbody>
                </table>
            </div>
        </>
    )
}