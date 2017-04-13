function rain() {

	setInterval(function() {

		var rain = document.getElementsByClassName('drop');	
		var pos = 0;
		var id = setInterval(frame, 10);

		function frame() {
			for ( var i = 0; i < rain.length; i++) {
				if ( pos == 500 ) {
					clearInterval(id);
				}
				else {
						pos++;
						rain[i].style.top = pos + 'px';
					}
			}
		}

	}, 1000); 
}

// PADDLE MOVEMENTS

function movePaddle(event) {
    var key = event.keyCode;
    var paddleObj = document.getElementById('paddle');
    var padPos = 0;
    var y;

    function leftright() {
        var x = parseInt(getComputedStyle(paddleObj).left);
	        
        if (key == 37) {
        	y = -100;
            --x;
            console.log(x);
        } else if (key == 39) {
        	y = 100;
            ++x;
            console.log(x);
        }
        
        return x;
	   
    };
    
    paddleObj.style.left = (leftright()) + y + "px";
};

document.addEventListener('keydown', movePaddle);


// -----------------------------------------------------------------------------------------------------------