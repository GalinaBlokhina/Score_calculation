## Данный проект выявляет студента с наиболее высоким баллом, сдавшего работу раньше всех.

# Рассмотрены 4 ситуации, для каждой из которых имеется набор тестовых данных:
- есть один студент-победитель с максимальным баллом и наиболее ранним сроком сдачи,
- есть несколько студентов, получивших одинаково высокие баллы, но победителем признается студент, сдавший работу  раньше других,
- есть несколько студентов, получивших одинаково высокие баллы и сдавшие работу в один день. Победителями признаются все из них,
- все студенты в группе получили 0 баллов за свои работы. В этом случае победителей нет.

# Имеющиеся в проекте тесты покрывают 100% веток и строк
(т.е. протестирована каждый из описанных вариантов). Применены параметризованные тесты. В качестве параметров выступают массивы тестовых данных (имя студента, балл, дата сдачи работы) и ожидаемые значения (имена победителей либо сообщение об их отсутствии)

# Для запуска проекта необходимо сделать следующие шаги:
его инициализировать командой npm init
подключить jest командой npm i jest
в файле package json при этом установится зависимость в разделе devDependencies (появится строчка jest)
установить babel-plugin-istanbul  командой npm i babel-plugin-istanbul
в файле package json при этом установится зависимость в разделе dependencies
запустить тесты командой npm run test
расчет покрытия тестов запускается командой npx jest --coverage
