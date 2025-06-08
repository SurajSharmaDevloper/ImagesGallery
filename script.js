const SearchForm = document.getElementById('Search-Form');
const SearchBox = document.getElementById('Search-Box');
const SearchResult = document.getElementById('Search-result');
const ShowMoreBtn = document.getElementById('Show-More-Btn');

const ApiKey = 'elW4UTFe246iDqLuDi-Jl7iLttiJaDS9jWgDfOSuJ2E';

let keyWord = "";
let page = 1;

async function SearchImages() {
    keyWord = SearchBox.value;
    const Data = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord === '' ? 'random' : keyWord}&client_id=${ApiKey}&per_page=12`;
    const res = await fetch(Data);
    const data = await res.json();
    console.log(data)
    if(page === 1){
        SearchResult.innerHTML = '';
    }

    const result = data.results;
    result.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        SearchResult.appendChild(image)
    })
    ShowMoreBtn.style.display = 'block'
}
SearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    SearchImages();
});
ShowMoreBtn.addEventListener('click' , () => {
    page++;
    SearchImages();
})