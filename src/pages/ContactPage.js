function ContactPage() {
  return (
    <div className='p-3 px-16 mt-5 w-full'>
      <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
        Contact
      </div>
      <div className='p-3 pl-20 pt-8 flex flex-col gap-6'>
        <div className='hover:text-pink-500 cursor-pointer'>Facebook</div>
        <div className='hover:text-pink-500 cursor-pointer'>Instagram</div>
        <div className='hover:text-pink-500 cursor-pointer'>Twitter</div>
        <div className='hover:text-pink-500 cursor-pointer'>Github</div>
      </div>
    </div>
  );
}

export default ContactPage;
