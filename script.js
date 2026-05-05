function copiarPix() {
  const chave = "seuemail@pix.com";
  navigator.clipboard.writeText(chave);
  alert("Chave Pix copiada!");
}

function enviar(e) {
  e.preventDefault();
  alert("Mensagem enviada!");
}

function scrollToDoacao() {
  document.getElementById("doacao").scrollIntoView({
    behavior: "smooth"
  });
}

const posts = document.querySelectorAll(".insta-post");
let index = 0;

function showPosts() {
  posts.forEach(p => p.classList.remove("active"));

  for (let i = 0; i < 4; i++) {
    if (posts[index + i]) {
      posts[index + i].classList.add("active");
    }
  }

  index += 4;
  if (index >= posts.length) index = 0;
}

showPosts();
setInterval(showPosts, 4000);

function markLoaded() {
  document.querySelectorAll(".insta-post").forEach((post) => {
    const iframeCheck = setInterval(() => {
      const iframe = post.querySelector("iframe");
      if (iframe) {
        post.classList.add("loaded");
        clearInterval(iframeCheck);
      }
    }, 500);
  });
}

window.addEventListener("load", markLoaded);

function abrirModal() {
  document
    .getElementById("modalVoluntario")
    .classList.add("active");
}

function fecharModal() {
  document
    .getElementById("modalVoluntario")
    .classList.remove("active");
}

window.addEventListener("click", function(e) {

  const modal =
    document.getElementById("modalVoluntario");

  if (e.target === modal) {
    fecharModal();
  }

});