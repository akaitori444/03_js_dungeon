// 以下を使用したカスタム タイル マッピング:
// - putTileAt の単一インデックス
// - weightedRandomize の重みの配列
// - putTilesAt の配列または 2D 配列
const TILE_MAPPING = {
  BLANK: 20,
  WALL: {
    TOP_LEFT: 3,
    TOP_RIGHT: 4,
    BOTTOM_RIGHT: 23,
    BOTTOM_LEFT: 22,
    TOP: [
      { index: 39, weight: 4 },
      { index: [57, 58, 59], weight: 1 },
    ],
    LEFT: [
      { index: 21, weight: 4 },
      { index: [76, 95, 114], weight: 1 },
    ],
    RIGHT: [
      { index: 19, weight: 4 },
      { index: [77, 96, 115], weight: 1 },
    ],
    BOTTOM: [
      { index: 1, weight: 4 },
      { index: [78, 79, 80], weight: 1 },
    ],
  },
  FLOOR: [
    { index: 6, weight: 9 },
    { index: [7, 8, 26], weight: 1 },
  ],
  POT: [
    { index: 13, weight: 1 },
    { index: 32, weight: 1 },
    { index: 51, weight: 1 },
  ],
  DOOR: {
    TOP: [40, 6, 38],
    // きれいに無視する
    LEFT: [
      [40], 
      [6], 
      [2]
    ],
    BOTTOM: [2, 6, 0],
    // きれいに無視する
    RIGHT: [
      [38], 
      [6], 
      [0]
    ],
  },
  CHEST: 166,
  STAIRS: 81,
  // きれいに無視する
  TOWER: [
    [186],
    [205]
  ],
};

export default TILE_MAPPING;
