import React, { useState, useEffect } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import axios from 'axios';
import './CardQuote.css';


const CardQuote = () => {
    const [state, setState] = useState([]);

    const fetchData = async () => {
        //Getting quotes from an API
        const jsonData = await axios.get("https://type.fit/api/quotes");
        //Quantity of quotes you want!
        let index = Math.floor(Math.random() * 1500);
        //Setting state
        return setState(jsonData.data[index]);
    };

    useEffect(() => {
        fetchData().catch(console.error);
    }, []);

    return (
        <div>
            <div className="quote-box">
                <div className="quote-text">
                    <p className="text">
                        <FaQuoteLeft />{" "}{state.text}{" "}<FaQuoteRight />
                    </p>
                </div>
                <div className="quote-author">
                    <span className="author" >~{" "}{state.author == null ? "Anonymous" : state.author}</span>
                </div>
                <div className="buttons">
                    <a
                        className="tweet-quote btn btn-primary"
                        title="Tweet this quote!"
                        href={`https://twitter.com/intent/tweet?hashtags=GeraldSerraQuotes${" " + state.text + ' ~' + (state.author == null ? "Anonymous" : state.author)}`}
                        target="_blank"
                    >
                        <FaTwitter />
                    </a>
                    <button
                        type="button"
                        className="new-quote"
                        onClick={() => setState(fetchData())}
                    >
                        New Quote
                    </button>
                </div>
            </div>
            <div className="footer">
                by <a href="https://github.com/geraldSerra" target="_blank">Gerald Serra</a>
            </div>
        </div>
    );

}

export default CardQuote;