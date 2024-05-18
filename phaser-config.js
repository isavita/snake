import SplashScene from './scenes/SplashScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import ScoreScene from './scenes/ScoreScene';

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
