for (let i=1; i<= 10; i++) {

    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${i}`, (response) => {

        document.getElementById("pokemon_table").innerHTML += 
         `
           
                    <tr>
                        <th scope="row" >${response.id}</td>                    
                        <td>${response.forms[0].name}</td>
                        <td><img src=${response.sprites.front_default}></td>   
                        <td>${response.height/10}m</td>
                        <td>${response.weight}kg</td>   
                        <td>${response.types[0].type.name}</td>                        
                        <td>${response.types[1] ? response.types[1].type.name: "-"}</td>                               
                    
                        </tr>
                
            
        `;

    }
    );
}