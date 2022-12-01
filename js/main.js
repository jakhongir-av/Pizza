let preferences = [{Thickness: null, Size: null, smth: [], additionals: [],},];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedOptions = document.querySelector("#options");
    const sizes = document.getElementsByName("radios");
    const smth = document.getElementsByName("smth");
    const additionals = document.getElementsByName("additionals");

    preferences[0].Thickness = selectedOptions.value;

    for(item of sizes) {
        if(item.checked) {
            preferences[0].Size = item.value;
        }
    }

    for(item of smth) {
        if(item.checked) {
            preferences[0].smth.push(item.value)
        }
    }

    for(item of additionals) {
        if(item.checked) {
            preferences[0].additionals.push(item.value);
        }
    }
    console.log(preferences);
})

