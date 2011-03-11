JS2.Class.extend('Board', function(KLASS, OO){
  OO.addMember("initialize",function (nrows, ncols) {
    var rows = [];
    for (var i=0; i<nrows; i++) {
      var row = [];
      for (var j=0; j<ncols; j++) {
        row.push(null);
      }

      rows.push(row);
    }
    this.rows = rows;
  });

  OO.addMember("setPiece",function (piece) {
    this.rows[piece.y][piece.x] = piece;
  });
});

JS2.Class.extend('Factory', function(KLASS, OO){
  OO.addMember("initialize",function () {
    this.board = new Board(10, 10);
    var piece = this.createPiece(0, 1);
    this.board.setPiece(piece);
    piece.moveTo(3,4);
  });

  OO.addMember("createPiece",function (x, y) {
    return new Piece(x, y, JQPiece);
  });

});
JS2.Class.extend('JQPiece', function(KLASS, OO){
  OO.addMember("moveTo",function (x, y) {
    console.log("I am at " + x + ', ' + y);
  });
});

JS2.Class.extend('Piece', function(KLASS, OO){
  OO.addMember("initialize",function (x, y, klass) {
    this.x = x;
    this.y = y;
    this.ui = new klass();
  });

  OO.addMember("setPosition",function (x, y) {
    this.x = x;
    this.y = y;
  });

  OO.addMember("moveTo",function (x, y) {
    this.setPosition(x,y);
    this.ui.moveTo(x, y);
  });

  OO.addMember("possiblePositions",function () {
    return [];
  });
});

Piece.extend('Soldier', function(KLASS, OO){
  OO.addMember("possiblePositions",function () {
    var x = this.x;
    var y = this.y;

    return [ 
      [ x + 1, y - 1 ],
      [ x + 1, y + 1 ],
      [ x + 1, y ],
      [ x - 1, y - 1 ],
      [ x - 1, y + 1 ],
      [ x - 1, y ],
      [ x + 1, y + 1 ],
      [ x - 1, y - 1 ]
    ];
  });
});

Piece.extend('Horse', function(KLASS, OO){

});

Piece.extend('Car', function(KLASS, OO){

});
Piece.extend('Canon', function(KLASS, OO){

});
Piece.extend('Elephant', function(KLASS, OO){

});

Piece.extend('BodyGuard', function(KLASS, OO){

});

Piece.extend('King', function(KLASS, OO){

});

var f = new Factory();
