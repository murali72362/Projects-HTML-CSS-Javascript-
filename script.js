const quotes = [
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
  ];
  
  function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random].quote;
    document.getElementById("author").innerText = `- ${quotes[random].author}`;
  }
  