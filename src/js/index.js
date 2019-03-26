import Search from './models/Search'

/**
 * - Search objet
 * -Current recipe object
 * Shopping list object
 * liked recipes
 */

const state = {}

const controleSearch = async () => {
    // 1) Get query from view
    const query = 'pizza' // TODO

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

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controleSearch()
})