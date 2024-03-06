
import {ContextAPIContext, ContextAPIProvider, ThemeAPIProvider} from './context/ContextAPI.jsx'
import Page from './components/Page.jsx'

function App() {



    return (
        <div className="container">
            <ContextAPIProvider>
                <ThemeAPIProvider>
                <Page />
                </ThemeAPIProvider>
            </ContextAPIProvider>

        </div>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
