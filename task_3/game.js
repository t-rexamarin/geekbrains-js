let game = {
    // мне не очень нравится, что пришлось объявить ее так
    // сделано для того, чтобы была доступна в методах
    startGame: 'старт',
    stopGame: 'стоп',

    start() {
        let riddlesCopy = Array.prototype.slice.call(riddles);
        let gameScore = 0;
        let resumeGame;

        while (true) {
            let resultTxt = '';
            const currentRiddle = riddle.getRiddle(riddlesCopy);

            if (!currentRiddle) {
                resultTxt = 'Вы ответили на все вопросы.\n' +
                `Правильных ответов - ${gameScore}.`;
                alert(resultTxt);
                // return;

                do {
                    resumeGame = game.resumeGame();

                    if (resumeGame === game.startGame) {
                        game.start();
                    } else if (resumeGame === game.stopGame) {
                        resultTxt = 'Вы решили закончили игру.';
                        alert(resultTxt);
                        return;
                    } else {
                        resultTxt = `Вы должны ввести "${game.startGame}" или "${game.stopGame}".`;
                        alert(resultTxt);
                    }
                } while (resumeGame !== game.startGame || resumeGame !== game.stopGame);
            }

            let userInput;
            do {
                userInput = game.userInput(currentRiddle);

                // не придумал как избежать этого костыля
                // сделал это, чтобы не выводить при каждом выводе userInput
                if (userInput.length === 0) {
                    resultTxt = 'Вы отправили пустоту. Введите хоть что-нибудь!\n' +
                        `Если вы захотите досрочно закончить игру введите "${game.stopGame}".`;
                    alert(resultTxt);
                }
            } while (userInput.length === 0);

            // if (userInput === game.stopGame) {
            //     resultTxt = 'Вы досрочно закончили игру.'
            //     alert(resultTxt);
            //     return;
            // }

            if (userInput === currentRiddle.riddeleCorrectAnsw) {
                gameScore++;
                resultTxt = 'Вы дали правильный ответ! :)';
                alert(resultTxt);
            } else {
                resultTxt = 'Вы дали неверный ответ! :(';
                alert(resultTxt);
            }
        }
    },

    init () {
        let initTxt = 'Привет игрок!\n' +
            'Тебе будет предложен ряд вопросов с 4 вариантами ответа.\n' +
            'При выборе ответа, надо писать само слово, а не букву обозначающую его.\n' +
            `Если вы захотите досрочно закончить игру введите "${game.stopGame}".`;
        let gameStartTxt = 'Чтобы начать игру наберите game.start() и нажмите Enter.';

        console.log(initTxt);
        console.log(gameStartTxt);
    },

    userInput(currentRiddle) {
        let input = prompt(
            currentRiddle.riddleTxt
            + '\n'
            + currentRiddle.riddleAnswersTxt).toLowerCase();

        return input;
    },

    resumeGame() {
        let resumeGame = prompt(
            `Если хотите продолжить игру введите "${game.startGame}".\n` +
            `Если хотите закончить игру введите "${game.stopGame}".`);

        return resumeGame;
    }
}

game.init();