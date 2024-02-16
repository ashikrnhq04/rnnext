import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import { NewsContext } from "../context";
import Error from "./Error";

function NewsFeed() {
  const { news } = useContext(NewsContext);
  return (
    <>
      <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
        {news.length == 0 && <Error message='No result found for the query!' />}
        {news
          ?.filter((item) => item.content)
          .slice(0, 9)
          .map((item, index) => (
            <NewsItem key={item.title} data={item} index={index} />
          ))}
      </div>
    </>
  );
}

export default React.memo(NewsFeed);
