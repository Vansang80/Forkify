import { elements } from './base'

export const getInput = () => elements.searchInput.value

<<<<<<< HEAD
export const renderResult = recipes => {
    recipes.forEach()
=======
const renderli = recipe => {
  const makup = `
  <li>
    <a class="results__link results__link--active" href="#23456">
        <figure class="results__fig">
            <img src="img/test-1.jpg" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">Pasta with Tomato ...</h4>
            <p class="results__author">The Pioneer Woman</p>
        </div>
    </a>
  </li>
  `

  elements.searList.insertAdjacentHTML('beforeend', makup)
}

export const renderResult = recipes => {
  recipes.forEach(renderli)
>>>>>>> e280e7979773d9c6d59330a3622ca71453050446
}