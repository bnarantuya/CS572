

const postsPromise = fetch('https://randomuser.me/api');

function btn1() {
    postsPromise.then(data => data.json())
    .then(data=> {console.log(data.results[0].name); console.log(data.results[0].location);})
    .catch((err) =>{console.log(err); })
}


function btn2() {
    async function getData() {
        try {
            console.log("Before await");
            let data = await prom();
        }
        catch (err) {

        }
    }
}

function btn3() {

}

function prom() {
    return new Promise((resolve, reject) => {

    });
}