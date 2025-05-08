interface Post {
    id: number;
    title: string;
    body: string;
}

import axios from "axios";

async function fetchPosts() {
    const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
}

fetchPosts().then((posts) => {
    console.log(posts[0].title);
    
});


// Задание 8. HTTP-запросы (файл  task-8.ts)

// Функция fetchPosts делает GET - запрос API и возвращает список постов.

// Задание:

// Установи библиотеку axios командой npm i axios
// Создай интерфейс Post, описывающий объект поста со следующими полями:
// id: число
// title: строка
// body: строка
// 3. Типизируй axios.get, чтобы указать, что API возвращает массив постов.
