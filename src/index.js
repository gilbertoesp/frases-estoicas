const frases = [{
    "id": 1,
    "contenido": "La felicidad no consiste en adquirir y gozar, sino en no desear nada, pues consiste en ser libre.",
    "autor": "Epicteto"
  },
  {
    "id": 2,
    "contenido": "No busques que los acontecimientos sucedan como tú quieres, sino desea que sucedan como suceden, y serás feliz.",
    "autor": "Epicteto"
  },
  {
    "id": 3,
    "contenido": "No es lo que te sucede, sino cómo reaccionas lo que importa.",
    "autor": "Epicteto"
  },
  {
    "id": 4,
    "contenido": "La virtud es el único bien, y los vicios son el único mal.",
    "autor": "Séneca"
  },
  {
    "id": 5,
    "contenido": "El sabio no se aflige ni se alegra más de lo necesario.",
    "autor": "Séneca"
  },
  {
    "id": 6,
    "contenido": "La mente serena es una fortaleza.",
    "autor": "Marco Aurelio"
  },
  {
    "id": 7,
    "contenido": "No vivas como si fueras a vivir diez mil años. Aprovecha el día, aprovecha la hora, aprovecha el momento.",
    "autor": "Marco Aurelio"
  },
  {
    "id": 8,
    "contenido": "El éxito verdadero es saber vivir con lo que uno tiene.",
    "autor": "Epicteto"
  },
  {
    "id": 9,
    "contenido": "La adversidad es un maestro severo, pero un maestro eficaz.",
    "autor": "Séneca"
  },
  {
    "id": 10,
    "contenido": "La verdadera grandeza reside en la virtud, no en el poder o la riqueza.",
    "autor": "Séneca"
  },
  {
    "id": 11,
    "contenido": "No permitas que los elogios te hagan vanidoso, ni que las críticas te hagan insatisfecho.",
    "autor": "Epicteto"
  },
  {
    "id": 12,
    "contenido": "Aprende a vivir el presente y no te atormentes por el pasado ni te preocupes en exceso por el futuro.",
    "autor": "Epicteto"
  },
  {
    "id": 13,
    "contenido": "El sufrimiento es inevitable, pero podemos elegir cómo enfrentarlo y encontrar fortaleza en medio de la adversidad.",
    "autor": "Séneca"
  },
  {
    "id": 14,
    "contenido": "No desperdicies energía en cosas que no puedes controlar. Enfócate en lo que depende de ti y acepta lo demás con serenidad.",
    "autor": "Marco Aurelio"
  },
  {
    "id": 15,
    "contenido": "La verdadera libertad está en nuestra mente y en cómo elegimos responder a las circunstancias.",
    "autor": "Epicteto"
  }]

const getFrase = () => {
    const frase = frases[Math.floor(Math.random() * frases.length)]
    console.log(`"${frase['contenido']}"`)
    console.log(`--${frase['autor']}`)
}

module.exports = {
    getFrase
}