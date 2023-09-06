const catalogo = [
  {
    id: 1,
    nome: "Gaara",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "produto1_Gaara.jpg",
  },
  {
    id: 2,
    nome: "Naruto",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "Produto2_Naruto.jpg",
  },
  {
    id: 3,
    nome: "Kakashi",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "Produto3_Kakashi.jpg",
  },
  {
    id: 4,
    nome: "Sakura",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "Produto4_Sakura.jpg",
  },
  {
    id: 5,
    nome: "Sasuke",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "Produto5_Sasuke.jpg",
  },
  {
    id: 6,
    nome: "Shikamaru",
    anime: "Naruto",
    preco: 35,
    nomeArquivoImagem: "Produto6_Shikamaru.jpg",
  }
];

for (const produtoCatalogo of catalogo){
  const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-5 'id="card-produto-${produtoCatalogo.id}">
<img
  src="./assents/img/${produtoCatalogo.nomeArquivoImagem}"
  alt="Figure action."
  style="height: 200px"
/>  
<p class='anime'>Anime: ${produtoCatalogo.anime}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;
   
   document.getElementById("container-produto").innerHTML += cartaoProduto;
}

