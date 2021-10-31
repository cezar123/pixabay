const pbApi = new Pixabay();
const pbImages = new Images();


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', pbSearch);

    const pages = document.querySelectorAll('.page');
    for (let page of pages) {
        page.addEventListener('click', pbSearch)
    }
});

const pbSearch = async function (e) {
    e.preventDefault();
    let imagesData = await pbImages.get(e);
    pbImages.render(imagesData);
    return false;
};



  
  
  