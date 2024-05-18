import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
  constructor() {
      super({ key: 'MenuScene' });
  }

  preload() {
      // Load any assets needed for the menu here
  }

  create() {
      this.add.text(585, 1266, 'Menu Scene', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

      const startButton = this.add.text(585, 1366, 'Start Game', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();
      startButton.on('pointerdown', () => {
          this.scene.start('GameScene');
      });

      const scoreButton = this.add.text(585, 1466, 'Scores', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();
      scoreButton.on('pointerdown', () => {
          this.scene.start('ScoreScene');
      });
  }
}

export default MenuScene;
