function rollDice() {
    let coins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 5) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' coins!');
        coins += roll;
    }
    alert('You have won a total of ' + coins + ' coins!');
}