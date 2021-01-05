/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let m = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let next = this.words[i+1] || null;

      if (m.has(word)) {
        m.get(word).push(next);
      } else {
        m.set(word, [next]);
      }
    }

    this.chains = m;
    
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(this.chains.keys()); // put all keys into an array
    let key = keys[Math.floor(Math.random() * keys.length)]; // get a random key from set of keys
    let out = [];

    while (out.length < numWords && key !== null) {
      out.push(key); // to start we put a random key in the output array
      keys = this.chains.get(key) // then we get the array of that key
      key = keys[Math.floor(Math.random() * keys.length)]; // and select a value from that array
      // if we were to separate the first and n + 1 cases we could name variables value
    }

    return out.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};