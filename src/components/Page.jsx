import { useContext, useEffect } from 'react'
import Header from './Header'
import Tweets from './Tweets'
import RightSide from './RightSide'
import { ContextAPIContext } from '../context/ContextAPI';


export default function Page() {
    const {theme} = useContext(ContextAPIContext);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

  return (

            <><Header />
            <Tweets />
            <RightSide />
            </>

    )
}
