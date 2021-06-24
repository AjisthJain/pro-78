var reason =
[
"Ajisth Jain is the son",
"Mohit Jain is the father",
"Namrata asopa is the mother"
];

var images =
[
    "https://tse2.mm.bing.net/th?id=OIP.2wYg1nGYPZhNR2HuGHacrAHaJA&pid=Api&P=0&w=300&h=300",
    "http://image.shutterstock.com/z/stock-vector-vector-illustration-cartoon-kid-children-boy-pointing-happy-smiling-son-green-orange-74417974.jpg",
    "http://clipground.com/images/father-clipart-6.jpg"
];

var i = 0;
function nextslide() 
{
document.getElementById("reasontext").innerHTML =
reasons[i];
document.getElementById("album").src = images[i];
i++;
}