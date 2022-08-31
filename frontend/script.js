var $must = " ";
var $mustNot = " ";
var $should = " ";
var url = " ";
var count = 1;
const buscar = document.getElementById("buscar");
function returnPages(){
    this.$must = document.getElementById("must").value;
    this.$mustNot = document.getElementById("mustnot").value; 
    this.$should = document.getElementById("should").value;
    if(this.$must == ""){
        this.$must = " ";
    }
    if(this.$mustNot == ""){
        this.$mustNot = " ";
    }
    if(this.$should == ""){
        this.$should = " "; 
    }
    this.url = "http://localhost:8080/" + this.$must + "/" + this.$mustNot + "/" + this.$should + "/" + this.count;
    var request = new XMLHttpRequest(); 
    console.log(this.url);
    request.open('GET',this.url);
    request.setRequestHeader('Accept', '*/*');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onerror = function(e){
        document.getElementById("return").innerHTML = "Request Error";
    }
    
    request.onload = () => {
        
        var response = JSON.parse(request.responseText);
        console.log(response);
        document.getElementById("return").innerHTML = `<button type='button' class="btn btn-primary float-right" onclick='nextPage()'> Next </button><br>`;
        response.forEach(element => {
            document.getElementById("return").innerHTML += "<hr><br><b>Title:</b> " + element.Title + "<br><b>URL:</b> " +  element.URL + "<br><b>Abstract:</b> " + element.Abstract;
            document.getElementById("return").innerHTML += '<br>';
        });
    }
    request.send();
}

function nextPage(){
    this.count++;
    var request = new XMLHttpRequest(); 
    this.url = "http://localhost:8080/" + this.$must + "/" + this.$mustNot + "/" + this.$should + "/" + this.count;
    console.log(this.url);
    request.open('GET',this.url);
    request.setRequestHeader('Accept', '*/*');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onerror = function(e){
        document.getElementById("return").innerHTML = "Request Error";
    }

    request.onload = () => {
        var response = JSON.parse(request.responseText);
        console.log(response);
        if(document.getElementById("return-error").innerHTML && document.getElementById("return-error").innerHTML.length > 0){
            document.getElementById("return-error").innerHTML = '';
        }
        document.getElementById("return").innerHTML = `<button type='button' class="btn btn-secondary" onclick='previousPage()'> Previous </button>`;
        document.getElementById("return").innerHTML += `<button type='button' class="btn btn-primary float-right" onclick='nextPage()'> Next </button>`;
        response.forEach(element => {
            document.getElementById("return").innerHTML += "<hr><br><b>Title:</b> " + element.Title + "<br><b>URL:</b> " +  element.URL + "<br><b>Abstract:</b> " + element.Abstract;
            document.getElementById("return").innerHTML += '<br>';
        });
    }
    request.send();
}

function previousPage(){
    if(this.count - 1 >= 1 ){
        this.count--;
        var request = new XMLHttpRequest(); 
        this.url = "http://localhost:8080/" + this.$must + "/" + this.$mustNot + "/" + this.$should + "/" + this.count;
        console.log(this.url);
        request.open('GET',this.url);
        request.setRequestHeader('Accept', '*/*');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.onerror = function(e){
            document.getElementById("return").innerHTML = "Request Error";
        }

        request.onload = () => {
            var response = JSON.parse(request.responseText);
            console.log(response);
            document.getElementById("return").innerHTML = `<button type='button' class="btn btn-secondary" onclick='previousPage()'> Previous </button>`;
            document.getElementById("return").innerHTML += `<button type='button' class="btn btn-primary float-right" onclick='nextPage()'> Next </button>`;
            response.forEach(element => {
                document.getElementById("return").innerHTML += "<hr><br><b>Title:</b> " + element.Title + "<br><b>URL:</b> " +  element.URL + "<br><b>Abstract:</b> " + element.Abstract;
                document.getElementById("return").innerHTML += '<br>';
            });
        }
        request.send();
    }else{
        document.getElementById("return-error").innerHTML = `<div class="alert alert-danger" role="alert">
                                                            You already are on the first page!
                                                        </div>`
    }
}

if(buscar){
    buscar.addEventListener('click',function handleClick(event){
        event.preventDefault();
    
        const input_1 = document.getElementById("must")
        const input_2 = document.getElementById("mustnot")
        const input_3 = document.getElementById("should")
    
        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
    });
}