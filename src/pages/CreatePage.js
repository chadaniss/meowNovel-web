import { Avatar } from 'flowbite-react';

function CreatePage() {
  return (
    <div className='bg-[#FFF5F5] p-3 flex gap-7 justify-center py-11'>
      <div className='p-5 px-20 bg-white flex flex-col items-center h-auto rounded-lg justify-center gap-5'>
        <Avatar
          alt='User settings'
          img=''
          rounded={false}
          statusPosition='center'
          size='xl'
        />
        <button className='btn-primary mt-3 py-1 px-16'>UPLOAD</button>
      </div>
      <div className='px-10 bg-white p-5 w-3/5 rounded-lg'>
        <h1 className='text-2xl font-bold pb-2 text-red-wine'>
          NOVEL INFORMATION
        </h1>
        <hr className='border-1 border-stone-400 ' />

        <form>
          <div className='mx-2'>
            <div className='text-left my-3'>
              <label className='text-sm font-semibold'>Book Title</label>
              <br />
              <input
                type='text'
                className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs pr-[550px]'
                placeholder='Should be within 60 characters.'
              />
            </div>
            <div className='text-left my-3'>
              <label className='text-sm font-semibold'>Genre</label>
              <br />
              <input
                type='text'
                className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs pr-[550px]'
                placeholder='Please select Genre'
              />
            </div>
            <div className='text-left my-3'>
              <label className='text-sm font-semibold'>Synopsis</label>
              <br />
              <input
                type='text'
                className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs pr-[550px] h-36'
              />
            </div>
          </div>

          <div className='flex gap-2'>
            <button className='btn-primary mt-5 py-1 px-20 align-middle block m-auto border-2'>
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
