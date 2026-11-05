
/* =========================================================
   CONTATO — JAVASCRIPT
========================================================= */


/* =========================================================
   FAQ — PERGUNTAS FREQUENTES
========================================================= */

document
  .querySelectorAll(".faq-pergunta")
  .forEach(function(pergunta) {

    pergunta.addEventListener("click", function() {

      const item = this.closest(".faq-item");

      document
        .querySelectorAll(".faq-item.aberto")
        .forEach(function(outroItem) {

          if (outroItem !== item) {
            outroItem.classList.remove("aberto");
          }

        });

      item.classList.toggle("aberto");

    });

  });


/* =========================================================
   FORMULÁRIO — ENVIO PELO WHATSAPP
========================================================= */

const formulario = document.getElementById("formContato");

if (formulario) {

  formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
      document.getElementById("nomeContato").value.trim();

    const email =
      document.getElementById("emailContato").value.trim();

    const assunto =
      document.getElementById("tipoContato").value;

    const mensagem =
      document.getElementById("mensagemContato").value.trim();


    if (!nome || !email || !assunto || !mensagem) {

      alert("Por favor, preencha todos os campos antes de enviar sua mensagem.");

      return;

    }


    const texto =
      "NOVA MENSAGEM PELO SITE\n\n" +
      "Nome: " + nome + "\n" +
      "E-mail: " + email + "\n" +
      "Assunto: " + assunto + "\n\n" +
      "Mensagem:\n" + mensagem;


    const numeroWhatsApp = "5585985141830";


    const linkWhatsApp =
      "https://wa.me/" + numeroWhatsApp +
      "?text=" + encodeURIComponent(texto);


    window.location.href = linkWhatsApp;

  });

}
