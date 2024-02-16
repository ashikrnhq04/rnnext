import React, { useContext } from "react";
import SidebarNewsItem from "./SidebarNewsItem";
import { NewsContext } from "../context";

function Sidebar() {
  const { news } = useContext(NewsContext);
  return (
    <div className='col-span-12 self-start xl:col-span-4'>
      <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
        {news
          ?.filter((item) => item.content)
          .slice(9, 14)
          .map((item, index) => (
            <SidebarNewsItem key={item.title} index={index} news={item} />
          ))}
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
