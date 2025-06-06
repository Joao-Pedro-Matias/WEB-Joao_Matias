$.getJSON(`store.json`, (response) => {

    document.getElementById("total-produtos").innerHTML = response.length;

    for (let i = 0; i <= response.length; i++) {
        document.getElementById("catalogo").innerHTML +=
            `
            <div class="card m-3 p-4" style="width: 18rem;">
                <img src=https://static.saostore.com.br/produtos/camisa-sao-paulo-i-2223-sn-torcedor-adidas-masculina/14/3ZP-5356-014/3ZP-5356-014_zoom1.jpg?ts=1695613013&ims=1088x class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${response[i].title}</h5>
                    <p class="card-text">R$ ${response[i].price}</p>
                </div>
            </div>
        `;
    }
}
);
