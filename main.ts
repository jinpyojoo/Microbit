let x = 0
let wr = 0
let pt = 0
let direction = 0
let speed = 0
input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        wr = 0
        pt += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (direction == 2) {
        wr = 0
        pt += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == 4) {
        wr = 0
        pt += 1
    }
})
basic.forever(function () {
    direction = randint(0, 2)
    if (direction == 0) {
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
    } else {
        if (direction == 2) {
            wr = 1
            basic.showLeds(`
                . . . . .
                . # . # .
                # . . . #
                . # . # .
                . . . . .
                `)
            speed = randint(500, 1000)
            basic.pause(speed)
            if (wr == 1) {
                basic.clearScreen()
                basic.showString("GG" + pt)
                pt = 0
            }
        } else {
            x = 4
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
                x += -1
            }
            if (wr == 1) {
                basic.clearScreen()
                basic.showString("GG" + pt)
                pt = 0
            }
        }
    }
})
