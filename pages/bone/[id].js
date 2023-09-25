export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {
            bone: data
        }
    }
}

const Details = ({ bone }) => {
    return ( 
        <div>
            <h1>{ bone.name }</h1>
            <p>{ bone.email }</p>
            <p>{ bone.website }</p>
            <p>{ bone.address.city }</p>
        </div>
    );
}
 
export default Details;