/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
//console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
//console.log('list', list);
const list1 = list[0];
const list2 = list[1];


/* Этап 3. Запись данных в результирующий объект */
const result = {
  list : [
    { name: list1.name, age: Number(list1.age), prof: list1.prof },
    { name: list2.name, age: Number(list2.age), prof: list2.prof },
  ]
};
console.log(result);