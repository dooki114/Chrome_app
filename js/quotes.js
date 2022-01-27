const quotes = [
    {
        quote: "Investment is all about waiting.",
        author: "John Burr",
    },
    {
        quote: "I love Liz so much.",
        author: "Danny Myeonghun Kim",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const temp_deci = Math.random();
const temp_multiplied = temp_deci * quotes.length;
const temp_floored = Math.floor(temp_multiplied);
// console.log(temp_deci);
// console.log(temp_multiplied);
// console.log(temp_floored);
//console.log(quotes[temp_floored]);
quote.innerText = quotes[temp_floored].quote;
author.innerText = quotes[temp_floored].author;