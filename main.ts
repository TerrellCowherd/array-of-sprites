controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let list: Sprite[] = []
list = [sprites.create(img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d f d d d d d d d d f d d d 
d d b d d d b b b b d d d b d d 
d b f b d d d d d d d d b f b d 
d d d f f b d d d d b f f d d d 
d d d d b f f f f f f b d d d d 
d d d d d d d b b d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`, SpriteKind.Player), sprites.create(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5 
5 5 4 5 5 5 4 4 4 4 5 5 5 4 5 5 
5 4 f 4 5 5 5 5 5 5 5 5 4 f 4 5 
5 5 5 f f 4 5 5 5 5 4 f f 5 5 5 
5 5 5 5 4 f f f f f f 4 5 5 5 5 
5 5 5 5 5 5 5 4 4 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, SpriteKind.Player), sprites.create(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 f 3 3 3 3 3 3 3 3 f 3 3 3 
3 3 2 3 3 3 2 2 2 2 3 3 3 2 3 3 
3 2 f 2 3 3 3 3 3 3 3 3 2 f 2 3 
3 3 3 f f 2 3 3 3 3 2 f f 3 3 3 
3 3 3 3 2 f f f f f f 2 3 3 3 3 
3 3 3 3 3 3 3 2 2 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Player), sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 
7 7 6 7 7 7 6 6 6 6 7 7 7 6 7 7 
7 6 f 6 7 7 7 7 7 7 7 7 6 f 6 7 
7 7 7 f f 6 7 7 7 7 6 f f 7 7 7 
7 7 7 7 6 f f f f f f 6 7 7 7 7 
7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player), sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 f 4 4 4 4 4 4 4 4 f 4 4 4 
4 4 e 4 4 4 e e e e 4 4 4 e 4 4 
4 e f e 4 4 4 4 4 4 4 4 e f e 4 
4 4 4 f f e 4 4 4 4 e f f 4 4 4 
4 4 4 4 e f f f f f f e 4 4 4 4 
4 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)]
