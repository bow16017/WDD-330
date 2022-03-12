var dataArray;
var api_url;


async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    var errorFilter = data.numFound;

    if (errorFilter > 0) {

        document.getElementById('name').textContent = data.docs["0"]["name"];

        let key = data.docs["0"]["key"];
        let api_url2 = 'https://openlibrary.org/authors/' + key + '/works.json?limit=100';

        async function getData2() {
            const response = await fetch(api_url2);
            const data = await response.json();

            var points = new Array(100);
            for (var i = 0; i < 100; i++) {
                points[i] = i;
            }

            for (var i = 0; i < points.length; i++) {
                dataArray = data.entries[i]["title"];

                const books = document.getElementById('books');
                const listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(data.entries[i]["title"]));
                books.appendChild(listItem);
            }
        }

        getData2();
        
    } else {
        document.getElementById('name').innerHTML = "That author does not exist in this database.";
    }
}

function collector() {
    let author = document.getElementById('author').value;
    let authorB = author.split(" ");
    
    if (authorB.length == 2) {
        api_url = 'https://openlibrary.org/search/authors.json?q=' + authorB[0] + '%20' + authorB[1];
        getData();
        
    } else {
        document.getElementById('name').innerHTML = "Enter the first and last name please, no more/less. No middle names or titles, initials are accepted (be sure to separate them with a period rather than a space).";
        return;
    }
}
