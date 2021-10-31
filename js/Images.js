class Images{
    async get(e){
        let query = document.getElementById('search-user-input').value.trim();
        if (!query) {
            return;
        }

        let page = 1;
        if (e.target.dataset.page) {
            page = e.target.dataset.page;
        }

        return await pbApi.setQuery(query).setPage(page).get();
    }

    render(imagesData){
        let html = imagesData
            .map(img => `<img src="${img.previewURL}" alt="${img.tags}" class="img-responsive img-thumbnail" />`)
            .reduce((prev, curr) => prev + curr);

        document.getElementById('images').innerHTML = html;
        document.getElementById('pagination').style.visibility = 'visible';
    }
}