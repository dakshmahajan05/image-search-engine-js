const searchfrom=document.getElementById('search_form')
const searchbox=document.getElementById('search_box')
const searchresult=document.getElementById('search_result')
const showmorebtn=document.getElementById('show_more_btn')


const acceskey="YuC2Qmb41KndH9PvS10pgay31BJlkXb6IDiBDJs5oEk"

const api="https://api.unsplash.com/search/photos?page=1&query=office"

let keyword="";
let page=1;

async function searchimages() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`

    const response=await fetch(url);
    const data=await response.json();
    console.log(data);

        if(page==1){
            searchresult.innerHTML="";
        }
    const results=data.results;
    results.map((result)=>{

        const image=document.createElement("img");
        image.src=result.urls.small;

        const imagelink=document.createElement("a")
        imagelink.href=result.links.html;

        imagelink.target="_blank"

        imagelink.appendChild(image);

        searchresult.appendChild(imagelink);
    })
    showmorebtn.style.display="block";
    
}
showmorebtn.addEventListener("click",()=>{
    page++;
    searchimages();
})
searchfrom.addEventListener("submit",(e)=>{
e.preventDefault();
page=1;
searchimages();
})

