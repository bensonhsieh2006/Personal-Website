import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-(family-name:--font-quicksand)">
      <div className="w-full items-center justify-items-center">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="mx-30 my-10 gap-5 rounded-lg border border-gray-300 p-5 shadow-lg">
          <div className="p-5 text-4xl font-bold">
            <h1 className="p-5">
              謝秉宸 &#40; Bing-Chen Hsieh &#41;&#39;s Personal Website
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
