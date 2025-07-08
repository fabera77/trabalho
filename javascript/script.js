
const links = document.querySelectorAll("nav ul li a");

// Adiciona um efeito besta ao passar o mouse(estava sem ideias)
links.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    link.style.transform = "scale(1.4)";
  });

  link.addEventListener("mouseout", function() {
    link.style.transform = "scale(4)";
  });
});
