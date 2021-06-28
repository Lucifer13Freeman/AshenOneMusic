import MainLayout from "../layouts/MainLayout";
import styles from "../styles/MainPage.module.scss";


const Index = () =>
{
    return (
        <>
            <MainLayout>
                <div className={styles.center}>
                    <h1>Welcome, Ashen One!</h1>
                    <h3>The song of the dark souls...</h3>
                </div>
            </MainLayout>
        </>
    );
}

export default Index;