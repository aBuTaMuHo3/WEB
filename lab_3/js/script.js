window.onload = function ()
{
    drawShape();
};

var shape = document.getElementById("currentShape");
shape.onclick = function()
{
    var circle = document.getElementById("circleBlock");
    var triangle = document.getElementById("triangleBlock");
    var rectangle = document.getElementById("rectangleBlock");
    switch (shape.value)
    {
    case "circle" :
        circle.removeAttribute("hidden");
        triangle.setAttribute("hidden", "true");
        rectangle.setAttribute("hidden", "true");
        break;
    case "triangle" :
        circle.setAttribute("hidden", "true");
        triangle.removeAttribute("hidden");
        rectangle.setAttribute("hidden", "true");
        break;
    case "rectangle" :
        circle.setAttribute("hidden", "true");
        triangle.setAttribute("hidden", "true");
        rectangle.removeAttribute("hidden");
        break;
    }
};

var form  = document.getElementById("settingsForm");
form.onchange = function ()
{
    drawShape();
};

function drawShape()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    var form = document.getElementById("settingsForm");
    var info = document.getElementById("infoBlock");
    var canvas = document.getElementById("canvas");
    var elements = form.elements;
    var type = elements[0].value;
    var fillColor = elements[1].value;
    var borderColor = elements[2].value;
    if (fillColor == "")
    {
        fillColor = "#000000";
    }
    if (borderColor == "")
    {
        borderColor = "#ff0000";
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (type)
    {
    case "circle" :
        drawCircle(ctx, elements, info, fillColor, borderColor);
        break;
    case "triangle" :
        drawTriangle(ctx, elements, info, fillColor, borderColor);
        break;
    case "rectangle" :
        drawRectangle(ctx, elements, info, fillColor, borderColor);
        break;
    }
}

function drawCircle(ctx, elements, info, fillColor, borderColor)
{
    var radius = elements[3].value;
    var posX = elements[4].value;
    var posY = elements[5].value;

    var circle = new Circle();
    if (radius) { circle.setRadius(radius); }
    if (posX) { circle.setX(posX); }
    if (posY) { circle.setY(posY); }
    if (fillColor) { circle.setFillColor(fillColor); }
    if (borderColor) { circle.setBorderColor(borderColor); }
    circle.draw(ctx);
    info.innerHTML = "Площадь: " + circle.calculateArea() + "<br />Длина Окружности: " + circle.calculatePerimeter();
}

function drawTriangle(ctx, elements, info, fillColor, borderColor)
{
    var posX1 = elements[6].value;
    var posY1 = elements[7].value;
    var posX2 = elements[8].value;
    var posY2 = elements[9].value;
    var posX3 = elements[10].value;
    var posY3 = elements[11].value;

    var triangle = new Triangle();
    if (posX1) { triangle.setX1(posX1); }
    if (posY1) { triangle.setY1(posY1); }
    if (posX2) { triangle.setX2(posX2); }
    if (posY2) { triangle.setY2(posY2); }
    if (posX3) { triangle.setX3(posX3); }
    if (posY3) { triangle.setY3(posY3); }
    if (fillColor) { triangle.setFillColor(fillColor); }
    if (borderColor) { triangle.setBorderColor(borderColor); }
    triangle.draw(ctx);
    info.innerHTML = "Площадь: " + triangle.calculateArea() + "<br />Периметр: " + triangle.calculatePerimeter();
}

function drawRectangle(ctx, elements, info, fillColor, borderColor)
{
    var posX1 = elements[12].value;
    var posY1 = elements[13].value;
    var posX2 = elements[14].value;
    var posY2 = elements[15].value;

    var rect = new Rectangle();
    if (posX1) { rect.setX1(posX1); }
    if (posY1) { rect.setY1(posY1); }
    if (posX2) { rect.setX2(posX2); }
    if (posY2) { rect.setY2(posY2); }
    if (fillColor) { rect.setFillColor(fillColor); }
    if (borderColor) { rect.setBorderColor(borderColor); }
    rect.draw(ctx);
    info.innerHTML = "Площадь: " + rect.calculateArea() + "<br />Периметр: " + rect.calculatePerimeter();
}