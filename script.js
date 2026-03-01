document.addEventListener('DOMContentLoaded', () => {
    const factBtn = document.getElementById('factBtn');
    const factOutput = document.getElementById('factOutput');

    const facts = [
        'Lapu-Lapu defeated Magellan at the Battle of Mactan in 1521.',
        'The Philippines was the first U.S. territory to gain independence after World War II.',
        'Jose Rizal wrote two novels that helped inspire the Philippine Revolution.',
        'The Philippines has over 7,000 islands and is one of the world’s most biodiverse countries.',
        'The EDSA People Power Revolution in 1986 peacefully ousted Ferdinand Marcos.'
    ];

    if (factBtn && factOutput) {
        factBtn.addEventListener('click', () => {
            const index = Math.floor(Math.random() * facts.length);
            factOutput.textContent = facts[index];
        });
    }
});