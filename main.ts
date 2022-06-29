// Toggles Game
input.onButtonPressed(Button.B, function () {
    if (Game_Running == 0) {
        Game_Running = 1
    } else {
        Game_Running = 0
    }
})
let Game_Running = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.setBrightness(125)
    if (Game_Running == 1) {
        led.plotBrightness(1, 3, 125)
        led.plotBrightness(1, 2, 125)
    } else {
        led.unplot(1, 3)
        led.unplot(1, 2)
    }
})
basic.forever(function () {
    if (Game_Running == 1) {
        led.setBrightness(255)
        led.plotBrightness(0, 4, 255)
        led.plotBrightness(1, 4, 255)
        led.plotBrightness(2, 4, 255)
        led.plotBrightness(3, 4, 255)
        led.plotBrightness(4, 4, 255)
    } else {
        led.unplot(0, 4)
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.unplot(3, 4)
        led.unplot(4, 4)
    }
})
basic.forever(function () {
    led.plot(4, 4)
    led.plot(4, 3)
})
