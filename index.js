class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const words = string.split(" ")
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    for (let i = 1; i < words.length; i++) {
      if (words[i] !== "a" && words[i] !== "an" && words[i] !== "but" && words[i] !== "of" && words[i] !== "and" && words[i] !== "for" && words[i] !== "at" && words[i] !== "by" && words[i] !== "from" && words[i] !== "the") {
       words [i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
      }
    } const string2 = words.join(" ")
      return string2;
  } 
}