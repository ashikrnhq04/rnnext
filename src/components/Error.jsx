import { useContext } from "react";
import { NewsContext } from "../context";

export default function Error({ message }) {
  const { error } = useContext(NewsContext);
  return (
    <div className='mx-auto flex align-middle justify-center text-4xl text-center col-span-12'>
      <span className='py-20 px-40 bg-red-200 rounded-lg my-20'>
        {error || message}
      </span>
    </div>
  );
}
