import React from "react";
import { useState, useEffect } from "react";
import "./home-page.css";
import { requestBooks } from "../../api";
import {
  textInput,
  categoriesValue,
  sortingValue,
} from "../../components/header";
import { BookItem } from "../../components/book-item";
let numberOfBooks = React.createRef();
let books = [
  {
    authors: ["Чиннатхамби Кирупа"],
    categories: ["Computers"],
    description:
      "JavaScript еще никогда не был так прост! Вы узнаете все возможности языка программирования без общих фраз и неясных терминов. Подробные примеры, иллюстрации и схемы будут понятны даже новичку. Легкая подача информации и живой юмор автора превратят нудное заучивание в занимательную практику по написанию кода. Дойдя до последней главы, вы настолько прокачаете свои навыки, что сможете решить практически любую задачу, будь то простое перемещение элементов на странице или даже собственная браузерная игра.",
    id: "jHswEAAAQBAJ",
    img: "http://books.google.com/books/content?id=jHswEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "JavaScript с нуля",
  },
  {
    authors: ["Хавербеке Марейн"],
    categories: ["Computers"],
    description:
      "«Выразительный JavaScript» позволит глубоко погрузиться в тему, научиться писать красивый и эффективный код. Вы познакомитесь с синтаксисом, стрелочными и асинхронными функциями, итератором, шаблонными строками и блочной областью видимости. Марейн Хавербеке – практик. Получайте опыт и изучайте язык на множестве примеров, выполняя упражнения и учебные проекты. Сначала вы познакомитесь со структурой языка JavaScript, управляющими структурами, функциями и структурами данных, затем изучите обработку ошибок и исправление багов, модульность и асинхронное программирование, после чего перейдете к программированию браузеров.",
    id: "yK6tDwAAQBAJ",
    img: "http://books.google.com/books/content?id=yK6tDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title:
      "Выразительный JavaScript. Современное веб-программирование. 3-е издание",
  },
  {
    authors: ["Фримен Эрик", "Робсон Элизабет"],
    categories: ["Computers"],
    description:
      "Вы готовы сделать шаг вперед в веб-программировании и перейти от верстки в HTML и CSS к созданию полноценных динамических страниц? Тогда пришло время познакомиться с самым «горячим» языком программирования — JavaScript! С помощью этой книги вы узнаете все о языке JavaScript — от переменных до циклов. Вы поймете, почему разные браузеры по-разному реагируют на код и как написать универсальный код, поддерживаемый всеми браузерами. Вам станет ясно, почему с кодом JavaScript никогда не придется беспокоиться о перегруженности страниц и ошибках передачи данных. Не пугайтесь, даже если ранее вы не написали ни одной строчки кода, — благодаря уникальному формату подачи материала эта книга с легкостью проведет вас по всему пути обучения: от написания простейшего скрипта до создания сложных веб-проектов, которые будут работать во всех современных браузерах. Особенностью этого издания является уникальный способ подачи материала, выделяющий серию «Head First» издательства O'Reilly в ряду множества скучных книг, посвященных программированию.",
    id: "3FBbDwAAQBAJ",
    img: "http://books.google.com/books/content?id=3FBbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Изучаем программирование на JavaScript",
  },
  {
    authors: undefined,
    categories: ["Computers"],
    description: undefined,
    id: "gNm-jkNDXCwC",
    img: undefined,
    title: "JavaScript. Библия пользователя, 5-е издание",
  },
  {
    authors: ["David Herman"],
    categories: ["Computers"],
    description:
      "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
    id: "nBuA0hmspdMC",
    img: "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Effective JavaScript",
  },
  {
    authors: undefined,
    categories: ["Computers"],
    description: undefined,
    id: "puWhbet6IiQC",
    img: "http://books.google.com/books/content?id=puWhbet6IiQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "JavaScript. Учебник начального уровня.",
  },
  {
    authors: ["Дронов Владимир Александрович"],
    categories: ["Computers"],
    description:
      "Книга посвящена разработке мобильных приложений для Android на языке Kotlin. Рассматриваются основные элементы языка, такие как функции и классы, приемы объектно-ориентированного программирования. Рассказывается о разработке микросервисов RESTful для приложений Android, о методах реализации шаблона архитектуры MVC. Описаны способы централизации, преобразования и хранения данных с применением Logstash, защиты приложений с использованием Spring Security. Изучается управление зависимостями с помощью Kotlin. Уделено внимание развертыванию микроcервисов Kotlin для AWS и приложений Android в Play Store. Файлы для книги можно скачать по ссылке ftp://ftp.bhv.ru/9785977565899.zip",
    id: "ldUHEAAAQBAJ",
    img: "http://books.google.com/books/content?id=ldUHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "JavaScript. 20 уроков для начинающих",
  },
];

export const HomePage = () => {
  // let [a, setA] = useState([1, 1, 1, 1]);
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="found" ref={numberOfBooks}></div>
        <div className="books-wrapper">
          {books.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
//полностью убрать эту функцию, забирать параметры из state и помещать в state
export function showInput() {
  let promise = new Promise((resolve, reject) => {
    let category =
      categoriesValue.current.value !== "all"
        ? "+subject:" + categoriesValue.current.value
        : "";
    requestBooks(
      textInput.current.value,
      category,
      sortingValue.current.value,
      0,
      resolve
    );
  });
  promise.then(
    (array) => {
      numberOfBooks.current.innerHTML = "Found: " + array.totalItems;
      //    setA = array.array;
    },
    (error) => {
      alert("Rejected: " + error);
    }
  );
}
