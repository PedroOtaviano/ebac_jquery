const url = document.getElementById("endereco-imagem-nova");

$(document).ready(function (){
    //document.querySelector("header button").addEventListener("click", function(){
    //})

    $("header button").click(function(){
        //alert("Expandir formulário");
        $("form").slideDown();
    })

    $("#botão-cancelar").click(function(){
        $("form").slideUp();
    })

    $("form").on("submit", function(e){
        e.preventDefault();

        const url = $("#endereco-imagem-nova").val();
        //console.log(url);
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${url}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
                <a href="${url}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);
        $("#endereco-imagem-nova").val("");
    })

})
