import styles from '../../styles/Bone.module.css';

// Run when component is rendered
export const getStaticProps = async () => {
    // Return Object
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // Data
    const data = await res.json();

    // Return Data
    return {
        props: {
            bones: data
        }
    }
}

const Bone = ({ bones }) => {
    return ( 
        <div>
            <h1>Bone List</h1>
            {bones.map(bone => (
                <div key={bone.id}>
                    <a className={styles.single}>
                        <h3>{bone.name}</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default Bone;