window.onload = function() {

  var Quote = function(text, author) {
    this.text = text;
    this.author = author;
  }

  var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", "Jay Chetty");
  var quote2 = new Quote("The only CSS you need to know is background-color: tomato", "Rick");
  var quote3 = new Quote("No Blockers *smug tone*", "Keith");
  var quote4 = new Quote("Scaffold is nothing but a fiery hell.", "Valerie");
  var quoteList = [quote1, quote2, quote3, quote4];

  displayQuotes(quoteList);

  var button = document.getElementById('add-button');

  function displayQuotes(quoteList) {
    for (var i = 0; i < quoteList.length; i++) {
      thisText = quoteList[i].text + " ";
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
  
  var handleClick = function() {
    console.log('Woah! I got clicked');
    var quoteTextFromBox = document.getElementById("quote-text-input").value;
    var authorTextFromBox = document.getElementById("quote-author-input").value;
    console.log(quoteTextFromBox);
    console.log(authorTextFromBox);
    var quoteToAdd = new Quote(quoteTextFromBox, authorTextFromBox);
    quoteList.push(quoteToAdd);
    console.log(quoteList);
    displayQuotes(quoteList);
  }

  var form = document.getElementById("quote-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    handleClick();
  }

  button.onclick = handleClick;

}