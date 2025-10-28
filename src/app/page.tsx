import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center sm:p-20">
        <Navbar/>
      </div>
      <div className="flex flex-col">
        <div className="m-10 gap-5 p-5 border border-gray-300 rounded-lg shadow-lg">
          <div className="font-serif text-4xl p-5">
            <h1 className="p-5">謝秉宸 &#40; Bing-Chen Hsieh &#41;'s Personal Website</h1>
          </div>          
        </div>
      </div>
    </div>
    
  );
}
