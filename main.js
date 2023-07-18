/*Jquery*/
$(document).ready(function () { /*botão de adicionar img*/
    $('header button').click(function() {
        $('form').slideDown(); /*sliderDown, o formulario ira decer, ao clicar no botão adicionar*/
    });
})

$('#button-cancel').click(function(){ /*botão de cancelar colocar efeito de recolher*/
    $('form').slideUp();        /*slider up, o formulario subir para cima, ao clicar no botão cancelar*/
})




$('form').on('submit', function(e) {
    e.preventDefault(); // Correção: é preventDefault(), não preventDeFault()

    const enderecoNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');

    $('<img>', {
        src: enderecoNovaImagem
    }).appendTo(novoItem);

    $(`
    <div class="overlay-imagem-link">
        <a href="${enderecoNovaImagem}" target="_blank" title="Ver Tamanho real"> 
        tamanho real
        </a> 
    </div>
    `).appendTo(novoItem);
    novoItem.appendTo('ul');
    $(novoItem).fadeIn();

    $('#endereco-imagem-nova').val('');

});




