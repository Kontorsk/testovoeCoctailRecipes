# testovoeDragAndDrop

## Task info
Задача:
Реализовать приложение с выводом данных полученных по API.
Пример схематичного интерфейса приложения изображен в app_example.png

Исходные данные:
- Всю необходимую информацию запрашиваем по GET-запросу: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>
- Доступные cocktail_code: margarita, mojito, a1, kir

Функциональные требования:
- Использовать менеджер состояния для сохранения данных и исключения дублирующих запросов
- Список кодов (cocktail_code) использовать для названия пунктов меню и формирования url-страниц
- Каждый пункт меню ведет на страницу со своим описанием
- Активный пункт меню должен быть выделен
- По умолчанию первый пункт меню, является главной страницей и использует его же урл
- Переход на url-адрес "/", должен отправлять пользователя на url-первого пункта меню
- При переходе на несуществующую страницу, показать 404 ошибку в произвольной форме
- Резиновая верстка интерфейса. Максимальная ширина 1024px, минимальная 360px
- lazy-loading для загрузки изображений

Стек:
- vue 3 + vuex
- webpack
- eslint
- html 5, css 3
- Адаптивная верстка 
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
