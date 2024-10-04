let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");

let url = "https://catfact.ninja/fact";

async function getfacts() {
    try {
        let res = await axios.get(url);
        factPara.innerText = res.data.fact;
    } catch(e) {
        factPara.innerText = "Error occured." + e;
    }
}

btn.addEventListener("click", () => {
    getfacts();
});