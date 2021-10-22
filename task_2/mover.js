let mover = {
    /**
     * Получает и отдает направление пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            let direction = parseInt(prompt(`Введите число (${availableDirections}), куда вы хотите переместиться, "Отмена" для выхода.`));

            if (isNaN(direction)) {
                return null;
            }

            if (!availableDirections.includes(direction)) {
                let errTxt = `Для перемещения необходимо ввести одно из чисел ${availableDirections}`;
                alert(errTxt);
                continue;
            }

            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction направлеие движения игрока
     * @returns {{x: int, y: int}} следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }

        return nextPosition;
    }
}