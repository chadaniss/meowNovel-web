function NovelPage() {
  return (
    <div>
      <div class='flex justify-evenly py-20'>
        <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            class=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg  md:rounded-lg'
            src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg'
            alt=''
          />
        </div>
        <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <div class='p-6 flex flex-col justify-start'>
            <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
              Novel Title
            </div>
            <p class='text-gray-700 text-base mb-4'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class='text-gray-600 text-xs'>Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelPage;
