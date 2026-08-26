/* =========================================================
   CONTATO — JAVASCRIPT
========================================================= */


/* =========================================================
   COPIAR E-MAIL
========================================================= */

function copiarEmail() {

  const email =
    "contato@prdenilsonescritor.com.br";

  const botao =
    document.getElementById("botaoCopiarEmail");

  const textoOriginal =
    botao.innerHTML;


  navigator.clipboard.writeText(email)

    .then(function() {

      botao.classList.add("copiado");

      botao.innerHTML =
        '<i class="fa-solid fa-check"></i> E-mail copiado';


      setTimeout(function() {

        botao.classList.remove("copiado");

        botao.innerHTML =
          textoOriginal;

      }, 2500);

    })

    .catch(function() {

      botao.innerHTML =
        '<i class="fa-solid fa-circle-exclamation"></i> Não foi possível copiar';

    });

}


/* =========================================================
   FAQ ACCORDION
========================================================= */

document
  .querySelectorAll(".faq-pergunta")
  .forEach(function(pergunta) {

    pergunta.addEventListener(
      "click",
      function() {

        const item =
          this.closest(".faq-item");


        document
          .querySelectorAll(".faq-item.aberto")
          .forEach(function(outroItem) {

            if (outroItem !== item) {

              outroItem.classList.remove(
                "aberto"
              );

            }

          });


        item.classList.toggle("aberto");

      }
    );

  });


/* =========================================================
   FORMULÁRIO
========================================================= */

const formulario =
  document.getElementById("formContato");


if (formulario) {

  formulario.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const nome =
        document.getElementById("nomeContato").value.trim();

      const tipo =
        document.getElementById("tipoContato").value;

      const mensagem =
        document.getElementById("mensagemContato").value.trim();


      if (!nome || !tipo || !mensagem) {

        alert(
          "Preencha os campos necessários antes de enviar sua mensagem."
        );

        return;

      }


      /*
       * Por enquanto o formulário é apenas visual.
       *
       * Depois podemos conectar este formulário
       * a um serviço de envio.
       */


      alert(
        "Obrigado pela mensagem, " +
        nome +
        "! O formulário está pronto para ser conectado ao sistema de envio."
      );

    }
  );

}
