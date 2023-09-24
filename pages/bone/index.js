import styles from '../../styles/Bone.module.css';
import Link from 'next/link'

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
                <Link href={'/bone/' + bone.id} className={styles.single} key={bone.id}>
                    <h3>{bone.name}</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Bone;