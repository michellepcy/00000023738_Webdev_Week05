function init() {
    var badan = document.getElementById("coba");
 
    var divUtama = document.createElement("div");
 
    var p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("Nama"));
 
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "inputNama");
 
    var p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Chat"));
 
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "inputChat");
 
 
    divUtama.appendChild(p1);
    divUtama.appendChild(input1);
    divUtama.appendChild(p2);
    divUtama.appendChild(input2);
 
    badan.appendChild(divUtama);
}
send = document.getElementById("send");
clear = document.getElementById("clear");