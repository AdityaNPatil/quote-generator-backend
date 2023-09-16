// import express
import express from 'express';
const app = express();
const port = 3000;

// import bodyparser
import bodyparser from 'body-parser';
app.use(bodyparser.urlencoded({extended: true}));

// use express for static files
app.use(express.static("public"));

// GET request home page
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

// GET request about page
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

// GET request generate page
app.get("/generate",(req,res)=>{
    res.render("generate.ejs");
});

// POST request custom page
app.post("/generate",(req,res)=>{
    var randomNo = Math.random()*motivationalQuotes.length;
    randomNo = Math.round(randomNo);
    var chosenQuote = motivationalQuotes[randomNo].quote;
    var chosenAuthor = motivationalQuotes[randomNo].author;
    res.render("generate.ejs",{Quote: chosenQuote, Author: chosenAuthor});
});


// GET request custom page
app.get("/custom",(req,res)=>{
    res.render("custom.ejs");
});

// POST request custom page
app.post("/custom",(req,res)=>{
    var yourQuote = req.body["myquote"];
    var yourAuthor = req.body["myauthor"];
    res.render("custom.ejs",{myQuote: yourQuote, myAuthor: yourAuthor});
});


// listen
app.listen(port,()=>{
    console.log("listening on port " + port);
});

// Array of Motivational Quotes
const motivationalQuotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Albert Einstein"
    },
    {
        quote: "You may encounter many defeats, but you must not be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius"
    },
    {
        quote: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
        author: "Epictetus"
    },
    {
        quote: "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
        author: "Martha Stewart"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    }
];
