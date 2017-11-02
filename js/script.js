$(document).ready(function() {
  $('#result').hide();

  //Variables
  var numSquares = 9;
  var board;
  var symbol = "X";


  function Square() {
    this.value = " ";
    this.mark = false;
  };

  function createBoard() {
    board = new Array(numSquares);
    for (var i = 0; i < numSquares; i++) {
      board[i] = new Square();
    }
    return board;
  }

  function render() {
    var renderedGrid = "";
    for(var i = 0; i < numSquares; i++) {
      if (board[i].value === " ") {
        renderedGrid += `<div class='square' id=${"id" + i}>${board[i].value}</div>`;
      }
      else if (board[i].value === "X") {
        renderedGrid += `<div class='square' id=${"id" + i}>${board[i].value}</div>`;
      }
      else {
        renderedGrid += `<div class='square' id=${"id" + i}>${board[i].value}</div>`;
      }
    }
    $("#board").html(renderedGrid);
    makeMoves();
  };

  function makeZeroMove() {
    $("#id0").on("click", function() {
      if (board[0].mark === false) {
        board[0].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[0].value = marker;
      }
      render();
    })
  };

  function makeOneMove() {
    $("#id1").on("click", function() {
      if (board[1].mark === false) {
        board[1].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[1].value = marker;
      }
      render();
    })
  };

  function makeTwoMove() {
    $("#id2").on("click", function() {
      if (board[2].mark === false) {
        board[2].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[2].value = marker;
      }
      render();
    })
  };

  function makeThreeMove() {
    $("#id3").on("click", function() {
      if (board[3].mark === false) {
        board[3].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[3].value = marker;
      }
      render();
    })
  };

  function makeFourMove() {
    $("#id4").on("click", function() {
      if (board[4].mark === false) {
        board[4].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[4].value = marker;
      }
      render();
    })
  };

  function makeFiveMove() {
    $("#id5").on("click", function() {
      if (board[5].mark === false) {
        board[5].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[5].value = marker;
      }
      render();
    })
  };

  function makeSixMove() {
    $("#id6").on("click", function() {
      if (board[6].mark === false) {
        board[6].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[6].value = marker;
      }
      render();
    })
  };

  function makeSevenMove() {
    $("#id7").on("click", function() {
      if (board[7].mark === false) {
        board[7].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[7].value = marker;
      }
      render();
    })
  };

  function makeEightMove() {
    $("#id8").on("click", function() {
      if (board[8].mark === false) {
        board[8].mark = true;
        var marker = symbol;
        symbol = (symbol == "X") ? "O" : "X";
        board[8].value = marker;
      }
      render();
    })
  };


    function makeMoves() {
      makeZeroMove();
      makeOneMove();
      makeTwoMove()
      makeThreeMove();
      makeFourMove();
      makeFiveMove();
      makeSixMove();
      makeSevenMove();
      makeEightMove();
      gameOver();
    };

    //Check for horizontal win conditions
    function horizontal() {
      if (board[0].value === board[1].value && board[1].value === board[2].value && board[0].value !== " " ) {
        return true;
      }
      else if (board[3].value === board[4].value && board[4].value === board[5].value && board[3].value !== " ") {
        return true;
      }
      else if (board[6].value === board[7].value && board[7].value === board[8].value && board[6].value !== " ") {
        return true;
      }
      else {
        return false;
      }
    };

    //Check for vertical win conditions
    function vertical() {
      if (board[0].value === board[3].value && board[3].value === board[6].value && board[0].value !== " ") {
        return true;
      }
      else if (board[1].value === board[4].value && board[4].value === board[7].value && board[1].value !== " ") {
        return true;
      }
      else if (board[2].value === board[5].value && board[5].value === board[8].value && board[2].value !== " ") {
        return true;
      }
      else {
        return false;
      }
    };

    //Check for diagonal win conditions
    function diagonal() {
      if (board[0].value === board[4].value && board[4].value === board[8].value && board[0].value !== " ") {
        return true;
      }
      else if (board[2].value === board[4].value && board[4].value === board[6].value && board[2].value !== " ") {
        return true;
      }
      else {
        return false;
      }
    };

    function gameOver() {
      if (vertical() || horizontal() || diagonal()) {
        $("#result").fadeIn(600);
      }
    };




  createBoard();
  render();
  makeMoves();
});
