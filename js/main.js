let preferences = [{Thickness: null, Size: null, smth: [], additionals: [], price: null,},];
let SZ = null;
let result = null;
let OPT = null;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedOptions = document.querySelector("#options");
    const sizes = document.getElementsByName("radios");
    const smth = document.getElementsByName("smth");
    const additionals = document.getElementsByName("additionals");


    const bread = document.querySelector("#preferences__bread");
    const preferences_size = document.querySelector("#preferences__size");
    const preferences_list = document.querySelector("#preferences__list");
    const preferences_add_list = document.querySelector("#preferences_add__list");

    preferences[0].Thickness = selectedOptions.value;
    bread.innerHTML = selectedOptions.value


    for(item of sizes) {
        if(item.checked) {
            preferences[0].Size = item.value;
            preferences_size.innerHTML = item.value;
        }
    }

    for(item of smth) {
        if(item.checked) {
            let val = item.value
            preferences[0].smth.push(item.value)
            let list = document.createElement("li");
            preferences_list.appendChild(list);
            list.innerHTML = item.value;
        }
    }

    for(item of additionals) {
        if(item.checked) {
            preferences[0].additionals.push(item.value);
            let list2 = document.createElement("li");
            preferences_add_list.appendChild(list2);
            list2.innerHTML = item.value;
        }
    }
    console.log(preferences);
})



