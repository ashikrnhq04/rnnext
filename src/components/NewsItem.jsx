import formatTime from "../utils";

export default function NewsItem({ data, index }) {
  const { title, content, urlToImage, url, publishedAt } = data;
  const newsTime = formatTime(publishedAt);

  let gridSize;
  switch (index) {
    case 0:
      gridSize = "col-span-12 grid grid-cols-12 gap-4";
      break;
    case 1:
      gridSize = `col-span-12 grid grid-cols-12 gap-4 ${
        urlToImage && "lg:col-span-8"
      }`;
      break;
    default:
      gridSize = "col-span-12 md:col-span-6 lg:col-span-4";
  }

  return (
    <>
      <div className={gridSize}>
        <div
          className={`${
            index === 0
              ? `col-span-12 ${urlToImage && "lg:col-span-4"}`
              : "col-span-12 md:col-span-6"
          }`}>
          {url && (
            <a target='_blank' href={url}>
              <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>
                {title && title}
              </h3>
            </a>
          )}
          {!url && (
            <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>
              {title && title}
            </h3>
          )}
          {index == 0 && content && (
            <p className='text-base text-[#5C5955]'>{content}</p>
          )}
          {index > 0 && content && (
            <p className='text-base text-[#5C5955]'>
              {content.split(" ").slice(0, 20).join(" ")}
            </p>
          )}
          <p className='mt-5 text-base text-[#5C5955]'>{newsTime}</p>
        </div>

        {/* { thumbnail }  */}
        {index <= 1 && urlToImage && (
          <div
            className={`col-span-12${
              index === 0 ? " lg:col-span-8" : " md:col-span-6"
            }`}>
            <img className='w-full' src={urlToImage} alt={title && title} />
            {/* 
            I didn't find any caption in the API call. Thought to push author as image caption but the main design has standalone caption for image actually. Kinda confused! 
            
            {<p className='mt-5 text-base text-[#5C5955]'>
            Illustration: Karolis Strautniekas
          </p>} */}
          </div>
        )}
        {/* {thumbnail end} */}
      </div>
    </>
  );
}
