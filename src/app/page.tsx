import Navbar from "./components/Navbar";
import { auth0 } from "../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;
  return (
    <div>
      <Navbar user={user}></Navbar>
      <main className="min-h-screen bg-[#060812] flex items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      </main>
    </div>
  );
}
