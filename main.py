# Toggles Game

def on_button_pressed_a():
    global jump
    if jump == 0:
        jump = 1
    else:
        jump = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

# Toggles Game

def on_button_pressed_b():
    global Game_Running
    if Game_Running == 0:
        Game_Running = 1
    else:
        Game_Running = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

# Clears screen
# 
Game_Running = 0
jump = 0
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")

def on_forever():
    led.set_brightness(125)
    if Game_Running == 1:
        pass
    else:
        pass
basic.forever(on_forever)

def on_forever2():
    if Game_Running == 1:
        led.set_brightness(255)
        led.plot_brightness(0, 4, 255)
        led.plot_brightness(1, 4, 255)
        led.plot_brightness(2, 4, 255)
        led.plot_brightness(3, 4, 255)
        led.plot_brightness(4, 4, 255)
    else:
        led.unplot(0, 4)
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.unplot(3, 4)
        led.unplot(4, 4)
basic.forever(on_forever2)

# Character

def on_forever3():
    global jump
    led.set_brightness(125)
    if Game_Running == 1:
        if jump == 1:
            led.unplot(1, 3)
            led.unplot(1, 2)
            led.plot_brightness(1, 1, 125)
            led.plot_brightness(1, 2, 125)
            basic.pause(1000)
            led.unplot(1, 2)
            led.unplot(1, 1)
            jump = 0
        else:
            led.plot_brightness(1, 3, 125)
            led.plot_brightness(1, 2, 125)
basic.forever(on_forever3)

def on_forever4():
    while Game_Running == 1:
        for index in range(999):
            led.plot(4, 3)
            basic.pause(500)
            led.unplot(4, 3)
            led.plot(3, 3)
            basic.pause(500)
            led.unplot(3, 3)
            led.plot(2, 3)
            basic.pause(500)
            led.unplot(2, 3)
            led.plot(1, 3)
            basic.pause(500)
            led.unplot(1, 3)
            led.plot(0, 3)
            basic.pause(500)
            led.unplot(0, 3)
basic.forever(on_forever4)
