export const getStaticPath = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(bone => {
        return {
            params: { id: bone.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Halaman Detail</h1>
        </div>
    );
}
 
export default Details;