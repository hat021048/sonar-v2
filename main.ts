function Sjekk () {
    if (Hinder3 == 1 && Hinder2 == 1) {
        Fram()
    } else {
        Bak()
        basic.pause(2000)
        if (Hinder3 == 0) {
            HøyreF()
            basic.pause(1000)
        } else if (Hinder2 == 0) {
            HøyreF()
            basic.pause(1000)
            HøyreF()
            basic.pause(1000)
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
let Hinder2 = 0
let Hinder3 = 0
let FartB = 0
let FartF = 0
basic.showIcon(IconNames.Heart)
FartF = 150
FartB = -100
basic.forever(function () {
    Hinder2 = pins.digitalReadPin(DigitalPin.P14)
    Hinder3 = pins.digitalReadPin(DigitalPin.P15)
    Sjekk()
})
