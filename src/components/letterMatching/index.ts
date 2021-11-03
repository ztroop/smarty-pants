const challenge = () => {
  const characters = 'abcdefghijklmnopqrstuvyxyz';
  const random_char = () => {
    var index = Math.floor(Math.random() * characters.length);
    return characters[index];
  };

  const generate = () => {
    let first_seq: string[] = [],
      second_seq: string[] = [];
    let correctMatches = 0;

    for (let step = 0; step < 4; step++) {
      let char = random_char();
      first_seq.push(char);
      let rand = Math.random() < 0.3;
      if (rand) {
        second_seq.push(char.toUpperCase());
        correctMatches++;
      } else {
        do {
          var t = random_char();
        } while (t === char);
        second_seq.push(t.toUpperCase());
      }
    }

    return { first_seq, second_seq, correctMatches };
  };

  return { random_char, generate };
};

export default challenge;
