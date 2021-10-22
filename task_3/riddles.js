let riddles = [
    {
        riddle: '"Не отыскать её корней, верхушка выше тополей. Всё круче вверх она идёт - а не растёт.',
        answers: ['нога', 'гора', 'береза', 'солнце'],
        correct_answer: 'гора'
    },
    {
        riddle: 'Тридцать белых коней на двух красных холмах - разбегутся, сшибутся и снова затихнут впотьмах.',
        answers: ['кони', 'волны', 'зубы', 'птицы'],
        correct_answer: 'зубы'},
    {
        riddle:'Без голоса кричит, без крыльев - а летает, и безо рта свистит, и без зубов кусает.',
        answers: ['ветер', 'беззубый волк', 'свистеть безо рта?', 'немой певец'],
        correct_answer: 'ветер'},
    {
        riddle: 'Без замка, без крышки сделан сундучок, а внутри хранится золота кусок.',
        answers: ['сыр', 'золотая рыбка', 'ключи', 'яйца'],
        correct_answer: 'яйца'},
    {
        riddle: 'Что у меня в кармане?',
        answers: ['фантик', 'ничего', 'кольцо', 'монетка'],
        correct_answer: 'кольцо'}
];

let riddle = {
    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @returns {{riddleTxt: string, riddleAnswersTxt: string, riddeleCorrectAnsw:string}} следующая позиция игрока
     */
    getRiddle(riddlesArr) {
        if (!riddlesArr.length) {
            return 0;
        }

        let oneRiddle = this.renderRiddle(riddlesArr.shift());

        return oneRiddle;
    },

    renderRiddle(riddle) {
        let renderedRiddle = {
            riddleTxt: riddle.riddle,
            riddleAnswersTxt: '',
            riddeleCorrectAnsw: riddle.correct_answer
        };

        for (let i = 0; i < riddle.answers.length; i++) {
            let unicodeChar =  String.fromCodePoint(parseInt(`043${i}`, 16));
            renderedRiddle.riddleAnswersTxt += `${unicodeChar}) ` + riddle.answers[i] + '\n';
        }

        return renderedRiddle;
    }
}