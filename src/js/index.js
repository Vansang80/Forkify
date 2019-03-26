import Search from './models/Search'
import * as searchView from './views/searchView'

import { elements } from './views/base'

/**
 * - Search objet
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {}

const controleSearch = async () => {
    // 1) Get query from view
    const query = 'pizza'
    console.log(query)

    if (query) {
        // 2 New search object and add to state
        state.search = new Search(query)

        // 3 Prepare UI for results

        // 4 Search for recipes
        await state.search.getResults()

        // 5 render results on UI
        console.log(state.search.result)
    }

}

elements.searchForm.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controleSearch()
    console.log(elements.searchForm)
})