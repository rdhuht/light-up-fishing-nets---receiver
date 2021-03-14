// 接收端
function 闪烁 () {
    led.setBrightness(light2)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "light") {
        light2 = value
    }
    if (name == "volume") {
        volume = value
    }
})
let volume = 0
let light2 = 0
radio.setGroup(111)
// 接收端
basic.forever(function () {
    if (input.lightLevel() < 50) {
        闪烁()
        music.setVolume(volume)
        music.playMelody("E A - G F F D D ", 120)
    } else {
        basic.clearScreen()
    }
})
