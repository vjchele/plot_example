/**
 * 10/100 = 1/ 10 = 0.1
 * 
 * Light level 0 - 255
 */
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
