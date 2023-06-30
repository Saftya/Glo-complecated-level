// let lang = 'ru' && 'eng';

function isString(lang) {
if (lang === 'ru') {
    return 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
}
else 
{ return 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
}
}
console.log(isString('eng'));

function isString(lang) {
    switch (true) {
    case (lang === 'ru'):
            return 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
        break
    case (lang === 'eng'):
            return 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
    default:
        return 'Язык не определен'
}
}
console.log(isString('cad'));

let lang = {
    a: 'ru',
    b: 'eng',
    c: 'не удалось определить',
};
console.log(lang.b);



let namePerson = 'Masha';

(namePerson === 'Artem') ? console.log('director') : (namePerson === 'Alexandr') ? console.log('tutor') : console.log('student')



function example() {
return (namePerson === 'Artem') ? 'director'
        : (namePerson === 'Alexandr') ? 'tutor'
        : 'student';
}


console.log(example());


