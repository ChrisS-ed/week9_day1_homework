window.onload = function() {

  var Quote = function(text, author) {
    this.text = text;
    this.author = author;
  }

  var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript. ", "Jay Chetty");
  var quote2 = new Quote("The only CSS you need to know is background-color: tomato ", "Rick");
  var quote3 = new Quote("No Blockers *smug tone* ", "Keith");
  var quote4 = new Quote("Scaffold is nothing but a fiery hell. ", "Valerie");
  var quoteList = [quote1, quote2, quote3, quote4];

  for (var i = 0; i < quoteList.length; i++) {
    thisText = quoteList[i].text;
    thisAuthor = quoteList[i].author;

    var quoteArticle = document.createElement("article");
    quoteArticle.classList.add("quote");
    
    var blockquote = document.createElement("blockquote");
    blockquote.innerText = thisText;

    var cite = document.createElement("cite");
    cite.innerText = thisAuthor;

    blockquote.appendChild(cite);
    quoteArticle.appendChild(blockquote);

    var quotes = document.querySelector("#quotes");
    quotes.appendChild(quoteArticle);
    
  };

}