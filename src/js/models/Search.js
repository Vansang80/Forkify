import axios from 'axios'

import cors from 'cors'
cors()

export default class Search{
    constructor(query) {
        this.query = query
    }

    async getResults() {
        const key = '00a31211151627bc4cbbe1dcbee2cb0d'
        
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = res.data.recipes
        
        } catch(error) {
            alert(error)
        }
    }
}


