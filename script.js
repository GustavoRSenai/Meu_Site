// Controle menu hamburguer
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear o scroll quando o menu hamburguer estiver aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Fechar ao rolar a página
window.addEventListener('scroll', () => {
    if(navList.classList.contains('open')){
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// ====== Navegação ativa ======
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a')

// Função para adicionar a classe 'active' no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'))
    this.classList.add('active');
}

// Adiciona um evento de clique no link de navegação

navLinks.forEach(item => item.addEventListener('click', activeLink));

// Alternar modo claro/escuro
// Função para alternar entre os temas
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');


    // Salva o tema escolhido no "Armazenamento Local (LocalStorage)"
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar aparência do título
    updateTextColor();
}

// Função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// carrega o tema salvo no LocalStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === 'light');
}

// ===== Animação do titulo principal
// Seleciona o elemento 'título' e define as variáveis para animação
const titleElement = document.querySelector('#name');
const text = "GUSTAVO";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// Função para animar o texto (digitando e apagando)
function animateText(){
    if(isTyping){
        if(index < text.length){
            titleElement.textContent = text.slice(0, index + 1);
            index ++;
        } else {
            isTyping = false;
        }
    } else {
        if (index > 1){
            titleElement.textContent = text.slice(0, index -1);
            index --;
        } else {
            isTyping = true;
            // alterna a cor entre preto e laranja
            currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '##543290' : (document.documentElement.classList.contains('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 150);
}

// inicia a animação quando carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();
