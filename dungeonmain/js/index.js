/**
  * 著者: Michael Hadley、mikewesthad.com
  * アセット クレジット:
  * - タイルセット、Michele "Buch" Bucelli (タイルセット アーティスト) & Abram Connelly (タイルセット スポンサー):
 *     https://opengameart.org/content/top-down-dungeon-tileset
* - キャラクター、Michele "Buch" Bucelli:
 *      https://opengameart.org/content/a-platformer-in-the-forest
 */

import DungeonScene from "./dungeon-scene.js";

//変数
//ゲーム本編のデータ格納用
let Game = {};
//↓セーブ＆ロード時のデータ格納用
let Data = {};

//画面のサイズ調整用
Game.width = 800;
Game.height = 400;

//Title_Scene
class Title_Scene extends DungeonScene.Scene {

	constructor() {
		super({key: 'Title_Scene'});
	}

	preload() {


	}

	create() {
		//Game Title
		let title = this.add.text(Game.width / 2, Game.height / 3 * 1, 'GAME TITLE', {font: '40px Arial'}).setOrigin(0.5);

		//Start Button
		let start = this.add.text(Game.width / 2, Game.height / 3 * 2, 'START', {font: '20px Arial'}).setInteractive().setOrigin(0.5).setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

		start.on('pointerdown', function(pointer) {
			this.scene.start('Game_Scene');
		}, this);

	}

}

//Game Scene
class Game_Scene extends DungeonScene.Scene {
	
}

let game = new Phaser.Game(config);


//設定

const config = {
  type: Phaser.AUTO,
  parent: "game-container",
	width: Game.width,
	height: Game.height,
	pixelArt: true,
	scale: {
        	mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
			},
	physics: {
		//どの物理演算を使うかなどの設定、普通の2Dゲームでよく使われている。
		default: 'arcade',
		//ゲームシーン全体に重力を設定。横スクロールアクションなどで便利。
		arcade: {
      gravity: { y: 0 },
		}
	},
	scene: [Title_Scene, DungeonScene]

  
};