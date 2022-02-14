// let message = "Hello my favorite";

// // elements.onclick = function () {
// //     alert (message)
// // }

// let messageFunction =  function() {
//     alert(message)
// }

// elements.addEventListener('contextmenu', messageFunction);
// elements.addEventListener('click', messageFunction);
// elements.addEventListener('mouseover', messageFunction);

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

let question = prompt('Введите обязательную статью расходов в этом месяце');
let quesionHow = prompt('Во сколько обойдется?');
let question1 = prompt('Введите обязательную статью расходов в этом месяце');
let quesionHow1 = prompt('Во сколько обойдется?');
expenses: {
    question : quesionHow
}
appData.expenses.question = quesionHow;
appData.expenses.question1 = quesionHow1;

console.log(appData.budget / 30);