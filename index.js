function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   if (predicate(element, index)) {
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }
  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }

  var id = generateID();
  function prodect(name,price,quantity){
    return{
      nameP:name,
      priceP:price,
      quantityP:quantity,
      date:new Date(),
      
  }}
  function Stock(name){
    return { 
    nameS:name, 
    list:[],
    add:add,
    removeProdect:removeProdect,
    updateProdect:updateProdect,
    sortByPrice:sortByPrice,
    sortByQuantity:sortByQuantity
    }
    }
    /*var add=function(p){
      var j=0
          each(this.list,function(e,i){
            if(e.nameP===p.nameP){
              j=i
              
            }})
            if(j>0){
              this.list[j].quantityP+=p.quantityP
            }
            
            else{
              p['id']=id()
        this.list.push(p)}
            }*/
    
    var add=function(p){
      p['id']=id()
      this.list.push(p)
    }
      var removeProdect=function(id){
       this.list =  filter(this.list,function(e,i){
          return e.id!==id
        })
      }
      var updateProdect=function(id,value){
        this.list=map(this.list,function(e,i){
          if(e.id===id)
          {e.quantityP=value}
          return e
        })
    
      }
      var  sortByPrice=function(){
        return this.list.sort((a, b) => {
        var pa = a.priceP;
        var pb = b.priceP;
    
        return pa - pb;
       })}
    
      var sortByQuantity=function(){
        this.list.sort(function(a,b){
          return a.quantityP-b.quantityP
        })
      }
      var stock=Stock("stock")
      var user="aslen"
      var passWord='123456'
      $('.storePage').hide()
      $('.addPage').hide()
      $('.deletePage').hide()
      $('.updatePage').hide()


$('.log').click(function(){
  var u=$('.user').val()
  var p=$('.password').val()
  
if(u===user&&p===passWord){
  $('.inputPage').hide()
  $('.storePage').show()

}
}) 



$('.addP').click(function(){
  $('.storePage').hide()
  $('.addPage').show()

})

function display(item){
  $('.array').append(`<tr><td>${item.id}</td>
  <td>${item.nameP}</td>
  <td>${item.quantityP}</td>
  <td>${item.priceP}</td>
  <td>${item.date}</td></tr>
`)
}
function displays(s){
  $('.array').empty()
  $('.array').append(`<tr><th>Prodect Id </th><th>Prodect Name</th><th>Prodect Quantity</th> <th>Prodect Price</th><th>Prodect Date</th></tr>`)
  each(s.list,function(e,i){
    display(e)
  })
}

$('.addP2').click(function(){
  var pn=$('.nameP').val()
  var pp=$('.priceP').val()
  var pq=$('.QuantiyP').val()
  var p=prodect(pn,Number.parseInt(pp),Number.parseInt(pq))
  stock.add(p)
  displays(stock)
  $('.storePage').show()
  $('.addPage').hide()


})

$('.updateP').click(function(){
  $('.storePage').hide()
  $('.updatePage').show()

})



$('.updateP2').click(function(){
  var pi=$('.updateId').val()
  var pq=$('.QuantiyP2').val()

 stock.updateProdect(Number.parseInt(pi),Number.parseInt(pq))
  displays(stock)
  $('.storePage').show()
  $('.updatePage').hide()
})


$('.deletP').click(function(){
  $('.storePage').hide()
  $('.deletePage').show()

})


$('.deletP2').click(function(){
  var pi=$('.deleteId').val()
 stock.removeProdect(Number.parseInt(pi))
  displays(stock)
  $('.storePage').show()
  $('.deletePage').hide()
})


$('.sortPQ').click(function(){
  stock.sortByQuantity()
  displays(stock)

 })
 $('.sortPP').click(function(){

  stock.sortByPrice()
  displays(stock)
 })


     
