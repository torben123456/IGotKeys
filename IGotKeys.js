alert('hello world');
console.log('test');

(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();


console.log('jquery loaded')




 var code = e.keyCode || e.which;
 if(code == 13) { 
 	alert('test');
 }
   
   
   
