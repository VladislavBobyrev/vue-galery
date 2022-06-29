<details>
  <summary>Задача</summary>

    Приложение с использованием библиотек vue-router и vuex. С помощью vue-router создать две страницы:
    Страница “Авторизация”
    Страница "Галерея"
   
    Страница “Авторизация”
    На странице “Авторизация” должны быть - заголовок с текстом Авторизация и форма. Форма должна содержать одно поле и кнопку. Поле необходимо для ввода “пароля сайта”. Кнопка должна содержать текст - “Войти”. При нажатии кнопки необходимо:
    Проверить, что длина значения, введенного в поле, равна 4 символам. Если значение не соответствует условию отображать ошибку с текстом: “пароль сайта должен содержать 4 символа”.
    Если значение соответствует условию, делать HTTP запрос. Запрос можно реализовать через стандартные методы или подключив какую-либо библиотеку на ваш выбор. Запрос необходимо выполнить со следующими данными:
    URL - https://track-api.leadhit.io/client/test_auth
    метод - GET
    Headers:
    Api-Key: 5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo
    Leadhit-Site-Id: 5f8475902b0be670555f1bb3

    В случае получения ответа "message": "ok", сохранять в localStorage ключ - ‘auth-identificate’, со значением - ‘5f8475902b0be670555f1bb3’, после чего перенаправлять пользователя на страницу Галерея.

    Страница Галерея
    На странице Галерея необходимо отобразить:
    заголовок страницы - Галерея;
    заголовок галереи - “История изображений”;
    при создании галереи использовать grid сетку в ней будут находиться изображеня одинакового размера и изабражения с выделенным класом они будут занимать два ряда и два столбца

    При переходе на страницу “Аналитика” по ссылке, отслеживать наличие в localStorage ключа - ‘uth-identificate’, и в случае его отсутствия перенаправлять пользователя на страницу “Авторизация”.

</details>


<div align="left">

<!-- ![Lax 2.0 Gif](./README/readme.gif) -->


<!-- ## Проект сожержит

<details >
  <summary >Vue</summary>

  [Что это?](https://vuejs.org/)

    Прогрессивный JavaScript-фреймворк

</details>
<details >
  <summary >VueX</summary>
 
  [Что это?](https://vuex.vuejs.org/) 
 
    Централизованное хранилище данных для всех компонентов приложения.
    Входной точкой является файл store/index.js
</details>


<details >
  <summary > Vue router</summary>
 
  [Что это?](https://router.vuejs.org/) 

    Роутиг на страницах осуществляется через [<router-view>] без перезагрузки
    шапка сайта остается неизменной
</details>

<details >
  <summary >Yup</summary>
 
  [Что это?](https://www.npmjs.com/package/yup) 

    Yup — это конструктор схемы JavaScript для анализа и проверки значений.
</details>

<details >
  <summary >Vee-validate</summary>
 
  [Что это?](https://vee-validate.logaretm.com/v4/) 

    Form Validation for Vue.js
</details>

<details> 
  <summary>Scss</summary>
 
  [Что это?](https://sass-scss.ru/)  

    Конфигурации нужно изменять в файлах root_light.scss root_dark.scss   для разных цветовых тем.
  
  Для  автоматического комполирования файлов css необходимо запустить  
  Live Sass Compiler: 
   [Что это?](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)  


</details>

<details>
  <summary>Локальный сервер</summary>
 
  [Что это?](https://ru.wikipedia.org/wiki/Localhost) 
 
  По умолчанию [localhost:8080](http://localhost:8080).
</details>
-->

<!-- # 
## Для запуска потребуется
- этот репозиторий 
 ```
git clone https://github.com/VladislavBobyrev/
```
- node.js 
 
```
https://nodejs.org/en/
```

- браузер -->

#
## Команды

|                        |                       |
|------------------------|:----------------------|
| Установить зависимости | `npm i`               |
| Запустить локально     | `npm run serve`       |
| Собрать                | `npm run build`       |
| Запустить линтинг      | `npm run lint`       |
 
#
## Связвться со мной
<div align='center'> 
 
 ```
vladislavbobyrev@yandex.ru
```
 
 [![TELEGRAMM](https://img.shields.io/badge/telegramm-4285F4?style=for-the-badge&logo=read-the-docs&logoColor=white)](https://t.me/VladislavBobyrev)

 </div>
 
<div align="center">
  <h2>**ВНИМАНИЕ!**  Вся конфигурация является открытой. </h2>
 
**ВНИМАНИЕ!** На компьютере должны быть установлены программы `node` и `npm`.
Генерация  занимает много времени за счёт
установки `node_modules`. Необходимо дождаться окончания этого процесса.
 
</div>

