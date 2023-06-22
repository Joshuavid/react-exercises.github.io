const App = () => {
    return (
        <div>
            <Tweet
                name="Mayito errera "
                username="Joshua222 "
                date={new Date().toDateString()}
                message="This app will disrupt everything!!"
            />
            <Tweet
                name="Josue Escovar "
                username="ppriokkk "
                date={new Date().toDateString()}
                message="#nohomo "
            />
            <Tweet
                name="lolito "
                username="Lolandia "
                date={new Date().toDateString()}
                message="#shhhh!"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));