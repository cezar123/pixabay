class Cache {
    static get(key){
        let item = localStorage.getItem(key);
        if (!item) {
            return false;
        }

        // todo - check timestamp

        return JSON.parse(item);
    }

    static set(key, val){
        // todo - add timestamp
        localStorage.setItem(key, JSON.stringify(val));
    }

    static getKey(query, page){
        return `${query}_${page}`;
    }
}