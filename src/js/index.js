import Search from './models/Search'
import Recipe from './models/Recipe'
import * as searchView from './views/searchView'

import cors from 'cors'
cors()

import { elements, renderLoader, clearLoader } from './views/base'

/**
 * - Search objet
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {}

const controleSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput()

    if (query) {
        // 2 New search object and add to state
        state.search = new Search(query)

        // 3 Prepare UI for results
        searchView.clearInput()
        searchView.clearResults()
        renderLoader(elements.searchRes)


        // 4 Search for recipes
        await state.search.getResults()

        // 5 render results on UI
        clearLoader()
        searchView.renderResults(state.search.result)
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault()
    controleSearch()
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10)
        searchView.clearResults()
        searchView.renderResults(state.search.result, goToPage)
        console.log(btn)
    }
})

/*
    Controller Recipe
*/

const r = new Recipe(35477)
console.log(r.getRecipe())
console.log(r)
