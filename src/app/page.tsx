import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        data-page-shell="true"
        className="px-4 py-4 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col">
          <div className="my-6 rounded-lg border border-gray-300 p-4 shadow-lg sm:p-6 lg:p-8">
            <div className="p-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              <h1 className="p-2 sm:p-4">
                謝秉宸 &#40; Bing-Chen Hsieh &#41;&#39;s Personal Website
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
