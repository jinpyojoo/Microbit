let x = 0
let wr = 0
let pt = 0
let speed = 0
input.onButtonPressed(Button.B, function () {
    if (x == 4) {
        wr = 0
        pt += 1
    }
})
basic.forever(function () {
    x = 0
    speed = randint(100, 500)
    for (let index = 0; index < 5; index++) {
        wr = 1
        led.plot(x, 0)
        led.plot(x, 1)
        led.plot(x, 2)
        led.plot(x, 3)
        led.plot(x, 4)
        basic.pause(speed)
        basic.clearScreen()
        x += 1
    }
    if (wr == 1) {
        basic.clearScreen()
        basic.showString("GG" + pt)
        pt = 0
    }
})
