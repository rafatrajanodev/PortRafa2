/*Inicio da função*/
var modal = document.querySelector(".modal");
var imgModal = document.querySelector('.imgmodal')
var imagensDaList = document.querySelectorAll(".img_modal");

// forEach é loop para cada item do array imgModal
imagensDaList.forEach(imagem => {
  imagem.addEventListener("click", function(){
    let urlImg = imagem.attributes.src.value; // Atribui a URL do atributo src da imagem 
    imgModal.attributes.src.value = urlImg; // Coloca a nova URL no modal alterando a imagem do modal
  
    modal.classList.add("show"); // Mostra modal
  });

});

/**
 * Fechar modal
*/
var btnFecharModal = document.querySelector(".btnfecharcontainer");
btnFecharModal.addEventListener("click", function() {
  modal.classList.remove("show");
})
