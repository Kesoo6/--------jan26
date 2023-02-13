function updateTimer(){

future = Date.parse( "Feb 25, 2023, 01:30:00");
now = new Date();
diff = future - now;

secs = Math.floor(diff / 1000);
mins = Math.floor(diff / (1000 * 60));
hours = Math.floor(diff / (1000 * 60 *60));
days = Math.floor(diff / (1000 * 60 * 60 * 24));

d = days;
h = hours - days * 24;
m = mins - hours * 60;
s = secs - mins * 60;

document.getElementById("timer").innerHTML = '<div>Ends in:</div>' +
                                             '<div>' + d + '</div>' +
                                             '<div>' + h + '</div>' +
                                             '<div>' + m + '</div>' +
                                             '<div>' + s + '</div>';
}; 
 
setInterval('updateTimer()' , 1000);