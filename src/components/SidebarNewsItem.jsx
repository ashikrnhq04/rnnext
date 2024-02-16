import formatTime from "../utils";

export default function SidebarNewsItem({ news, index }) {
  const { title, url, urlToImage, content, publishedAt } = news;
  const newsTime = formatTime(publishedAt);
  return (
    <div key={title} className='col-span-12 mb-6 md:col-span-8'>
      {index === 0 && <img className='w-full' src={urlToImage} alt='thumb' />}
      <div className='col-span-12 mt-6 md:col-span-4'>
        <a target='_blank' href={url}>
          <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>{title}</h3>
        </a>
        <p className='text-base text-[#292219]'>
          {content.split(" ").slice(0, 10).join(" ")}
        </p>
        <p className='mt-5 text-base text-[#94908C]'>{newsTime}</p>
      </div>
    </div>
  );
}
