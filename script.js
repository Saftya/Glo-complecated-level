let lang = 'ru' && 'eng';

switch (true) {
    case (lang = 'ru'):
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break
    case (lang = 'eng'):
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break
    default:
        console.log('Все неверно');
}


