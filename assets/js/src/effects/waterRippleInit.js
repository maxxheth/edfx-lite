import makeWaterRipples from './makeWaterRipplesOld';

// import {WaterModel, WaterCanvas} from './waterRippleFactory';


const waterRippleInit = homeSections => {

    const homeSectionCanvasSets = homeSections.map((homeSection, homeIndex) => {

        const homeSectionCanvas = document.createElement('canvas');

        homeSectionCanvas.id = 'home-section-canvas-0' + (homeIndex + 1);

        // const homeSection = document.getElementById(ID);

        homeSection.appendChild(homeSectionCanvas);

        homeSectionCanvas.setAttribute('width', getComputedStyle(homeSection).width);

        homeSectionCanvas.setAttribute('height', getComputedStyle(homeSection).height);

        return {

            homeSectionCanvas: document.getElementById(homeSectionCanvas.id),
            homeSectionBackgroundImgUrl: getComputedStyle(homeSection).backgroundImage,
            homeSectionWidth: getComputedStyle(homeSection).width,
            homeSectionHeight: getComputedStyle(homeSection).height

        };

    });

    console.log({homeSectionCanvasSets: homeSectionCanvasSets});

    // const firstHomeSection = document.getElementById(homeSectionIds[0]);

    // const width = getComputedStyle(firstHomeSection).width;

    // const height = getComputedStyle(firstHomeSection).height;

    homeSectionCanvasSets.forEach(canvasSet => {

        const {
            homeSectionCanvas,
            homeSectionBackgroundImgUrl,
            homeSectionWidth,
            homeSectionHeight
        } = canvasSet;

        makeWaterRipples

        (homeSectionCanvas)

        (homeSectionBackgroundImgUrl)

        ({
            width: homeSectionWidth,
            height: homeSectionHeight
        });


    });

    // const waterModel = new WaterModel(width, height, {
    //     resolution:2.0,
    //     interpolate:false,
    //     damping:0.985,
    //     clipping:5,
    //     evolveThreshold:0.05,
    //     maxFps:30,
    //     showStats: false
    // });



    // homeSectionIds.forEach(homeSectionId => {

    //     const homeSection = document.getElementById(homeSectionId);

    //     const backgroundImageUrl = getComputedStyle(homeSection).backgroundImageUrl;

    //     const waterCanvas = new WaterCanvas(width, height,
    //         homeSectionId, waterModel, {
    //             backgroundImageUrl: backgroundImageUrl,
    //             lightRefraction:9.0,
    //             lightReflection:0.1,
    //             maxFps:20,
    //             showStats: false
    //         });

    //     console.log(waterCanvas);

    // });

};

export default waterRippleInit;