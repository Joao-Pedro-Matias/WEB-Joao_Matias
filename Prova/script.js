document.getElementById("order").innerHTML = "Crescente";

$.getJSON("https://jsonplaceholder.typicode.com/posts", (response) => {

    document.getElementById("total-posts").innerHTML = response.length;

    for (let i = 0; i <= response.length; i++) {
        document.getElementById("posts").innerHTML +=
            `
            <div class="card m-3 p-3 col-12 col-md-4 col-lg-3">
                <div class="card-body">
                    <h5 class="card-title fs-5 text-center">${response[i].title}</h5>
                    <p class="card-text fs-6 mt-4" style="text-align: justify"> ${response[i].body}</p>
                </div>
            </div>
        `;
    }
}
);

function order(ord) {

    if (ord == 1) {
        document.getElementById("order").innerHTML = "Crescente";
        document.getElementById("posts").innerHTML = "";

        $.getJSON("https://jsonplaceholder.typicode.com/posts", (response) => {

            for (let i = 0; i <= response.length; i++) {
                document.getElementById("posts").innerHTML +=
                    `
            <div class="card m-3 p-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title fs-5 text-center">${response[i].title}</h5>
                    <p class="card-text fs-6 mt-4" style="text-align: justify"> ${response[i].body}</p>
                </div>
            </div>
        `;
            }
        }
        );

    }

    if (ord == 2) {
        document.getElementById("order").innerHTML = "Decrescente";
        document.getElementById("posts").innerHTML = "";

        $.getJSON("https://jsonplaceholder.typicode.com/posts", (response) => {

            for (let i = response.length - 1; i >= 0; i--) {
                document.getElementById("posts").innerHTML +=
                    `
            <div class="card m-3 p-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title fs-5 text-center">${response[i].title}</h5>
                    <p class="card-text fs-6 mt-4" style="text-align: justify"> ${response[i].body}</p>
                </div>
            </div>
        `;
            }
        }
        );
    }

}

