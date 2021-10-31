class Pixabay {
    constructor() {
        this.apiKey = '24010752-9f820942bf2433e4b0b2c22b0';
        this.baseUrl = 'https://pixabay.com/api/';
        this.cache = Cache;
        this.page = 1;
        this.query = null;
        this.per_page = 50;
        this.image_type = 'photo';
        this.orientation = 'horizontal';

        this.httpService = axios.create();
        this.httpService.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    handleSuccess(response) {
        if (!response.data.total) {
            this.redirectTo('noHits.html');
        }
        console.log('handleSuccess: ', response);
        return response;
    }

    handleError(error) {
        switch (error.response.status) {
            case 401:
                this.redirectTo('index.html');
                break;
            case 404:
                this.redirectTo('404.html');
                break;
            default:
                this.redirectTo('500.html');
                break;
        }
        return Promise.reject(error)
    }

    redirectTo(path) {
        document.location = path;
    }

    setQuery(query) {
        this.query = encodeURIComponent(query);
    }

    setPage(page) {
        this.page = page;
    }

    async getImages() {
        if (!this.query) {
            throw new Error('Set query first');
        }

        let cacheKey = this.cache.getKey(this.query, this.page);

        // check cache
        let pics = this.cache.get(cacheKey);
        if (pics) {
            return pics;
        }

        try {
            const url = `${this.baseUrl}?key=${this.apiKey}&q=${this.query}&page=${this.page}&per_page=${this.per_page}&image_type=${this.image_type}&orientation=${this.orientation}`;
            const response = await this.httpService.get(url);
            console.log('response: ', response);

            // save to cache
            this.cache.set(cacheKey, response.data.hits);

            return response.data.hits;
        } catch (e) {
            console.error(e);
        }

    }

}