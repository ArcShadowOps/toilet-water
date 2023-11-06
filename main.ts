let strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
OLED.init(128, 64)
basic.forever(function () {
    if (smarthome.ReadSoilHumidity(AnalogPin.P1) < 60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        OLED.writeString("I NEED WATER!")
        OLED.writeStringNewLine(" Water is: ")
        OLED.writeNum(smarthome.ReadSoilHumidity(AnalogPin.P1))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        OLED.writeStringNewLine("WATERED")
        OLED.writeStringNewLine("Water is:")
        OLED.writeNum(smarthome.ReadSoilHumidity(AnalogPin.P1))
        basic.pause(1000)
        OLED.clear()
    }
})
