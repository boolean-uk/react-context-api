import { useContext, useState } from 'react'
import imgDoge from '../assets/images/doge.jpg'
import { AppContext, ThemeContext } from '../App'

const Initial_Post = () => {
    const content = localStorage.getItem('content')

    return {
        content: content || ''
    }
}

export default function CreateTweet() {
    const [content, setContent] = useState(Initial_Post())

    const {tweets, setTweets, user} = useContext(AppContext)
    const {theme} = useContext(ThemeContext)

    const handleChnage = (e) => {
        const {name, value} = e.target

        setContent({   
            [name]: value
        })

        localStorage.setItem(name, value)
    }

    console.log(content)

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...user,
                date: '1m',
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            content,
            ...tweets,
        ])
        localStorage.clear()
        setContent(Initial_Post)
    }

    return (
        <div className={theme === 'dark' ? 'create-tweet dark' : 'create-tweet'}>
            <form onSubmit={addTweet}>
                <div className="avatar-section">
                    <div className="profile-icon"><img src={imgDoge}/></div>
                </div>

                <div className="textarea-section">
                    <textarea
                    className="content"
                    type="text"
                    placeholder="What is happening?!"
                    name='content'
                    value={content.content}
                    onChange={handleChnage}
                    ></textarea>
                </div>

                <div></div>

                <div className="actions-section">
                    <div className="actions">
                        <i className="fa-regular fa-image action-icon"></i>
                        <i className="fa-solid fa-list action-icon"></i>
                        <i className="fa-regular fa-face-smile action-icon"></i>
                        <i className="fa-regular fa-calendar action-icon"></i>
                        <i className="fa-solid fa-location-dot action-icon"></i>
                    </div>

                    <button type="submit" disabled={content.length < 1} className="tweet-btn">Tweet</button>
                </div>
            </form>
        </div>
    )
}
