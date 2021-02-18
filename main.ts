function Sjekk () {
    if (HinderMF == 1 && (HinderHF == 1 && HinderVF == 1)) {
        Fram()
    } else if (HinderMF != 1) {
        Bak()
        if (HinderVB != 1) {
            Stopp()
        }
    } else if (HinderVF != 1) {
        Bak()
    } else if (HinderHF != 1) {
        Bak()
    } else if (false) {
        Stopp()
    } else {
    	
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
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function HøyreBak () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    FartB,
    robotbit.Motors.M2A,
    0
    )
}
function Bak () {
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.analogWritePin(AnalogPin.P0, FartB)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.analogWritePin(AnalogPin.P1, FartB)
}
function HøyreF () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    FartF,
    robotbit.Motors.M2A,
    0
    )
}
function VenstreBak () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    FartB
    )
}
function Fram () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.analogWritePin(AnalogPin.P0, FartF)
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.analogWritePin(AnalogPin.P1, FartF)
}
let HinderHB = 0
let HinderVB = 0
let HinderVF = 0
let HinderHF = 0
let HinderMF = 0
let FartB = 0
let FartF = 0
led.enable(false)
FartF = 500
FartB = 300
let Delay = 500
basic.forever(function () {
    HinderMF = pins.digitalReadPin(DigitalPin.P0)
    HinderHF = pins.digitalReadPin(DigitalPin.P12)
    HinderVF = pins.digitalReadPin(DigitalPin.P1)
    HinderVB = pins.digitalReadPin(DigitalPin.P14)
    HinderHB = pins.digitalReadPin(DigitalPin.P15)
    Sjekk()
})
