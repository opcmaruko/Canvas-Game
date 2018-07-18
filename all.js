var time = 0

function drawing() {
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var xMax = c.width = window.screen.availWidth;
    var yMax = c.height = window.screen.availHeight;
    var screenW = 1024;
    var screenH = 768;
    c.width = screenW;
    c.height = screenH;


    var hmTimes = Math.round(xMax + yMax) / 5;
    for (var i = 0; i <= hmTimes; i++) {
        var randomX = Math.floor((Math.random() * xMax) + 1);
        var randomY = Math.floor((Math.random() * yMax) + 1);
        var randomSize = Math.floor((Math.random() * 3) + 1);
        var randomOpacityOne = Math.floor((Math.random() * 9) + 1);
        var randomOpacityTwo = Math.floor((Math.random() * 9) + 1);
        var randomHue = Math.floor((Math.random() * 360) + 1);

        ctx.fillStyle = "hsla(" + randomHue + ", 30%, 80%, ." + randomOpacityOne + randomOpacityTwo + ")";
        ctx.fillRect(randomX, randomY, randomSize, randomSize);
    }

    time++

    let logox = 1 - (time % 10)




    ctx.save();
    // 背景線
    ctx.beginPath();
    ctx.arc(100, 768, 800, 0, Math.PI * 2);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 768, 600, 0, Math.PI * 2);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.stroke();

    ctx.rotate(20 * Math.PI / -180);
    ctx.translate(-180, 70);



    ctx.save();


    // 機翼
    ctx.beginPath();
    ctx.moveTo(logox + 220, logox + 380);
    ctx.lineTo(logox + 250, logox + 350);
    ctx.lineTo(logox + 260, logox + 450);
    ctx.lineTo(logox + 200, logox + 450);
    ctx.closePath();
    ctx.fillStyle = "rgb(250, 250,250)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(logox + 380, logox + 380);
    ctx.lineTo(logox + 350, logox + 350);
    ctx.lineTo(logox + 340, logox + 450);
    ctx.lineTo(logox + 400, logox + 450);
    ctx.closePath();
    ctx.fillStyle = "rgb(250, 250,250)";
    ctx.fill();

    // 窗
    ctx.beginPath();
    ctx.arc(logox + 300, logox + 360, 26, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();




    ctx.save();

    // 機身
    ctx.beginPath();

    ctx.arc(logox + 300, logox + 350, 50, 0, Math.PI * 1, true);
    ctx.lineTo(logox + 250, logox + 350);
    ctx.lineTo(logox + 260, logox + 450);
    ctx.lineTo(logox + 340, logox + 450);
    ctx.lineTo(logox + 350, logox + 350);

    ctx.closePath();
    ctx.stroke();

    let carx = 1 - (time % 1024) - 10


    ctx.translate(800, 700);
    ctx.scale(0.5, 0.5);

    ctx.save();
    // 機翼
    ctx.beginPath();
    ctx.moveTo(carx + 220, carx + 380);
    ctx.lineTo(carx + 250, carx + 350);
    ctx.lineTo(carx + 260, carx + 450);
    ctx.lineTo(carx + 200, carx + 450);
    ctx.closePath();
    ctx.fillStyle = "rgb(213, 57,87)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(carx + 380, carx + 380);
    ctx.lineTo(carx + 350, carx + 350);
    ctx.lineTo(carx + 340, carx + 450);
    ctx.lineTo(carx + 400, carx + 450);
    ctx.closePath();
    ctx.fillStyle = "rgb(213, 57,87)";
    ctx.fill();






    ctx.save();

    // 機身
    ctx.beginPath();

    ctx.arc(carx + 300, carx + 350, 50, 0, Math.PI * 1, true);
    ctx.lineTo(carx + 250, carx + 350);
    ctx.lineTo(carx + 260, carx + 450);
    ctx.lineTo(carx + 340, carx + 450);
    ctx.lineTo(carx + 350, carx + 350);

    ctx.closePath();
    ctx.fillStyle = "rgb(66, 105, 206)";
    ctx.fill();


    // 窗
    ctx.beginPath();
    ctx.arc(carx + 300, carx + 360, 26, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    let r = 1 + (time % 200) - 30
        // 圓形
    ctx.beginPath();
    ctx.arc(r + 100, r + 360, 26, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
}


setInterval(drawing, 50)