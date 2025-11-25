// Dados simulados dos pratos do dia (Almoço)
const pratosDoDia = [
    {
        nome: "Feijoada Completa da Lilia",
        descricao: "Feijão preto cremoso, carnes selecionadas, arroz soltinho e couve refogada.",
        preco: "R$ 35,90",
        imagem: "/img/feijoada.png" /* Substitua pela foto real */
    },
    {
        nome: "Frango Assado com Ervas",
        descricao: "Frango suculento assado lentamente com mix de ervas finas e batatas rústicas.",
        preco: "R$ 29,90",
        imagem: "/img/frangoassadocomervas.png" /* Substitua pela foto real */
    },
    {
        nome: "Lasanha de Carne Bolonhesa",
        descricao: "Camadas de massa fresca, molho bolonhesa encorpado e muito queijo gratinado.",
        preco: "R$ 32,50",
        imagem: "/img/lasanha.png" /* Substitua pela foto real */
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const pratosContainer = document.getElementById('pratos-container');

    pratosDoDia.forEach(prato => {
        const pratoCard = document.createElement('div');
        pratoCard.classList.add('prato-card');
        
        pratoCard.innerHTML = `
            <img src="${prato.imagem}" alt="${prato.nome}">
            <div class="prato-info">
                <h4>${prato.nome}</h4>
                <p>${prato.descricao}</p>
                <span class="preco">${prato.preco}</span>
            </div>
        `;
        
        pratosContainer.appendChild(pratoCard);
    });

    // Função para smooth scroll ao clicar no CTA
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});