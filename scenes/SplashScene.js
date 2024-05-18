import Phaser from 'phaser';

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScene' });
    }

    preload() {
        // Load assets here
    }

    create() {
        // Create splash screen
        this.time.delayedCall(500, () => {
            this.scene.start('MenuScene');
        });
    }
}

export default SplashScene;
