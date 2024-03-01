function App() {
  const tokenAddress = "7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr";

  return (
    <>
      <img className="object-cover min-h-[100vh] w-full absolute -z-[1] max-sm:opacity-70" src="assets/images/sun.gif" alt="background" />
      <div className="w-full max-w-[1340px] m-auto px-10 max-sm:px-5">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-8 max-sm:gap-4 h-24 max-sm:h-10 my-5 text-[#531D01]">
            <img className="h-full rounded-full" src="logo.png" alt="tribe" />
            <a target="_blank" className="font-digit text-[40px] max-sm:text-lg cursor-pointer animation hover:text-hover">Home</a>
            <a href={`https://dexscreener.com/solana/${tokenAddress}`} target="_blank" className="font-digit text-[40px] max-sm:text-lg cursor-pointer animation hover:text-hover">Chart</a>
          </div>
          <a href="https://t.me/+6p0LLUz9AEplNjMy" target="_blank">
            <img className="h-[70px] max-sm:h-[40px] object-contain cursor-pointer hover:scale-95 transition-all" src="assets/images/btnTelegram.png" alt="button" />
          </a>
        </header>

        <div className="flex flex-col items-center justify-center text-center">
            <img className="w-[500px] max-sm:w-[75%] -ml-[30px] max-sm:m-auto" src="assets/images/title.gif" alt="title" />
            <p className="font-digit text-[40px] max-sm:text-[25px] leading-tight text-stroke text-[#FFC700]">
              Join the Tribe on it's Mission to 1 Billion Market Cap
            </p>
            <a className="mt-[100px] max-sm:mt-[40px]" href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${tokenAddress}&fixed=in`} target="_blank">
              <img className="w-[350px] -ml-[20px] max-sm:m-auto max-sm:w-[70%]" src="assets/images/btnBuy.gif" alt="title" />
            </a>
            <div className="text-[20px] text-stroke text-white max-w-[85vw] max-sm:m-auto break-words max-sm:text-[14px] max-sm:mb-[40px]">
              Contract : {tokenAddress}
            </div>
        </div>
      </div>

      <div className="py-10 bg-[#00000080] flex-col items-center justify-center mt-[120px] max-sm:mt-[20px] max-sm:py-8">
        <div className="flex items-center justify-center max-sm:flex-col max-sm:gap-2">
          <div className="text-[40px] text-[#FFC700] text-stroke mr-20 max-sm:text-[16px] max-sm:m-auto">
            Join The Tribe
          </div>
          <a href="https://t.me/+6p0LLUz9AEplNjMy" target="_blank">
            <img className="w-[250px] max-sm:w-[150px] cursor-pointer" src="assets/images/btnJoin.png" alt="join" />
          </a>
        </div>
      </div>

      <img className="mt-[100px] max-sm:mt-[60px] h-24 max-sm:h-10 rounded-full m-auto max-sm:h-[60px]" src="logo.png" alt="tribe" />

      <div className="w-full text-center px-5 text-[40px] max-sm:text-[20px] flex items-center justify-center gap-5 mt-8">
        <a href="https://instagram.com/thetribetoken" target="_blank"><img src="assets/images/instagram.svg" alt="instagram" /></a>
        <a href="https://twitter.com/thetribetoken" target="_blank"><img src="assets/images/twitter.svg" alt="twitter" /></a>
        <a href="https://t.me/+6p0LLUz9AEplNjMy" target="_blank"><img src="assets/images/telegram.svg" alt="telegram" /></a>
      </div>

      <div className="w-full text-center px-5 text-[16px] max-sm:text-[12px] text-white my-[30px]">
        © 2024 Tribe Token. All rights reserved.
      </div>
    </>
  );
}

export default App;
