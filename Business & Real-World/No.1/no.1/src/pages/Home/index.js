import features from '@/data/feature.js';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useState } from 'react';

const initialFormData = {
    fullName: '',
    birthYear: '',
    phone: '',
    email: '',
};

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [formData, setFormData] = useState(initialFormData);

    const handleOpenCustomModal = () => {
        setIsModalOpen(true);
        setModalType('custom');
    };

    const handleOpenGoogleModal = () => {
        setIsModalOpen(true);
        setModalType('google');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const oldData = localStorage.getItem('users');
        const parsedData = oldData ? JSON.parse(oldData) : [];

        parsedData.push({ ...formData });
        localStorage.setItem('users', JSON.stringify(parsedData));

        console.log(formData);

        setFormData(initialFormData);
        handleCloseModal();
    };

    return (
        <div className={styles.homePage}>
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Marketing Website</h1>
            </section>

            <section className={styles.introSection}>
                <p className={styles.introLine}></p>
                <p className={styles.introLine}></p>
                <p className={styles.introLine}></p>
            </section>

            <section className={styles.featureList}>
                {features.map((feature) => {
                    return (
                        <div key={feature.id} className={styles.featureCard}>
                            <Link to={`/feature/${feature.id}`} className={styles.featureLink}>
                                <img src={feature.image} alt={feature.title} className={styles.featureImage} />
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.shortDescription}</p>
                            </Link>
                        </div>
                    );
                })}
            </section>

            <section className={styles.infoSection}>
                <button className={styles.infoButton} onClick={handleOpenCustomModal}>
                    Take Info
                </button>

                <button className={styles.googleButton} onClick={handleOpenGoogleModal}>
                    Google Form
                </button>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.contactLine}></div>
                <button className={styles.contactButton}>Contact Us</button>
            </section>

            <footer className={styles.footer}>
                <span>© 2026 Kwang</span>
                <span>#50reactprojects</span>
                <span>10</span>
            </footer>

            {isModalOpen && (
                <div className={styles.overlay}>
                    <div className={`${styles.modal} ${modalType === 'google' ? styles.googleModal : ''}`}>
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            X
                        </button>

                        {modalType === 'custom' && (
                            <>
                                <h2 className={styles.modalTitle}>Sign Up For More Information</h2>

                                <form className={styles.modalForm} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Full Name</label>
                                        <input
                                            className={styles.formInput}
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Birth Year</label>
                                        <input
                                            className={styles.formInput}
                                            type="date"
                                            name="birthYear"
                                            value={formData.birthYear}
                                            onChange={handleChange}
                                            placeholder="Enter your birth year"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Phone</label>
                                        <input
                                            className={styles.formInput}
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Email</label>
                                        <input
                                            className={styles.formInput}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <button className={styles.submitButton} type="submit">
                                        Submit
                                    </button>
                                </form>
                            </>
                        )}

                        {modalType === 'google' && (
                            <>
                                <h2 className={styles.modalTitle}>Google Form</h2>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfEUuTOdeA-utJuA7iGbGhgK64YvOcw6UgC_-zF4XDKP68EmA/viewform?embedded=true"
                                    className={styles.googleFrame}
                                    title="Google Form"
                                >
                                    Loading…
                                </iframe>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
