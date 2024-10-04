let jokepara = document.querySelector("#joke");
let btn = document.querySelector("#btn");

let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getjokes() {
    try {
        let res = await axios.get(url);
        jokepara.innerText = res.data.setup + res.data.delivery || res.data.joke;
    } catch(e) {
        jokepara.innerText = "Error occured" + e;
    }
}

btn.addEventListener("click", () => {
    getjokes();
});