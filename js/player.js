export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;

    const anims = scene.anims;
    anims.create({
      key: "player-walk",
      frames: anims.generateFrameNumbers("characters", { start: 46, end: 49 }),
      frameRate: 8,
      repeat: -1,
    });
    anims.create({
      key: "player-walk-back",
      frames: anims.generateFrameNumbers("characters", { start: 65, end: 68 }),
      frameRate: 8,
      repeat: -1,
    });

    this.sprite = scene.physics.add.sprite(x, y, "characters", 0).setSize(22, 33).setOffset(23, 27);

    this.sprite.anims.play("player-walk-back");

    this.keys = scene.input.keyboard.createCursorKeys();
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    const keys = this.keys;
    const sprite = this.sprite;
    const speed = 300;
    const prevVelocity = sprite.body.velocity.clone();

    // 最後のフレームから前の動きを停止します
    sprite.body.setVelocity(0);

    // 水平移動
    if (keys.left.isDown) {
      sprite.body.setVelocityX(-speed);
      sprite.setFlipX(true);
    } else if (keys.right.isDown) {
      sprite.body.setVelocityX(speed);
      sprite.setFlipX(false);
    }

    // 垂直移動
    if (keys.up.isDown) {
      sprite.body.setVelocityY(-speed);
    } else if (keys.down.isDown) {
      sprite.body.setVelocityY(speed);
    }

    // 速度を正規化してスケーリングし、スプライトが対角線に沿って速く移動できないようにします
    sprite.body.velocity.normalize().scale(speed);

    // アニメーションを最後に更新し、左右のアニメーションを上下のアニメーションより優先します
    if (keys.left.isDown || keys.right.isDown || keys.down.isDown) {
      sprite.anims.play("player-walk", true);
    } else if (keys.up.isDown) {
      sprite.anims.play("player-walk-back", true);
    } else {
      sprite.anims.stop();

      // 移動中の場合は、使用するフレームを選択してアイドル状態にします
      if (prevVelocity.y < 0) sprite.setTexture("characters", 65);
      else sprite.setTexture("characters", 46);
    }
  }

  destroy() {
    this.sprite.destroy();
  }
}
