
## Ссылка на приложение

[Ссылка на развёрнутое приложение](https://damir-nasirov.netlify.app/)

## Описание

Проект представляет собой мессенджер для обмена сообщений между пользователями. 
Пользователю предоставлен следующий функционал:

- регистрация;
- авторизация;
- создание чата;
- добавление пользователя в чат;
- удаления пользователя из чата;
- изменение аватара чата;
- отправка текстовых сообщений;
- просмотр своего профиля;
- изменение данных профиля;
- изменение аватара пользователя;
- изменение пароля пользователя. 

## Макет

[Ссылка на макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=0-1&mode=design&t=ILMgJ9UsOHfLikKK-0)

## Страницы приложения 

Реализованные страницы:

- [Авторизаци](https://damir-nasirov.netlify.app/) - Старница авторизации /
- [Регистрация](https://damir-nasirov.netlify.app/sign-in) - Страница регистрации /sign-up
- [Чаты](https://damir-nasirov.netlify.app/messenger) - Страница чатов /messanger
- [Страница не найдена](https://damir-nasirov.netlify.app/not-found) - Страница 404 /not-found
- [Ошибка сервера](https://damir-nasirov.netlify.app/server-error) - Страница 5ХХ /server-error
- [Профиль](https://damir-nasirov.netlify.app/profile)  - Страница пользователя /profile

## Управление проектом

### Установка

- `npm install` или `yarn` - Установка пакетов зависимостей 

### Сборка

- `npm run build` или `yarn build` - Компиляция и сборка проекта с помощью vite (Необходима для запуска `preview`)
- `npm run husky:install` или `yarn husky:install` - Установка исполнемых фалов для работы с pre-commit

### Запуск

- `npm run dev` или `yarn dev` - Запуск приложения в dev режиме
- `npm run preview` или `yarn preview` - Запуск приложения в собранном виде


### Линтирование
- `npm run lint:js`  или `yarn lint:js` — Проверка кода, написанного на js, ts или json, который будет исполнен,
- `npm run lint:style`  или `yarn lint:style` — Проверка кода, написанного scss,
- `npm run lint` или  `yarn lint` — сборка стабильной версии. Общая команда для последовательного запуска линтирования


### Важно

Информация для ревьювера.
У меня не проходят тесты на pre-commit, а именно:
```
@test "Check pre-commit hook installed" {
    if [[ "$SPRINT" != "sprint_4" ]]; then
        skip
    fi

    run ls -1 `git rev-parse --git-path hooks`
    [ "$status" -eq 0 ] || fatal "$output" # list hooks
    [[ "$output" =~ (pre-commit$) ]] || fatal "$output" # Check pre-commit hook
}
```

Насколько я понял, то команда `ls -1` используется для вывода содержимого директории `git rev-parse --git-path hooks` в формате списка и далее проверяет по регулярному `(pre-commit$)` выражению наличие `pre-commit`.

В [данном PR](https://github.com/Damir-prg/middle.messenger.praktikum.yandex/pull/9) я пытался вывести все файлы хуков husky, убрав .gitignore, но даже так тест не отрабатывал.

В "Пачке" уже был подобный случай и там, наставник Николай Елисеев, посоветовал студенту сдать спринт так, без этого теста, оставив сообщение для ревьювера.

Локально тесты и pre-commit отрабатывают. Pre-commit так же проверял как во встроенном инструменте VS Code, так и локально через терминал.

