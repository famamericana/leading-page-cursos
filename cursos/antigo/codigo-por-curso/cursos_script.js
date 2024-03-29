/* Referencias
https://codepen.io/a7rarpress/pen/MWPgaMq
https://jsfiddle.net/4vm1sht5/3/
*/

function mostrarDescricao(elemento) {
  let descricao = elemento.nextElementSibling;

  if (descricao.style.display === 'block') {
    descricao.style.display = 'none';
    return;
  }

  let todasDescricoes = document.querySelectorAll('.descricao');
  for (let i = 0; i < todasDescricoes.length; i++) {
    todasDescricoes[i].style.display = 'none';
  }

  descricao.style.display = 'block';
}

let posicaoAnterior = 0;  // Armazena a posição anterior da rolagem

function expandirRecolher() {
  let lista = document.getElementById('lista');
  let btn = document.getElementById('btnExpandir');

  if (lista.style.height === 'auto') {
    lista.style.height = '200px';
    btn.innerHTML = 'Veja mais';

    // Esconde todas as descrições ao recolher
    let todasDescricoes = document.querySelectorAll('.descricao');
    for (let i = 0; i < todasDescricoes.length; i++) {
      todasDescricoes[i].style.display = 'none';
    }

    // Move a rolagem de volta para a posição anterior
    window.scrollTo(0, posicaoAnterior);

  } else {
    // Armazena a posição atual da rolagem
    posicaoAnterior = window.scrollY;

    lista.style.height = 'auto';
    btn.innerHTML = 'Recolher';
  }
}




var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var header = document.getElementById("sticky-header");
  var topHeader = document.getElementById("top-header");

  // Definir limite para quando o cabeçalho deve encolher
  var shrinkBoundary = topHeader.offsetHeight + 50;

  if (window.pageYOffset > topHeader.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("shrink");
  }

  if (window.pageYOffset > shrinkBoundary) {
    header.classList.add("shrink");
  }
}


$(window).on("scroll", function(){
  highlight();
});

function highlight(){
  var scroll = $(window).scrollTop();
  var height = $(window).height();

  $(".highlight").each(function(){
    var pos = $(this).offset().top;
    if (scroll+height >= pos) {
      $(this).addClass("active");
    } 
    console.log(pos);
    console.log(scroll);
  });
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("tablinks")[0].click();
});

$(document).ready(function () {
  $("#meuFooter").load("/codigos-gerais/footer/footer.html");
});


//MININAVBAR ------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var bg = document.getElementById("buttonBackground");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      bg.style.display = "flex";
    } else {
      bg.style.display = "none";
    }
  });
});


// scroll daora --------------------------------------------------------------------------------------------


// Função para verificar qual seção está visível
function checkSectionInView() {
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.nav-dot');
  const offsetToActive = 100; // Este valor deve ser o mesmo que o deslocamento no clique da bolinha

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - offsetToActive;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
      navDots[index].classList.add('active-dot');
    } else {
      navDots[index].classList.remove('active-dot');
    }
  });
}

window.addEventListener('scroll', checkSectionInView);
checkSectionInView(); // Chame a função inicialmente para definir a bolinha ativa



// Código existente para manipulação dos cliques nas bolinhas
document.querySelectorAll('.nav-dot').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop;

    const offsetToScroll = offsetTop - 100; // Ajuste 100px para o valor desejado

    window.scrollTo({
      top: offsetToScroll,
      behavior: 'smooth'
    });
  });
});


// Quando o usuário rolar para baixo 20px do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}


function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}