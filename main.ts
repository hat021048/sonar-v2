function Sjekk () {
    if (Hinder1 == 1 && (Hinder2 == 1 && Hinder3 == 1)) {
        Fram()
    } else {
        Bak()
        basic.pause(Delay * 2)
        if (Hinder3 == 0) {
            HøyreF()
            basic.pause(Delay)
        } else if (Hinder2 == 0) {
            HøyreF()
            basic.pause(Delay)
            HøyreF()
            basic.pause(Delay)
        } else if (Hinder1 == 0) {
            VenstreF()
            basic.pause(Delay)
        }
    }
}
function VenstreF () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    FartF
    )
}
function Stopp () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
function Bak () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    FartB,
    robotbit.Motors.M2A,
    FartB
    )
}
function HøyreF () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    FartF,
    robotbit.Motors.M2A,
    0
    )
}
function Fram () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    FartF,
    robotbit.Motors.M2A,
    FartF
    )
}
let Hinder3 = 0
let Hinder2 = 0
let Hinder1 = 0
let Delay = 0
let FartB = 0
let FartF = 0
basic.showIcon(IconNames.Heart)
FartF = 100
FartB = -100
Delay = 500
basic.forever(function () {
    Hinder1 = pins.digitalReadPin(DigitalPin.P13)
    Hinder2 = pins.digitalReadPin(DigitalPin.P14)
    Hinder3 = pins.digitalReadPin(DigitalPin.P15)
    Sjekk()
})
