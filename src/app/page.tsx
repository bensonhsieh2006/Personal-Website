import Navbar from "./components/Navbar";
import { auth0 } from "../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;
  return (
    <div>
      <Navbar user={user}></Navbar>
      <main className="relative flex min-h-[calc(100dvh-15vh)] items-center justify-center overflow-hidden bg-[#060812] px-6 py-12 max-[640px]:min-h-[calc(100dvh-4.5rem)]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[clamp(220px,35dvh,450px)] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
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
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[clamp(160px,24dvh,300px)] w-[min(600px,75vw)] -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />
      </main>
    </div>
  );
}
