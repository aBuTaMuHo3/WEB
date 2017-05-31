var DEFAULT_RADIUS = 20;
var DEFAULT_CIRCLE_X = 100;
var DEFAULT_CIRCLE_Y = 100;

function Circle()
{
    Shape.apply(this, arguments);
    this.radius = DEFAULT_RADIUS;
    this.posX = DEFAULT_CIRCLE_X;
    this.posY = DEFAULT_CIRCLE_Y;
    this.setRadius = function (radius)
    {
        this.radius = radius;
    };
    this.setX = function (x)
    {
        this.posX = x;
    };
    this.setY = function (y)
    {
        this.posY = y;
    };
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function (ctx)
{
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
    ctx.closePath();
};

Circle.prototype.calculateArea = function ()
{
    return Math.round(Math.PI * this.radius * this.radius);
};

Circle.prototype.calculatePerimeter = function ()
{
    return Math.round(2 * Math.PI * this.radius);
};