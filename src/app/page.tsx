export default function Home() {
  return (
  <>
  <div className="flex flex-col h-screen">
  <nav className="bg-[#D9D9D9] h-[88px]"></nav>
  <div className=" flex-grow flex justify-center items-center">
    <div className=" h-[565px] flex justify-between px-16 w-full">
      <div className="h-full max-w-[572px] flex flex-col justify-center">
        <h1 className="text-[44px] font-[700] leading-[53.25px] mb-[23px]">
        Welcome To Our Website
        </h1>
      <p className="text-[32px] leading-[38.73px] font-[400] mb-[48px]">
      Lorem Ipsu is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard
      </p>
      <button className=" py-4 px-16 w-fit flex-grow-0 bg-black text-white">Contact US</button>
      </div>
      <div className="h-full w-[502px] bg-cover bg-[url('/img.png')]"></div>
    </div>
  </div>
  </div>

  </>
  );
}
