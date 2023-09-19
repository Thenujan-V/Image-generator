const accesskey = "0Vn2hH0N5Z9RlI3duk3OnRMcXogXSxUWwSkOVQdWeYg"
const searchForm = document.getElementById('searchform')
const searchBox = document.querySelector('.input')
const searchResult = document.getElementById('searchresult')
const showMoreBtn = document.querySelector('.showmore')  

let keyword = '';
let page = 1;

async function serachImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = '';
    }

    const results = data.results;
    results.map((result) => {
        let image = document.createElement('img');
        image.src = result.urls.small;
        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
}
searchForm.addEventListener('keyup', (e) => {
    e.preventDefault();
    page = 1;
    serachImages();
})
showMoreBtn.addEventListener("click", () => {
    page++;
    serachImages();
})