let game = {
    // запускает игру
    run() {
        while (true) {
            // получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                let gameEndTxt = 'Игра окончена';

                console.log(gameEndTxt);
                return;
            }

            const nextPoint = mover.getNextPosition(direction);

            if (nextPoint.x < 0 || nextPoint.x > config.rowsCount) {
                let errTxt = 'Вы уперлись в стену по оси X.';

                renderer.clear();
                console.log(errTxt);
                renderer.render();
            } else if (nextPoint.y < 0 || nextPoint.y > config.colsCount) {
                let errTxt = 'Вы уперлись в стену по оси Y.';

                renderer.clear();
                console.log(errTxt);
                renderer.render();
            } else {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    // выполняется при открытии страницы
    init() {
        let initTxt = 'Ваше положение на поле в виде о.';
        let gameRunTxt = 'Чтобы начать игру наберите game.run() и нажмите Enter.';

        console.log(initTxt);
        renderer.render();
        console.log(gameRunTxt);
    }
};

game.init();