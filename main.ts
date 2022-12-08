let name = game.askForString("What is your name?")
game.splash("Hello " + name + "!")
let password = game.askForNumber("What is your password?")
if (password) {
    game.splash("Login successful!")
} else {
    game.splash("Login failed!")
}
