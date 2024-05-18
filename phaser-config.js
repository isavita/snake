import SplashScene from './scenes/SplashScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import ScoreScene from './scenes/ScoreScene.js';

export default {
    type: Phaser.AUTO,
    width: 1170,
    height: 2532,
    scene: [SplashScene, MenuScene, GameScene, ScoreScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};
