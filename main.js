const box = document.querySelector("#list")

function renderUser(url){
    box.innerHTML = "";
    fetch(url)
    .then(lavash => lavash.json())
    .then(lavshKeldi => {
        
        lavshKeldi.map(obyektlar => {
            box.innerHTML += `
            <li class="w-[300px] bg-red-500 rounded p-5 flex flex-col items-center">
            <h2>${obyektlar.name}</h2>
        <p>Email: ${obyektlar.address.street}</p>
            </li>
            
            `
        })
    })
    .catch(xato => {
        console.log("Gamburger keldi");
        
    })
    .finally( ()=> {
        console.log("Ogohlantirish");
        
    })
}
renderUser("https://jsonplaceholder.typicode.com/users")