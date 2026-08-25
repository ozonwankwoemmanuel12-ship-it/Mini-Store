import {Link} from "react-router"
function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4x1 font-bold text-slate-800">
                404
            </h1>
            <p className="mt-2 text-slate-600">
                Page not found. This aisle does not exist.
            </p>
            <Link to="/" className="mt-6 text-blue-600 underline">
             Go back home
            </Link>
        </div>
    )
}
export default NotFound;