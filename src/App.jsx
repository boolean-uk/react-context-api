import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import { TweetProvider } from './context/TweetContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function App() {

    return (
        <ThemeProvider>
            <TweetProvider>
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </TweetProvider>
        </ThemeProvider>
    )
}

export { App }
