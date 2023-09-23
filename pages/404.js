import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops....</h1>
            <h2>Halaman tidak ditemukan</h2>
            <p>Kembali ke <Link href="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;