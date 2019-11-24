const recordClicks = (clickRecord = {

    clickXEvents: [],
    clickYEvents: [],
    clickDragEvents: []

}) => ({
    clickX,
    clickY,
    clickDrag
} = {}) => {

    if (!clickX && !clickY && !clickDrag) return clickRecord;

    clickRecord.clickXEvents.push(clickX);

    clickRecord.clickYEvents.push(clickY);

    clickRecord.clickDragEvents.push(clickDrag);

    return clickRecord;

};

const canvasState = {

    paint: false,
    clickRecord: {}

};

const canvasDoodle = canvasSelector => ({
    canvasWidth = 0,
    canvasHeight = 0
} = {}) => {

    const canvasElems = [...document.querySelectorAll(canvasSelector)];

    canvasElems.forEach(canvasElem => {

        canvasElem.setAttribute('width', canvasWidth);

        canvasElem.setAttribute('height', canvasHeight);

    });

    const redraw = (canvasParams = {}) => context => (clickRecord = {}) => {


        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

        const {
            strokeStyle,
            lineJoin,
            lineWidth
        } = canvasParams;

        // context.strokeStyle = "#df4b26";
        // context.lineJoin = "round";
        // context.lineWidth = 5;

        context.strokeStyle = strokeStyle;
        context.lineJoin = lineJoin;
        context.lineWidth = lineWidth;


        const {
            clickXEvents,
            clickYEvents,
            clickDragEvents
        } = clickRecord;

        for (let i = 0; i < clickXEvents.length; i++) {

            context.beginPath();

            if (clickDragEvents[i] && i) {
                context.moveTo(clickXEvents[i - 1], clickYEvents[i - 1]);
            } else {
                context.moveTo(clickXEvents[i] - 1, clickYEvents[i]);
            }

            context.lineTo(clickXEvents[i], clickYEvents[i]);

            context.closePath();

            context.stroke();
        }
    }

    const manageClickRecord = (clickRecord = {}) => ({
        mouseX,
        mouseY,
        mouseDrag
    }) => {

        if (!Object.entries(clickRecord).length > 0) {

            if (!mouseDrag) {

                clickRecord = recordClicks()({

                    clickX: mouseX,
                    clickY: mouseY,

                });

            } else {

                clickRecord = recordClicks()({

                    clickX: mouseX,
                    clickY: mouseY,
                    clickDrag: mouseDrag

                });

            }

        } else {

            if (!mouseDrag) {

                clickRecord = recordClicks

                (clickRecord)

                ({

                    clickX: mouseX,
                    clickY: mouseY,

                })

            } else {

                clickRecord = recordClicks

                (clickRecord)

                ({

                    clickX: mouseX,
                    clickY: mouseY,
                    clickDrag: mouseDrag

                })

            }

        }

        return clickRecord;

    };



    

    const onMouseOff = event => {

        console.log({Event: event});

        console.log({EventTarget: event.target});

        if (!event.target.closest(canvasSelector)) return;

        canvasState.paint = false;

    };

    document.addEventListener('mouseup', onMouseOff, false);
    document.addEventListener('mouseleave', onMouseOff, false);




    document.addEventListener('mousedown', event => {

        if (!event.target.matches(canvasSelector)) return;

        const context = event.target.getContext('2d');
        const mouseX = event.pageX - event.target.offsetLeft;
        const mouseY = event.pageY - event.target.offsetTop;

        canvasState.paint = true;

        canvasState.clickRecord = manageClickRecord(canvasState.clickRecord)({
            mouseX,
            mouseY
        });

        if (!!canvasState.clickRecord) {

            redraw({
                strokeStyle: "#df4b26",
                lineJoin: "round",
                lineWidth: 5
            })
            
            (context)
            
            (canvasState.clickRecord);

        }
       
    }, false);

    document.addEventListener('mousemove', event => {

        if (!event.target.matches(canvasSelector)) return;

        const context = event.target.getContext('2d');
        const mouseX = event.pageX - event.target.offsetLeft;
        const mouseY = event.pageY - event.target.offsetTop;

        if (canvasState.paint) {    

            canvasState.clickRecord = manageClickRecord
            
            (canvasState.clickRecord)
            
            ({
                mouseX,
                mouseY,
                mouseDrag: true
            });

            if (!!canvasState.clickRecord) {

                redraw({
                    strokeStyle: "#df4b26",
                    lineJoin: "round",
                    lineWidth: 5
                })
                
                (context)
                
                (canvasState.clickRecord);

            }

        }

    }, false);

};

export default canvasDoodle;