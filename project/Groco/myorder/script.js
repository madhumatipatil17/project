var dataSet = [];

$(document).ready(function () {

    let list = JSON.parse(localStorage.getItem("objects"));
    console.log(list[0].cartItems)

    list[0].cartItems.map((x) => {
        console.log(x.name,x.item)


        let {name,item,img,price}=x
        listData=[name,`<img src=${img} width="50px">` ,price*item,item]

dataSet.push(listData)
    })
    
});



$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'name' },
            { title: 'product' },
            { title: 'Amount' },
            { title: 'Quantity' },



        ],


    });
});
