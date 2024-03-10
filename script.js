// let zero=document.querySelector(".navlink")


// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// let zero=document.querySelector(".navlink")
// function task(a){
//     return a.innerHTML
// }
// console.log(task(zero));
// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let result =document.querySelectorAll(".navlink")
// function task(a){
//     return Array.from(a).map(el=>el.innerHTML)
// }
// console.log(task(result));
// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом navlinkitem`
// let result =document.querySelectorAll(".navlinkitem")
// function task(a) {
//     return Array.from(a).map(el=>el.innerHTML)
    
// }
// console.log(task(result));

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом navlinkitem
// const atribute =document.querySelectorAll(".navlinkitem")
// function task(a){
// return Array.from(a).map(el=>el.getAttribute('class'))
// }   
// console.log(task(atribute));                                            
// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// const atribute =document.querySelectorAll(".data-link")
// function task(a){
// return Array.from(a).map(el=>el.getAttribute('class'))
// }   
// console.log(task(atribute));                                            
// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.
// Например
// <a class="nav__link  first" data-link="1">first</a>  
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>  
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.
// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a> 
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link fist" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть ${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {  
  
// })  
// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach.
// Что бы удалить элемент из DOM - используйте метод .remove()

// yourElementsArray.forEach((element) => {  
  
// })