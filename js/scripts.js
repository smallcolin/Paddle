function rain() {

	setInterval(function() {

		var rain = document.getElementsByClassName('drop');
		var pos = 0;
		var id = setInterval(frame, 10);

		function frame() {
			for ( var i = 0; i < rain.length; i++) {
				if ( pos == 500 ) {
					clearInterval(id);

                    // increment scoreboard when rain hits the paddle
                    // by comparing x-axis offset
                    var paddle = document.getElementById('paddle');
                    if (getCoords(rain[i]) >= getCoords(paddle) &&
                    getCoords(rain[i]) + rain[i].offsetWidth <
                    getCoords(paddle) + paddle.offsetWidth) {
                        incrementScore();
                    }
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

// SCOREBOARD}

// since element.offsetLeft only returns the offset relative to the parent element
// we have to use a workaround (getBoundingClientRect)
function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var left = box.left + scrollLeft - clientLeft;

    return Math.round(left);
}

function incrementScore() {
    document.getElementById('score-counter').innerHTML++;
}

// -----------------------------------------------------------------------------------------------------------
