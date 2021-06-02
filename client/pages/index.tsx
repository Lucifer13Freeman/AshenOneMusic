import { Button } from "@material-ui/core"

const App = () =>
{
    return (
        <>
            <div className="center">
                <h1>Welcome, Ashen One!</h1>
                <h3>The song of the dark souls...</h3>
            </div>

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

export default App;