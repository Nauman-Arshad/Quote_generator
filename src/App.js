import React, { useState, useEffect } from 'react';


const App = () => {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuoteText(randomQuote.quote);
        setQuoteAuthor(randomQuote.author);

      })

  }

  const handleClick = () => {

    fetchData();
  }

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;
    window.open(twitterUrl, '_blank')
  }

  return (


    <div className="quote-container">
      <div className="quote-text">{quoteText}</div>
      <div className="quote-author">{quoteAuthor}</div>



      <div className="button-container">
        <button onClick={tweetQuote} className="twitter-button" id="twitter" title="Tweet This!">
          <i className="fab fa-twitter"></i>
        </button>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>

  )
}

export default App;