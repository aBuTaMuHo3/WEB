import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

window.onload = (): void => {
    draw();
    let currentShape: HTMLInputElement = <HTMLInputElement> document.getElementById("current-shape");
    currentShape.onclick = (): void => ChangeDetailedSettings();

    function ChangeDetailedSettings(): any {
        let circle: HTMLElement = document.getElementById("circle-block");
        let triangle: HTMLElement = document.getElementById("triangle-block");
        let rectangle: HTMLElement = document.getElementById("rectangle-block");
        switch (currentShape.value) {
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
            default :
                break;
        }
    }

    let form = <HTMLInputElement> document.getElementById("settings-form");
    form.onchange = (): void => draw();

    function draw(): any {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        let info: HTMLElement = document.getElementById("info-block");
        let shapeType: string = (<HTMLInputElement> document.getElementById("current-shape")).value;
        let fillColor: string = (<HTMLInputElement> document.getElementById("fill-color")).value;
        let borderColor: string = (<HTMLInputElement> document.getElementById("border-color")).value;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let shape: Shape;
        switch (shapeType) {
            case "circle" :
                shape = new Circle();
                initCircle(<Circle> shape);
                break;
            case "triangle" :
                shape = new Triangle();
                initTriangle(<Triangle> shape);
                break;
            case "rectangle" :
                shape = new Rectangle();
                initRectangle(<Rectangle> shape);
                break;
            default:
                break;
        }
        shape.fillColor = fillColor;
        shape.borderColor = borderColor;
        shape.Draw(ctx);

        info.innerHTML = "Square: " + shape.CalculateArea() + "<br />";
        if (shapeType === "circle") {
            info.innerHTML += "Circuit: " + shape.CalculatePerimeter();
        } else {
            info.innerHTML += "Perimeter: " + shape.CalculatePerimeter();
        }
    }

    function initCircle(shape: Circle) {
        let radius: number = parseFloat((<HTMLInputElement> document.getElementById("circle-radius")).value);
        let posX: number = parseFloat((<HTMLInputElement> document.getElementById("circleX")).value);
        let posY: number = parseFloat((<HTMLInputElement> document.getElementById("circleY")).value);

        if (radius) { shape.radius = radius; }
        if (posX) { shape.posX = posX; }
        if (posY) { shape.posY = posY; }
    }

    function initTriangle(shape: Triangle) {
        let posX1: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX1")).value);
        let posY1: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY1")).value);
        let posX2: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX2")).value);
        let posY2: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY2")).value);
        let posX3: number = parseFloat((<HTMLInputElement> document.getElementById("triangleX3")).value);
        let posY3: number = parseFloat((<HTMLInputElement> document.getElementById("triangleY3")).value);

        if (posX1) { shape.posX1 = posX1; }
        if (posY1) { shape.posY1 = posY1; }
        if (posX2) { shape.posX2 = posX2; }
        if (posY2) { shape.posY2 = posY2; }
        if (posX3) { shape.posX3 = posX3; }
        if (posY3) { shape.posY3 = posY3; }
    }

    function initRectangle(shape: Rectangle) {
        let posX1 = parseFloat((<HTMLInputElement> document.getElementById("rectangleX1")).value);
        let posY1 = parseFloat((<HTMLInputElement> document.getElementById("rectangleY1")).value);
        let posX2 = parseFloat((<HTMLInputElement> document.getElementById("rectangleX2")).value);
        let posY2 = parseFloat((<HTMLInputElement> document.getElementById("rectangleY2")).value);

        if (posX1) { shape.posX1 = posX1; }
        if (posY1) { shape.posY1 = posY1; }
        if (posX2) { shape.posX2 = posX2; }
        if (posY2) { shape.posY2 = posY2; }
    }
};
