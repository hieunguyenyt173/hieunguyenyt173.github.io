const btn = document.getElementById("btn");
const breedList = document.getElementById("breed-list");
const subBreedList = document.querySelector(".sub-breeds-list");
const imageEl = document.getElementById("image");
const getBreedList = async () => {
    try {
        res = await axios.get("https://dog.ceo/api/breeds/list/all")
        renderBreedList(res.data.message);
    } catch (error) {
       console.log(error) 
    }
    
    
}
// Render Breed List
const renderBreedList = (breeds) => {
    breedList.innerHTML = "";
    let html = "";
    let keys = Object.keys(breeds);
    keys.forEach(key => {
        html += `<option value="${key}">${key}</option>`
    })
    breedList.innerHTML = html;
}
getBreedList();
// Bấm nút render subBreeds
btn.addEventListener("click", async () => {
    try {
        let dataList = res.data.message;
     value = breedList.value;
    console.log(dataList[value]);
    if(dataList[value].length > 0) {
         res1 = await axios.get(`https://dog.ceo/api/breed/${value}/list`)
        renderSubBreed(res1.data.message);
    }
    else {
        subBreedList.innerHTML = "<li>Không có sub breed</li>";
    }    
    } catch (error) {
        console.log(error);
    }
    
})

// Render subBreeds list

const renderSubBreed = async (subBreeds) => {
        try {
            subBreedList.innerHTML = "";
        let html1 = "";
        subBreeds.forEach(e => {
        //    res2 = await axios.get(`https://dog.ceo/api/breed/${value}/${e}/images/random`)
            html1 += `<li><a href="#" onclick="randomImage()">${e}</a></li>`;
              
        })
        subBreedList.innerHTML = html1;
        } catch (error) {
            console.log(error)
        }
        
           
}
// Hiển thị hình ảnh random
const randomImage =  () => {
   
    // imageEl.src = res2.data.message;
}