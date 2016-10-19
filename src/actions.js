export const DROP_PIECE = 'DROP_PIECE';
export function dropPiece(x, y, charCode) {
  return {
    type: DROP_PIECE,
    payload: { x, y, charCode }
  }
}
