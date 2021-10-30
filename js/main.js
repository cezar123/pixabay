const picSearch = function (e) {
    e.preventDefault();

    let query = document.getElementById('search-user-input').value.trim();
    if (!query) {
        return;
    }

    const Pixabay = new Pixabay();
    Pixabay.setQuery(query);
    let images = Pixabay.getImages();
};

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', picSearch);

}, false);



  
  
  