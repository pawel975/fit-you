import { DOMelements } from "./base";

let quotesArr;
let quoteInterval;

const {motivationQuoteText, motivationQuoteAuthor, motivationQuoteRefresh} = DOMelements;

const fetchQuotes = async () => {
    
    const baseURL = "https://type.fit/api/quotes";

    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        quotesArr = data;
        quotesArr = quotesArr.filter(quote => quote.text.length < 100)
    } catch (error) {
        console.error(error);
    }

}

const updateView = (quotes) => {

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex].text;
    const author = quotes[quoteIndex].author === null ? "Unknown Author": quotes[quoteIndex].author;
    
    motivationQuoteText.textContent = `“${quote}”`;
    motivationQuoteAuthor.textContent = `${author}`;
}

const updateMotivationPage = () => {
    // Init first quote
    updateView(quotesArr);

    quoteInterval = setInterval(() => updateView(quotesArr), 10000);
}

window.addEventListener("DOMContentLoaded", async () => {

    if (!quotesArr) {
        await fetchQuotes();
    }

    updateMotivationPage();

    motivationQuoteRefresh.addEventListener("click", () => {
        clearInterval(quoteInterval);
        updateMotivationPage();
    })

})
