  
    let tagBody =  document.body
    
    let tagMain = document.createElement("main")
    
    tagBody.appendChild(tagMain)
 
    let tagUl = document.createElement("ul")
    
    tagMain.appendChild(tagUl)

    // let tagLi = document.createElement("li")
    
    // tagUl.appendChild(tagLi)

    let btnComprar  = document.createElement("button")

    tagMain.appendChild(btnComprar)

    let carrinhoDeCompras = [
        {
            nome: "Uva",
            valor: 44.99,
            id: "Produtos"
        },{
            nome:"Vinho",
            valor: 17.98,
            id: "Produtos"
        },{
            nome:"Água de coco",
            valor: 8.99,
            id:"Produtos"
        },{
            nome: "mamão",
            valor: 9.98,
            id:"Produtos"
        },{
            nome: "Água Tônica",
            valor:17.98,
            id:"Produtos"
        },{
            nome: `${somar()}`,
            id: "Produtos"
        }
    ]

    function somar(){
        
        let figo = 0
        
        for(let i = 0; i < carrinhoDeCompras.length; i++){
            
            figo += carrinhoDeCompras[i].valor

        }
        return figo
    }
    console.log(somar())


    let meLambuze = document.querySelector("ul")


    function listarProdutos(listaProdutos, idVitrine, vitrine){
        for(let i = 0; i<listaProdutos.length; i++){
            
            let produto             = listaProdutos[i]
            let idProduto = produto.id
            if(idProduto == idVitrine){
                let cardProduto    = testandoProdutos(produto)
                vitrine.appendChild(cardProduto)
            }
        }
    }
    listarProdutos(carrinhoDeCompras, "Produtos", meLambuze)
    function testandoProdutos(produto){
    
         
        let nome            = produto.nome
        let valor           = produto.valor
   
      
        
        let tagLi       = document.createElement("li")
        let tagNome     = document.createElement("h2")
        let tagValor    = document.createElement("p")
       
        tagNome.innerText    = nome
        tagValor.innerText   = `R$ ${valor}`
      
        
      
        tagLi.appendChild(tagNome)
        tagLi.appendChild(tagValor)
    
        return tagLi
    }
    
    
