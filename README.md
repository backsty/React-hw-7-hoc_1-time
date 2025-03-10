Форматирование даты публикации

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)](https://backsty.github.io/React-hw-7-hoc_1-time/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-purple)](https://vitejs.dev/)

Есть страница, содержащая список видеозаписей. 
У каждого блока есть дата публикации. 

![Relative Time](./assets/time.png)

В данный момент выводится просто текущее значение. Пример: `2017-09-01 14:15:10`. 
Решено изменять представление даты следующим образом в зависимости от его значения:
`12 минут назад`, если прошло меньше часа, `5 часов назад`, если прошло больше часа, `X дней назад`, если больше суток.

## Реализация

Используя HOC, обернуть `DateTime` в компонент `DateTimePretty` так, чтобы он преобразовывал дату в нужный вид.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.

Для работы с датой и временем можете воспользоваться библиотекой Moment.js.
