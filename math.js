let mathpara = document.querySelector("#math");
let btn = document.querySelector("#btn");

let url = "http://numbersapi.com/random/math";

async function getnumbers() {
    try {
        let res = await axios.get(url);
        mathpara.innerText = res.data;
    }catch(e) {
        mathpara.innerText = "Error occured" + e;
    }
}

btn.addEventListener("click", () => {
    getnumbers();
});