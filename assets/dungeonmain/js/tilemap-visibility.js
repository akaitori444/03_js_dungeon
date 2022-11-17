/**
  * シャドウ タイルマップ レイヤーを制御できる小さなヘルパー クラス。 それは追跡します
  * ルームは現在アクティブです。
 */
export default class TilemapVisibility {
  constructor(shadowLayer) {
    this.shadowLayer = shadowLayer;
    this.activeRoom = null;
  }

  setActiveRoom(room) {
    // 部屋に入った際にタイルを更新する
    if (room !== this.activeRoom) {
      this.setRoomAlpha(room, 0); // 新しい部屋を見えるようにする
      if (this.activeRoom) this.setRoomAlpha(this.activeRoom, 0.5); // 古い部屋を暗くする
      this.activeRoom = room;
    }
  }

  // ルーム内のすべてのタイルにアルファを設定するヘルパー
  setRoomAlpha(room, alpha) {
    this.shadowLayer.forEachTile(
      (t) => (t.alpha = alpha),
      this,
      room.x,
      room.y,
      room.width,
      room.height
    );
  }
}
