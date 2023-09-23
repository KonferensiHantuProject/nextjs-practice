import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    // Router
    const router = useRouter()

    // Fired When open page
    useEffect( () => {

        // Redirect
       setTimeout( () => {

        // To Home
        router.push('/')

       }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oops....</h1>
            <h2>Halaman tidak ditemukan</h2>
            <p>Kembali ke <Link href="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;