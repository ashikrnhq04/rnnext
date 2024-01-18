import avatar from "./../assets/avatar.png";
import {Fragment} from "react";



export default function Students({students}) {
    let studentofclass = [];
        for(let key in students) {
            let studentByClass = students[key].map((item, index) => {
                if(index == 0) {
                    return (
                        <Fragment key={key.split("-").join(" ").toString()}>
                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl capitalize" colSpan="4">
                                    {key.split("-").join(" ").toString()}
                                </td>
                            </tr>
                            <tr className="border-b border-[#7ECEB529]">
                                <td className="p-5 text-sm md:text-xl">{item.id}</td>
                                <td className="p-5 text-sm md:text-xl">
                                    <div className="flex space-x-3 items-center">
                                        <img className="w-8 h-8" src={avatar} width="32" height="32" alt={item.name}/>
                                        <span className="whitespace-nowrap">{item.name}</span>
                                    </div>
                                </td>
                                <td className="p-5 text-sm md:text-xl text-center">{item.grade}</td>
                                <td className="p-5 text-sm md:text-xl text-center">{item.parcentage}%</td>
                            </tr>
                        </Fragment>
                    )
                }
                return (
                    <tr key={item.name.split(" ").join("-")} className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">{item.id}</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img className="w-8 h-8" src={avatar} width="32" height="32" alt={item.name}/>
                                <span className="whitespace-nowrap">{item.name}</span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">{item.grade}</td>
                        <td className="p-5 text-sm md:text-xl text-center">{item.parcentage}%</td>
                    </tr>
                )
            });
            studentofclass = studentByClass.concat(studentofclass);
        }
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
                    {studentofclass}
                    </tbody>
                </table>
            </div>
        </>
    )
}