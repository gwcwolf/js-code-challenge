// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

class Datasource{

    Datasource (method, path){
        method = this.method;
        path = this.path;
    }

    getPrices = () => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, path);

        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
        }
        xhr.send();

        return data;
    }
}

let ds = new Datasource('GET', 'https://static.ngnrs.io/test/prices');
ds.getPrices()
.then(prices => {
    prices.forEach(price => {
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
}).catch(error => {
    console.err(error);
});

let mid = () => Number(((price.buy + price.sell)/2)/100).toFixed(2);

let quote = () => price.pair.slice(3,6);
