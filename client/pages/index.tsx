import MainLayout from "../layouts/MainLayout";

const Index = () =>
{
    return (
        <>
            <MainLayout>
                <div className="center">
                    <h1>Welcome, Ashen One!</h1>
                    <h3>The song of the dark souls...</h3>
                </div>
            </MainLayout>
            
            <style jsx>
                {`
                    .center
                    {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center
                    }
                `}
            </style>
        </>
    );
}

export default Index;