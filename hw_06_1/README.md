React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Мировые часы
Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:

New York,
Moscow,
London,
Tokyo.
Watches

Общая механика:

Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки — setTimeout, setInterval и другие — должны вычищаться в соответствующем методе жизненного цикла.
Упрощения: если вам сложно реализовать механику со стрелками через css — см. transform и rotate(), то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС.

Подсказки:

Посмотреть текущий TimezoneOffset вы можете, используя объект Date.
Можете использовать библиотеку Moment.js.