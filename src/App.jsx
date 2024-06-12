
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

export { App };
