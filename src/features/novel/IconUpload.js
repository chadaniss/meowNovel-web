function IconUpload() {
  return (
    <div class='flex flex-col justify-center items-center pt-5 pb-6'>
      <svg
        aria-hidden='true'
        class='mb-3 w-10 h-10 text-gray-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
        ></path>
      </svg>
      <p class='font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400'>
        Upload book cover
      </p>
    </div>
  );
}

export default IconUpload;
