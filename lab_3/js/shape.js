function Shape()
{
    this.setFillColor = function (fillColor)
    {
        if (fillColor[0] != "#")
        {
            var oldColor = fillColor;
            fillColor = "#" + oldColor;
        }
        this.fillColor = fillColor;
    };
    this.getFillColor = function ()
    {
        return this.fillColor;
    };
    this.setBorderColor = function (borderColor)
    {
        if (borderColor[0] != "#")
        {
            var oldColor = borderColor;
            this.borderColor = "#" + oldColor;
        }
        this.borderColor = borderColor;
    };
    this.getBorderColor = function ()
    {
        return this.borderColor;
    };
}

Shape.prototype.draw = function ()
{
};

Shape.prototype.calculateArea = function ()
{
};

Shape.prototype.calculatePerimeter = function ()
{
};
