input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() >= 0 && input.compassHeading() < 90) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (input.compassHeading() >= 90 && input.compassHeading() < 180) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # # # # #
            `)
    } else if (input.compassHeading() >= 180 && input.compassHeading() < 270) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
