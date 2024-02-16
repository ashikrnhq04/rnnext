import { useContext } from "react";
import { NewsContext } from "../context";

export default function Loading() {
  const { loading } = useContext(NewsContext);
  return (
    <div className='mx-auto flex align-middle justify-center text-4xl text-center col-span-12'>
      <span className='py-20 px-40 bg-slate-200 rounded-lg my-20'>
        {loading.message}
      </span>
    </div>
  );
}
