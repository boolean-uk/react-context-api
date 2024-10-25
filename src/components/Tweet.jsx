
export default function Tweet({ tweet, theme }) {
    return (
      <article className={theme === 'dark' ? 'tweet dark' : 'tweet'}>
        <div className="profile-icon"><img src={tweet.profileImage}/></div>
  
        <div className="tweet-content">
          <h4>{tweet.name} <span>{tweet.handle} · {tweet.date}</span></h4>
          <p>{tweet.content}</p>
  
          {tweet.article &&
            <div className="tweet-article">
              <img src={tweet.article.image} />
              <small>{tweet.article.site}</small>
              <h5>{tweet.article.title}</h5>
              <p>{tweet.article.content}</p>
            </div>
          }
  
          <div className="tweet-actions">
            <span>
              <small>{tweet.commentCount}</small>
            </span>
  
            <span>
              <small>{tweet.retweetCount}</small>
            </span>
  
            <span>
              <small>{tweet.heartCount}</small>
            </span>
  
            <span>
              <small>{tweet.analyticsCount}</small>
            </span>
          </div>
        </div>
      </article>
    );
  }
  
