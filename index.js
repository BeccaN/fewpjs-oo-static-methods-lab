class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(" ")
    let capArray = []

    for (let i = 0; i < stringArray.length; i++) {
      if (i == 0) {
        capArray.push(this.capitalize(stringArray[i]))
      } else {       
        if (exceptions.includes(stringArray[i])){
          capArray.push(stringArray[i])
        } else {
          capArray.push(this.capitalize(stringArray[i]))
        }
      }
    }

    return capArray.join(" ")
  }
}