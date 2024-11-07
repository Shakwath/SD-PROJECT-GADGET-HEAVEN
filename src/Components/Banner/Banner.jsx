import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
      <div className='flex flex-col items-center text-center'>
        <div className=' p-2 rounded-3xl'>
          <div className='bg-[#9538E2] rounded-3xl pt-10 pb-52 px-40'>
            <h1 className="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white rounded-lg text-[#9538E2]">Shop Now</button>
          </div>
        </div>
        <div className='max-w-xl rounded-3xl mt-[-180px] border-[2px] p-4 border--[#9538E2]'>
          <img src={bannerImg} className='rounded-3xl shadow-2xl'/>
        </div>
      </div>


    );
};

export default Banner;