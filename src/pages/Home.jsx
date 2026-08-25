import { Link } from "react-router";
function Home(){
    return(
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-3x1 font-bold text-slate-800">
                Welcome to Mini Store
            </h1>
            <p className="mt-3 text-slate-600 max-w-md">
                Cheap phones, one decent laptop, and audio gear that won't
        embarrass you. Browse what we've got.
            </p>
            <Link to="/Products"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                View Products
            </Link>
        </div>
    )
}
export default Home;