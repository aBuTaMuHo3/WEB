let App = React.createClass ({
   render: function() {
      return (
         <div className="container-fluid">
            <div className="row-fluid">
                <Canvas/>
                <SettingsForm/>                
            </div>
         </div>
      );
   }
});

let SettingsForm = React.createClass ({
    render() {
        return (
            <div className="settings-menu col-xs-12 col-sm-4">
                <form id="settings-form" className="form-horizontal">
                    <BasicSettings/>
                    <CircleSettings/>
                    <TriangleSettings/>
                    <RectangleSettings/>
                    <InfoBlock/>
                </form>
            </div>
        );
    }
});

let BasicSettings  = React.createClass ({
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="current-shape" className="col-xs-12 col-sm-6 control-label">Select shape</label>
                    <div className="col-xs-12 col-sm-6">
                        <select id="current-shape" className="form-control input-small">
                            <option value="circle">Круг</option>
                            <option value="triangle">Треугольник</option>
                            <option value="rectangle">Прямоугольник</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="fill-color" className="col-xs-12 col-sm-6 control-label">Цвет заливки</label>
                    <div className="col-xs-12 col-sm-6">
                        <input type="color" className="form-control" id="fill-color" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="border-color" className="col-xs-12 col-sm-6 control-label">Цвет обводки</label>
                    <div className="col-xs-12 col-sm-6">
                        <input type="color" className="form-control" id="border-color" />
                    </div>
                </div>
            </div>
        )
    }
});

let CircleSettings = React.createClass ({
    render() {
        return (
            <div>
                <div className="circle-settings" id="circle-block">
                    <div className="form-group row">
                        <label htmlFor="circle-radius" className="col-xs-12 col-sm-6 control-label">Радиус</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="circle-radius" placeholder="radius" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="circleX" className="col-xs-12 col-sm-6 control-label">Позиция центра по X</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="circleX" placeholder="X" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="circleY" className="col-xs-12 col-sm-6 control-label">Позиция центра по Y</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="circleY" placeholder="Y" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

let TriangleSettings = React.createClass ({
    render() {
        return (
            <div>
                <div className="triangle-settings" hidden="true" id="triangle-block">
                    <div className="form-group row">
                        <label htmlFor="triangleX1" className="col-xs-12 col-sm-6 control-label">Координата X1</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleX1" placeholder="X1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="triangleY1" className="col-xs-12 col-sm-6 control-label">Координата Y1</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleY1" placeholder="Y1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="triangleX2" className="col-xs-12 col-sm-6 control-label">Координата X2</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleX2" placeholder="X2" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="triangleY2" className="col-xs-12 col-sm-6 control-label">Координата Y2</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleY2" placeholder="Y2" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="triangleX3" className="col-xs-12 col-sm-6 control-label">Координата X3</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleX3" placeholder="X3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="triangleY3" className="col-xs-12 col-sm-6 control-label">Координата Y3</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="triangleY3" placeholder="Y3" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

let RectangleSettings = React.createClass ({
    render() {
        return (
            <div>
                <div className="rectangle-settings" hidden="true" id="rectangle-block">
                    <div className="form-group row">
                        <label htmlFor="rectangleX1" className="col-xs-12 col-sm-6 control-label">Координата X1</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="rectangleX1" placeholder="X1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rectangleY1" className="col-xs-12 col-sm-6 control-label">Координата Y1</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="rectangleY1" placeholder="Y1" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rectangleX2" className="col-xs-12 col-sm-6 control-label">Координата X2</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="rectangleX2" placeholder="X2" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rectangleY2" className="col-xs-12 col-sm-6 control-label">Координата Y2</label>
                        <div className="col-xs-12 col-sm-6">
                            <input type="text" className="form-control" id="rectangleY2" placeholder="Y2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

let InfoBlock = React.createClass ({
    render() {
        return (
            <div className="info" id="info-block"></div>
        );
    }
});

let Canvas = React.createClass ({
    render() {
        return (
            <div className="col-xs-12 col-sm-8">
                <canvas className="canvas img-responsive" id="canvas" width="1280" height="720"></canvas>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('main'));