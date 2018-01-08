angular.module('myApp').component('drawingBoard', {
    templateUrl: "drawingBoard/drawingBoard.template.html",
    controller: drawingBoardController,
    bindings: {
        image: "@",
        canvasid: "@"
    }
})

function drawingBoardController($timeout) {
    this.drawerName = "";

    this.$onInit = function() {
        var canvasImages = JSON.parse(localStorage.getItem("canvasImages")) || {};
        if(canvasImages[this.canvasid] !== undefined) {
            this.drawImage(canvasImages[this.canvasid]);
        } else {
            this.drawImage(this.image);   
        }
    }

    this.drawImage = function(image) {
        var img = new Image();
        img.onload = function() {
            this.ctx.drawImage(img, 0, 0);
            this.saveDrawing();
        }.bind(this);
        img.src = image;
    }

    this.clearBoard = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawImage(this.image);
    }
    
    this.saveDrawing = function() {
        var canvasImages = JSON.parse(localStorage.getItem("canvasImages")) || {};
        canvasImages[this.canvasid] = this.canvas.toDataURL();
        localStorage.setItem("canvasImages", JSON.stringify(canvasImages));
    }
}


angular.module('myApp').directive('canvasDir', function() {
    return {
        restrict: "A",
        link: function(scope, elements, attrs) {
            var ctrl = scope.$ctrl;
            var element = elements[0];
            ctrl.canvas = element;
            var isDown = false;
            var ctx = element.getContext("2d");
            ctrl.ctx = ctx;
            var canvasX, canvasY;
            ctx.lineWidth = 5;

            element.addEventListener('mousedown', function(e) {
                
                if(ctrl.drawerName === "") {
                    return;
                }
                
                isDown = true;
                ctx.beginPath();
                canvasX = e.pageX - element.offsetLeft;
                canvasY = e.pageY - element.offsetTop;
                ctx.moveTo(canvasX, canvasY);
            })

            element.addEventListener('mousemove', function(e) {
                if (isDown != false) {
                    canvasX = e.pageX - element.offsetLeft;
                    canvasY = e.pageY - element.offsetTop;
                    ctx.lineTo(canvasX, canvasY);
                    ctx.strokeStyle = "blue";
                    ctx.stroke();
                }

            })

            element.addEventListener('mouseup', function(e) {
                isDown = false;
                ctx.closePath();
                
                ctrl.saveDrawing();
            });
        }
    }
});
