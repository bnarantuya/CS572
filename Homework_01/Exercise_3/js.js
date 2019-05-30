

const postsPromise = fetch('https://randomuser.me/api');

const { Observable } = rxjs;

function btn1() {
    postsPromise.then(data => data.json())
        .then(data => { console.log(data.results[0].name); console.log(data.results[0].location); })
        .catch((err) => { console.log(err); })
}

function btn2() {
    async function asx() {
        try {
            console.log("before async");
            let data = await prom();
            console.log(data.results[0].name); console.log(data.results[0].location);
        }
        catch (err) {
            console.log(err);
        }
    }
    asx();
    console.log("Later Async");
}

function btn3() {
    const obs$ = Observable.create(function (observer) {
        observer.next("next");
        setTimeout(() => {
            observer.complete("");
        }, 3000);
    });

    const subsription = obs$.subscribe(
        function (x) {
            console.log(`value: ${x}`);
        },
        function (rrr) {
            console.err(err);
        },
        function () {
            console.info(`DONE`);
        }
    );
}

function prom() {
    return new Promise(function (resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        let link = 'https://randomuser.me/api';
        let data = [];
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                data = JSON.parse(xmlHttp.responseText);
                resolve(data);
            }
        }
        xmlHttp.open("GET", link);
        xmlHttp.send();
    });
}