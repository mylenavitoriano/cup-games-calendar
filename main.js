function createCard(date, day, games){
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}

function createGame(player1, time, player2){
    return `
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${time}</strong>
            <img src="/assets/${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo-nlw.svg" alt="Logo da NWL Copa">
    </header>
    <main id="cards">
        ${createCard('20/11', 'Domingo', createGame('qatar', '13:00', 'ecuador'))}
        ${createCard('21/11', 'Segunda', createGame('england', '10:00', 'iran') + createGame('senegal', '13:00', 'netherlands') + createGame('usa', '16:00', 'wales'))}
        ${createCard('22/11', 'Terça', createGame('argentina', '07:00', 'saudi-arabia') + createGame('denmark', '10:00', 'tunisia') + createGame('mexico', '13:00', 'poland') + createGame('france', '16:00', 'australia'))}
        ${createCard('23/11', 'Quarta', createGame('morocco', '07:00', 'croatia') + createGame('germany', '10:00', 'japan') + createGame('spain', '13:00', 'costa-rica') + createGame('belgium', '16:00', 'canada'))}
        ${createCard('24/11', 'Quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}
        ${createCard('25/11', 'Sexta', createGame('wales', '07:00', 'iran') + createGame('qatar', '10:00', 'senegal') + createGame('netherlands', '13:00', 'ecuador') + createGame('england', '16:00', 'usa'))}
    </main>
`