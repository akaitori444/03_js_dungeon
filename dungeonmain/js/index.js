/**
  * 著者: Michael Hadley、mikewesthad.com
  * アセット クレジット:
  * - タイルセット、Michele "Buch" Bucelli (タイルセット アーティスト) & Abram Connelly (タイルセット スポンサー):
 *     https://opengameart.org/content/top-down-dungeon-tileset
* - キャラクター、Michele "Buch" Bucelli:
 *      https://opengameart.org/content/a-platformer-in-the-forest
 */
import DungeonScene from "./dungeon-scene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000",
  parent: "game-container",
  pixelArt: true,
  scene: DungeonScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);