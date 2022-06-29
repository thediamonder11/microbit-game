basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")

def on_forever():
    led.set_brightness(255)
    led.plot_brightness(0, 4, 255)
    led.plot_brightness(1, 4, 255)
    led.plot_brightness(2, 4, 255)
    led.plot_brightness(3, 4, 255)
    led.plot_brightness(4, 4, 255)
basic.forever(on_forever)

def on_forever2():
    led.set_brightness(125)
    led.plot_brightness(1, 3, 125)
    led.plot_brightness(1, 2, 125)
basic.forever(on_forever2)
