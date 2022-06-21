// игра в косточки (у кого больше выпадет очков при броске кубиков)
// основной движок игры
const gameRule = { kubes: 2, tries: 5 };
const firstPlayer = { name: `Alex`, points: 0, male: `male` };
const secondPlayer = { name: `Sveta`, points: 0, male: `female` };
const thirdPlayer = { name: `Igor`, points: 0, male: `male` };
const forthPlayer = { name: `Helga`, points: 0, male: `female` };
const playersArr = [firstPlayer, secondPlayer, thirdPlayer, forthPlayer];
const runGame = function (rules, gamers) {
  for (i = 1; i <= rules.tries; i++) {
    for (j = 0; j < gamers.length; j++) {
      let resultPlayer = generateRandom(rules.kubes, rules.kubes * 6);
      gamers[j].points += resultPlayer;
      let messageOfResult = `выбросил`;
      if (gamers[j].male === `female`) {
        messageOfResult += `а`;
      }
      console.log(
        `${gamers[j].name} ${messageOfResult} ${resultPlayer}, всего очков ${gamers[j].points}`
      );
    }
  }
  return gamers;
};
// найдем победителя
const getWinner = function (gamers) {
  let winners = [];
  let winner = gamers[0];
  for (i = 0; i < gamers.length; i++) {
    let currentPlayer = gamers[i];
    if (currentPlayer.points > winner.points) {
      winner = currentPlayer;
      winners = [currentPlayer];
    } else {
      if (currentPlayer.points === winner.points) {
        winners.push(currentPlayer);
      }
    }
  }
  return winners;
};

// объявим побебителя
const printWinner = function (winners) {
  let messageForWinner = `Победил`;
  if (winners.length <= 1) {
    if (winners[0].male === `female`) {
      messageForWinner += `а`;
    }
    console.log(
      `${messageForWinner} ${winners[0].name}, количество очков ${winners[0].points}`
    );
  } else {
    messageForWinner += `и`;
    for (i = 0; i < winners.length; i++) {
      messageForWinner += ` ${winners[i].name}, `;
    }
    messageForWinner += `количество очков каждого из победителей составило ${winners[1].points}`;
    console.log(messageForWinner);
    return;
  }
};

let resultOfRunGame = runGame(gameRule, playersArr);
let resutOfGetWinner = getWinner(playersArr);
console.log(resutOfGetWinner);
printWinner(resutOfGetWinner);

function generateRandom(min, max) {
  let rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
}
