const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedCompoent name = "Odalyz bonita" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));