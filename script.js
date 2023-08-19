async function random() {
    await fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
    .then((res) => res.json())
    .then((data) => {
        quoteAuthor= data.data[0].quoteAuthor
          quoteText=  data.data[0].quoteText
          quoteGenre= data.data[0].quoteGenre
          $("blockquote").text(quoteText);
          $('#authorName').text(quoteAuthor)
          $('#quoteGenre').text(quoteGenre)

    });
}
$(function() {
     random()
});
//fetch one random quote 
//update the scrren when the random button is cliked 
$("nav h1").click(function () {
    location.reload(true)
})
//fetch all the quotes of that authors
$(".info").click(async function () {
  var author=$("#authorName").text()
        await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`)
        .then((res) => res.json())
        .then((data) => {
            $(".container").empty()
            data.data.forEach((element,i) => {
                if(i<4){
                    $(".container").prepend(`
                    <div class="quoteInfo">
                    <div class="quote">
                    <hr>
                    <blockquote>${element.quoteText}</blockquote>
                </div>
                </div>
                `
                )
                }
        });
        $('.container').prepend(`<h2>${author}</h2>`)
           console.log( data.data);
    
        });
    
})










    
    

