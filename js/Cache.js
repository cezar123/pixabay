class Cache {
    static get(key){
        let item = localStorage.getItem(key);
        if (!item) {
            return false;
        }
        return JSON.parse(item);
    }

    static set(key, val){
        localStorage.setItem(key, JSON.stringify(val));
    }

    static getKey(query, page){
        return `${query}_${page}`;
    }
}