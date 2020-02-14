import { WaterModel, WaterCanvas } from "./waterRippleFactory";

const waterRippleInit = (...homeSectionIds) => {
    homeSectionIds.forEach(ID => {
        if (!document.getElementById(ID))
            throw Error("Pass only elements with ID attributes, please!");
    });

    const firstHomeSection = document.getElementById(homeSectionIds[0]);

    const width = getComputedStyle(firstHomeSection).width;

    const height = getComputedStyle(firstHomeSection).height;

    const waterModel = new WaterModel(width, height, {
        resolution: 2.0,
        interpolate: false,
        damping: 0.985,
        clipping: 5,
        evolveThreshold: 0.05,
        maxFps: 30,
        showStats: false
    });

    homeSectionIds.forEach(homeSectionId => {
        const homeSection = document.getElementById(homeSectionId);

        const backgroundImageUrl = getComputedStyle(homeSection)
            .backgroundImageUrl;

        const waterCanvas = new WaterCanvas(
            width,
            height,
            homeSectionId,
            waterModel,
            {
                backgroundImageUrl: backgroundImageUrl,
                lightRefraction: 9.0,
                lightReflection: 0.1,
                maxFps: 20,
                showStats: false
            }
        );

        console.log(waterCanvas);
    });
};

export default waterRippleInit;
