let Avstand = 0
let Ekko = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Ekko = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.MicroSeconds
    )
    Avstand = Ekko * (100 / 350)
    basic.showNumber(Avstand)
})
