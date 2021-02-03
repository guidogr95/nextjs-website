function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line
        [array[i], array[rand]] = [array[rand], array[i]];
    }
}

export default shuffleArray