// Pegue o modal
var modal = document.getElementById('modal');

// Pegue a imagem e insira-a no modal - use seu "alt" como uma legenda
var img = document.getElementById('mapa');
var modalImg = document.getElementById("modalImg");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Pegue o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Também pode fechar o modal clicando fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}