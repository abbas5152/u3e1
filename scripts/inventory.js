function display(){
    // event.preventDefault()
    var d=JSON.parse(localStorage.getItem("pdata")) || [];

    d.forEach(function(el,index){
      var b=document.createElement("div")
      var t=document.createElement("p")
      t.innerText=el.type
      var d=document.createElement("p")
      d.innerText=el.description
     
      var i=document.createElement("img")
      i.src=el.image
      var p=document.createElement("p")
      p.innerText=el.price
     
      var btn=document.createElement("button")
      btn.innerText="Remove";
      btn.addEventListener("click",function(){
          remove(index)
      })
      b.append(t,d,i,p,btn)
      document.querySelector("#all_products").append(b)
    })
}
display();

function remove(index){
    var d=JSON.parse(localStorage.getItem("pdata")) || [];

    var done= d.filter(function(el,i){
        
            return i!=index
        

        

    })
    console.log(done)
    localStorage.setItem("pdata",JSON.stringify(done))
    display();
    window.location.reload();

}

