class Pixabay {
    constructor() {
        this.apiKey = '24010752-9f820942bf2433e4b0b2c22b0';
        this.baseUrl = 'https://pixabay.com/api/';
        this.httpService = axios;
        this.cache = Cache;
        this.page = 1;
        this.query = null;
    }

    setQuery(query){
        this.query = encodeURIComponent(query);
    }

    setPage(page){
        this.page = page;
    }

    async getImages(){
        if (!this.query) {
            throw new Error('Set query first');
        }

        let cacheKey = this.cache.getKey(this.query, this.page);

        // check cache
        let pics = this.cache.get(cacheKey);
        if (pics) {
            return pics;
        }

        try{
            const response = await this.httpService.get(`${this.baseUrl}?key=${this.apiKey}&q=${this.query}&page=${page}`);
            console.log('response: ', response);
            if (response.status !== 200){
                console.error(response.data);
            }

            // save to cache
            this.cache.set(cacheKey, response.data.hits);
        } catch (e) {
            console.error(e);
        }
    }

}



class Cache {
    static get(key){
        return localStorage.getItem(key);
    }

    static set(key, val){
        localStorage.setItem(key, val);
    }

    static getKey(query, page){
        return `${query}_${page}`;
    }
}