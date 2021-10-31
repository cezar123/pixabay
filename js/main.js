const picSearch = async function (e) {
    e.preventDefault();

    let query = document.getElementById('search-user-input').value.trim();
    if (!query) {
        return;
    }

    const pbApi = new Pixabay();
    pbApi.setQuery(query);
    let images = await pbApi.getImages();
    const html = images
        .map(img => `<img src="${img.previewURL}" alt="${img.tags}" class="img-responsive img-thumbnail" />`)
        .reduce((prev, curr) => prev + curr);

    document.getElementById('images').innerHTML = html;
    document.getElementById('pagination').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', picSearch);

    // let pagination = document.getElementsByClassName('paginate');
    // pagination.map(btn => btn.addEventListener('click', picSearch));
}, false);



  
  
  