import Navbar from "../components/Navbar"
export default function Page(){
    return(
      <div>
        <div className="p-10 items-center justify-items-center sm:p-20">
          <Navbar />
        </div>
        <div className="flex flex-col">
          <div className="m-10 gap-5 p-5 border border-gray-300 rounded-lg shadow-lg">
            <div className="font-serif text-5xl mb-5 p-5 border-b border-gray-300">
              <h1>About me:</h1>
            </div>
            <div className="p-5 text-2xl">
              <p>
                Second year Electrical Engineering student in National Taiwan University 
                with experience in Python programming and web development. 
                Completed a project on IoT-based sleep monitoring and actively participated in 
                student association activities.
              </p>
            </div>           
          </div>
        </div>
      </div>
    )
}
