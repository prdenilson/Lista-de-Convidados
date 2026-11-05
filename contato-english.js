
/* =========================================================
   CONTACT — JAVASCRIPT
========================================================= */


/* =========================================================
   EMAIL
========================================================= */

function copiarEmail() {

  const email =
    "antesqueeusejausado@yahoo.com";

  const botao =
    document.getElementById("botaoCopiarEmail");

  const textoOriginal =
    botao.innerHTML;


  navigator.clipboard.writeText(email)

    .then(function() {

      botao.classList.add("copiado");

      botao.innerHTML =
        '<i class="fa-solid fa-check"></i> Email copied';


      setTimeout(function() {

        botao.classList.remove("copiado");

        botao.innerHTML =
          textoOriginal;

      }, 2500);

    })

    .catch(function() {

      botao.innerHTML =
        '<i class="fa-solid fa-circle-exclamation"></i> Unable to copy email';

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
   CONTACT FORM
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
          "Please complete the required fields before sending your message."
        );

        return;

      }


      /*
       * For now, this form is only a visual interface.
       *
       * It is not yet connected to an email
       * or message delivery service.
       */


      alert(
        "Thank you for your message, " +
        nome +
        "! The contact form is ready to be connected to a messaging service."
      );

    }
  );

}
