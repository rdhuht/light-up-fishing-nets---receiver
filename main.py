# 接收端
def 闪烁():
    led.set_brightness(255)
    for index in range(4):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)

def on_received_value(name, value):
    if name == "light":
        pass
    if name == "volume":
        pass
radio.on_received_value(on_received_value)

# 接收端

def on_forever():
    if input.light_level() < 50:
        闪烁()
        music.set_volume(0)
        music.play_melody("E A - G F F D D ", 120)
    else:
        basic.clear_screen()
basic.forever(on_forever)
