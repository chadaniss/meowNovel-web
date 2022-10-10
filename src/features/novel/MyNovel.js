import { Link } from 'react-router-dom';

function MyNovel({
  novel: {
    id,
    title,
    synopsis,
    User: { userName }
  }
}) {
  return (
    <Link>
      <div class='flex justify-center'>
        <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            class=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg'
            alt=''
          />
          <div class='p-6 flex flex-col justify-start'>
            <h5 class='text-gray-900 text-xl font-medium mb-2'>{title}</h5>
            <p class='text-gray-700 text-base mb-4'>{userName}</p>
            <p class='text-gray-600 text-xs'>{synopsis}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyNovel;
