 //store the products array in localstorage as "products"
 function construct(t,d,p,i){
     this.type=t,
     this.description=d,
     this.price=p,
     this.image=i
 }
function myfunction(){
    // event.preventDefault()
    var form=document.querySelector("#form");
    var type=form.type.value;
    var description=form.description.value;
    var price= form.price.value;
    var image=form.image.value
    // console.log(type,description,price,image)
    var s=new construct(type,description,price,image)
    var d=JSON.parse(localStorage.getItem("pdata")) || [];
    d.push(s)
    console.log(s)
    console.log(s)
    localStorage.setItem("pdata",JSON.stringify(d))
}
   
