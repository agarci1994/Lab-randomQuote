import React, { useState, useEffect } from "react";
import quoteServices from "./quoteServices";

const QuoteRandom = new quoteServices();

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const random = Math.floor(Math.random() * 100);
    QuoteRandom.getQuote()
      .then(response => {
        setQuote(response.quotes[random].quote);
        setAuthor(response.quotes[random].author);
      })
      .catch(err => err);
  };

  return (
    <div id="text">
      <div className="box-quotes">
        <h6>{quote}</h6>
        <p id="author">{author}</p>
      </div>
      <div onClick={() => getData()}>Nueva Cita</div>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" for ${author}`} target="_blank">Twitter</a>
    </div>
  );
};

export default Quotes;
