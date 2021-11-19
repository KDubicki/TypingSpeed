import { time } from './modules/setup.js'
import * as game from './modules/game.js'

const isPlaying = () => game.status() ? setTimeout(isPlaying, 50) : stop()

const stop = () => game.stop()

const start = () => {
    game.start(time)
    isPlaying()
}

start();

