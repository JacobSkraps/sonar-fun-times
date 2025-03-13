let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    if (distance > 70) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        if (distance > 50) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    distance * 50,
    distance * 50,
    distance * 25.5,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.pause(1000)
})
