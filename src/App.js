function App() {
  return (
    <>
      <img className="object-cover min-h-[100vh] w-full absolute -z-[1] max-sm:opacity-70" src="assets/images/sun.gif" alt="background" />
      <div className="w-full max-w-[1340px] m-auto px-10 max-sm:px-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-8 max-sm:gap-4 h-24 max-sm:h-10 my-5 text-[#531D01]">
            <img className="h-full rounded-full" src="logo.png" alt="tribe" />
            <a target="_blank" className="text-[40px] max-sm:text-lg cursor-pointer animation hover:text-hover">Home</a>
            <a href="/" target="_blank" className="text-[40px] max-sm:text-lg cursor-pointer animation hover:text-hover">Chart</a>
          </div>
          <a href="/" target="_blank">
            <img className="h-[70px] max-sm:h-[40px] object-contain cursor-pointer hover:scale-95 transition-all" src="assets/images/btnTelegram.png" alt="button" />
          </a>
        </header>

        <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:text-center">
          <div>
            <img className="w-[500px] max-sm:w-[75%] -ml-[30px] max-sm:m-auto" src="assets/images/title.gif" alt="title" />
            <p className="text-[40px] max-sm:text-[25px] leading-tight text-stroke text-[#FFC700]">Fueling the journey to 1 billion market cap</p>
            <a href="/" target="_blank">
              <img className="w-[350px] -ml-[20px] max-sm:m-auto max-sm:w-[70%]" src="assets/images/btnBuy.gif" alt="title" />
            </a>
          </div>
          <img className="w-[60%] -mr-[100px] max-sm:m-auto max-sm:w-[90%] cursor-pointer" src="assets/images/banner.png" alt="banner" />
        </div>
      </div>

      <div className="py-10 bg-[#00000080] flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-10 max-sm:flex-col max-sm:gap-5">
          <div className="text-[40px] text-[#FFC700] text-stroke mr-20 max-sm:text-[24px] max-sm:m-auto">Join The Tribe</div>
          <a href="/" target="_blank"><img className="w-[250px] max-sm:w-[150px] cursor-pointer" src="assets/images/btnJoin.png" alt="join" /></a>
        </div>
        <p className="text-stroke text-[#D0C28D] text-[28px] max-w-[900px] m-auto text-center px-5 max-sm:text-[18px]">Empowering communities with a digital currency that fosters unity and prosperity.</p>
      </div>

      <div className="text-[30px] text-white m-auto text-center break-words my-[100px] text-stroke px-5 max-sm:text-[18px] max-sm:my-[40px]">
        Contract : 7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr
      </div>

      <div className="w-full text-center px-5 text-[40px] max-sm:text-[20px]">💰💰💰💰</div>
      <div className="w-full text-center px-5 text-[30px] text-[#DC8544] text-stroke my-[30px] max-sm:text-[14px]">© 2024 Tribe Token. All rights reserved.</div>
    </>
  );
}

export default App;
