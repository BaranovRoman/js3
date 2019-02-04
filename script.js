let money = +prompt("Ваш бюджет на месяц?", ""),
		time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget : money,
	expenses : {},
	optionalExpenses : {},
	income : [],
	timeData : time,
	savings : false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	if ( (typeof(a))==='string' && (typeof(a) != null ) && (typeof(a) != null)
		&& a !='' && b!= '' && a.length < 50 ) {
			appData.expenses[a] = b;
	} else {

	}
};

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30);
	alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel() {
		if(appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка');
	}	else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Произошла ошибка');
	}
};
detectLevel();

function chooseOptExpenses() {
	for (let i = 0; i <3; i++) {
		let a = 1,
				b = prompt("Статья необязательных расходов?");
		if ( (typeof(a))==='string' && (typeof(a) != null ) && (typeof(a) != null)
		&& a !='' && b!= '' && a.length < 50 ) {
			appData.optionalExpenses[a] = b;
		} else {

		}
	}
}
chooseOptExpenses();
