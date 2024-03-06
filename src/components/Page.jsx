import { useContext, useEffect } from 'react'
import Header from './Header'
import Tweets from './Tweets'
import RightSide from './RightSide'
import { ThemeAPIContext, ThemeAPIProvider } from '../context/ContextAPI';



export default function Page() {
    const {theme, setTheme} = useContext(ThemeAPIContext);

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if(storedTheme) {
        setTheme(storedTheme);
      }
      
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

  return (

            <>
              <Header />
              <Tweets />
              <RightSide />
       

            </>

    )
}
