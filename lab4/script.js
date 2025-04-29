// 1-create a web page that open existing small window and scroll it’s content to the end .Then from console try the following:
// a-check if the small window still opened, close it.
// b-Try to write your name on the small window document using document.write (what is the problem).

let myWindow = open("https://www.google.com", "_blank", "width=500,height=200");
myWindow.scrollTo(0, myWindow.document.body.scrollHeight);

myWindow.close();
myWindow.document.write("reham"); // the write replace all the page contents


// Using document object method on the lecture’s HTML page
// a-Find all images in page by two ways (document default collection and document methods).
let images=document.images;
let images2=document.getElementsByTagName("img")

// b-Find all options for City drop down list.
let city = document.getElementById("city").children;
for(i=0;i<city.length;i++){
    console.log(city[i].value);
}


// c-Find all rows(tds) for second table in page.

let seconrRow= document.getElementsByTagName("table")[1].getElementsByTagName("td")[1];

// d-Find all elements that contain class name fontBlue and BGrey.
let fb=document.getElementsByClassName("fontBlue") && document.getElementsByClassName("BGrey");
let fc=document.querySelector(".fontBlue.BGrey");



// Display the date with time on the document title(document.title) which changed every second to show time with date.
// Note: use .toLocalString() method of the Date Object.
setInterval(() => {
    document.title = new Date().toLocaleString();}, 1000);

// Using location Object with simple HTML Form Page
// With get method, after clicking submit button show the
// Name and Age on page console as an object

function clickButton() {
    if (location.search) {
        let query = location.search.substring(1); 
        let arr = query.split("&"); 
        let jsn = "{" + arr.map(elem => {
            let [key, value] = elem.split("=");
            return `"${key}":"${value}"`;
        }).join(",") + "}";
        let obj = JSON.parse(jsn);
        console.log(obj); 
    }

};
