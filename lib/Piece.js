var js2 = require('js2').js2;
var JS2 = js2;
var Board=exports['Board']=JS2.Class.extend( function(KLASS, OO){
  OO.addMember("initialize",function (cols, rows) {
    var rows = [];
    for (var i=0; i<rows.length; i++) {
      var row = [];
      for (var j=0; j<cols.length; j++) {
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

var Factory=exports['Factory']=JS2.Class.extend( function(KLASS, OO){
  OO.addMember("initialize",function () {
    this.board = new Board(10, 10);
    var piece = this.createPiece(0, 1);
    this.board.setPiece(piece);
  });

  OO.addMember("createPiece",function (x, y) {
    return new Piece(x, y, JQPiece);
  });
});
var JQPiece=exports['JQPiece']=JS2.Class.extend( function(KLASS, OO){
  OO.addMember("moveTo",function (x, y) {
    console.log("I am at " + x + ', ' + y);
  });
});

var Piece=exports['Piece']=JS2.Class.extend( function(KLASS, OO){
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

var Soldier=exports['Soldier']=Piece.extend( function(KLASS, OO){
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

var Horse=exports['Horse']=Piece.extend( function(KLASS, OO){

});

var Car=exports['Car']=Piece.extend( function(KLASS, OO){

});
var Canon=exports['Canon']=Piece.extend( function(KLASS, OO){

});
var Elephant=exports['Elephant']=Piece.extend( function(KLASS, OO){

});

var BodyGuard=exports['BodyGuard']=Piece.extend( function(KLASS, OO){

});

var King=exports['King']=Piece.extend( function(KLASS, OO){

});

var f = new Factory();
