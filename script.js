var request = new XMLHttpRequest();
request.open ("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

    for (var i=0;i<res.length;i++){

        //Question 3: Print All the countris Names, regions, sub-regions and populations?
        console.log(res[i].name.common)
        console.log(res[i].region)
        console.log(res[i].subregion)
        console.log(res[i].population)

        //Question 2: Display All the Country flags in console?
        console.log(res[i].flags.png)
    }
}