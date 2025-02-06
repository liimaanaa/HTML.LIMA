function calcularTempoJuntos() {
    // Data do relacionamento (Ano, Mês - 1, Dia)
    const dataInicio = new Date(2025, 0, 20); // Janeiro é 0

    // Data atual
    const agora = new Date();

    // Se a data ainda não chegou, exibe uma mensagem
    if (agora < dataInicio) {
        document.getElementById("tempo-juntos").textContent = "Ainda não estamos juntos! ❤️";
        return;
    }

    // Diferença em milissegundos
    const diferencaEmMilissegundos = agora - dataInicio;

    // Converter para dias, horas e minutos
    const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));

    // Exibir resultado na página
    document.getElementById("tempo-juntos").textContent =
        `${dias} dias, ${horas} horas e ${minutos} minutos`;
}

// Atualiza o tempo a cada minuto
setInterval(calcularTempoJuntos, 60000);

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", calcularTempoJuntos);