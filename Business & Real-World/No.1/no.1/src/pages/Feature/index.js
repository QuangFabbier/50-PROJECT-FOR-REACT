import { useParams } from 'react-router-dom';
import features from '@/data/feature';
import { Link } from 'react-router-dom';
import styles from './Feature.module.css';

function Feature() {
    const { id } = useParams();
    const feature = features.find((feature) => feature.id === id);
    if (!feature) {
        return <div>Feature not found</div>;
    }
    return (
        <div className={styles.featurePage}>
            <div className={styles.featureItem}>
                <div className={styles.featureBack}>
                    <Link className={styles.homePageButton} to={`/`}>
                        Home Page
                    </Link>
                </div>
                <img src={feature.image} alt={feature.title} className={styles.featureImage} />
                <div className={styles.featureDesc}>
                    <h2 className={styles.featureTitle}>{feature.title}</h2>
                    <p className={styles.featureDesc}>{feature.longDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;
