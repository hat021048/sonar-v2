basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    ))
})
