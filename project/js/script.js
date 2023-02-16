/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд2",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelector('.promo__adv'),
        promoPic = promoAdv.querySelectorAll('img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('.add'),
        formInput = formAdd.querySelector('.adding__input'),
        formFavorite = formAdd.querySelector('input[type=checkbox]'),
        formSubmit = formAdd.querySelector('button');


    formAdd.addEventListener('submit', function (e) {
        e.preventDefault();
        let formInputValue = formInput.value;
        if (formInputValue) {
            if (formInputValue.length > 21) {

                formInputValue = `${formInputValue.substring(0, 22)}...`;
            }
            movieDB.movies.push(formInputValue);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        if (formFavorite.checked) {
            console.log('Добавляется любимый фильм')
        }


        formAdd.reset();
    })
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    deleteAdv(promoPic);

    const makeChanges = () => {
        promoGenre.textContent = "Драма";
        promoBg.style.background = "url(img/bg.jpg)";
    }
    makeChanges();

    const sortArr = (data) => {
        data.sort();
    }
    sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerText = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }
    createMovieList(movieDB.movies, movieList);
})