var AutoScroller = new function () {
    this.speed = 1;
    this.div = "NOTSET";

    //These should be private
    var accel = this.speed;
    var down = true;
    var pause = false;

    this.scroll = function () {
        if (this.div == "NOTSET") {
            alert('Set div to scroll');
            return;
        }
        this.div.scrollTop = this.div.scrollTop + accel;

        var timer = 100;
        //If scroller hits top or bottom change scroll direction
        if (this.div.scrollTop + accel <= 0 || this.div.scrollTop + accel >= (this.div.scrollHeight - this.div.clientHeight)) {
            this.changeDirection();
            timer = 1500;
        }

        if (pause == false) {
            setTimeout("AutoScroller.scroll()", timer);
        }
    };

    this.scrollDown = function () {
        this.div.scrollTop = this.div.scrollTop + 10;
    };

    this.scrollUp = function () {
        this.div.scrollTop = this.div.scrollTop - 10;
    };

    this.changeDirection = function () {
        down = !down;
        if (down) {
            accel = this.speed;
        }
        else {
            accel = -this.speed;
        }
    };

    this.pauseScroller = function () {
        pause = true;
    };

    this.startScroller = function () {
        pause = false;
        this.scroll();
    };
} ();