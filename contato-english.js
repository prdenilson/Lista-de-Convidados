
/* =========================================================
   CONTACT — JAVASCRIPT
========================================================= */


/* FAQ ACCORDION */

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


/* CONTACT FORM — WHATSAPP */

const formulario = document.getElementById("formContato");

if (formulario) {

  formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nomeContato").value.trim();
    const email = document.getElementById("emailContato").value.trim();
    const assunto = document.getElementById("tipoContato").value;
    const mensagem = document.getElementById("mensagemContato").value.trim();

    if (!nome || !email || !assunto || !mensagem) {

      alert("Please complete all fields before sending your message.");
      return;

    }

    const texto =
      "NEW MESSAGE FROM YOUR WEBSITE\n\n" +
      "Name: " + nome + "\n" +
      "Email: " + email + "\n" +
      "Subject: " + assunto + "\n\n" +
      "Message:\n" + mensagem;

    const numeroWhatsApp = "5585985141830";

    const linkWhatsApp =
      "https://wa.me/" + numeroWhatsApp +
      "?text=" + encodeURIComponent(texto);

    window.location.href = linkWhatsApp;

  });

}
