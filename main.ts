// Toggles Game
input.onButtonPressed(Button.A, function () {
    if (jump == 0) {
        jump = 1
    } else {
        jump = 0
    }
})
// Toggles Game
input.onButtonPressed(Button.B, function () {
    if (Game_Running == 0) {
        Game_Running = 1
    } else {
        Game_Running = 0
    }
})
// Clears screen
// 
// This code is made by Kai Springer
// 
let Game_Running = 0
let jump = 0
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
    	
    } else {
    	
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
// Character
basic.forever(function () {
    led.setBrightness(125)
    if (Game_Running == 1) {
        if (jump == 1) {
            led.unplot(1, 3)
            led.unplot(1, 2)
            led.plotBrightness(1, 1, 125)
            led.plotBrightness(1, 2, 125)
            basic.pause(1000)
            led.unplot(1, 2)
            led.unplot(1, 1)
            jump = 0
        } else {
            led.plotBrightness(1, 3, 125)
            led.plotBrightness(1, 2, 125)
        }
    }
})
basic.forever(function () {
    while (Game_Running == 1) {
        for (let index = 0; index < 999; index++) {
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
        }
    }
})
