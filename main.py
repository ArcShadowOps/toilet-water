strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)

def on_forever():
    if smarthome.read_soil_humidity(AnalogPin.P1) > 50:
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        OLED.write_string_new_line("I NEED WATER!")
        OLED.draw_loading(pins.analog_read_pin(AnalogPin.P1))
    else:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        OLED.write_string_new_line("WATERED")
        OLED.clear()
basic.forever(on_forever)
