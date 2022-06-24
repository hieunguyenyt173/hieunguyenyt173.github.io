const imageEl = document.getElementById("image");
const btn = document.getElementById("btn");
const breedList = document.getElementById("breed-list");


const getBreedList = async () => {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    renderBreedList(res.data.message);
}
// Render Breed List
const renderBreedList = (breeds) => {
    breedList.innerHTML = "";
    let html = "";
    let keys = Object.keys(breeds);
    keys.forEach(key => {
        html += `<option>${key}</option>`
    })
    breedList.innerHTML = html;
}
getBreedList();

btn.addEventListener("click", async () => {
    let res1 = await axios.get("https://dog.ceo/api/breed/hound/images");
    imageEl.src = res1.data.message;
})