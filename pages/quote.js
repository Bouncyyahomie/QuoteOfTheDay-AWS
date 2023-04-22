import { useEffect, useState } from "react";
import styles from "../styles/quote.module.css";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(
        "https://api.quotable.io/random?maxLength=50"
      );
      const data = await response.json();
      setQuote(data.content);
    }

    fetchQuote();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Quote of the day:</h1>
      <p className={styles.quote}>{quote}</p>
      <button className={styles.button} onClick={() => window.location.reload()}>
        Get a new quote
      </button>
    </div>
  );
}

export default Quote;
