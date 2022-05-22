let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6285238112384', '6281213308063', '6285780274023'] // Put your number here
global.mods = [] // Want some help?
global.prems = [ '6285238112384', '6285780274023] // Premium user has unlimited limit
global.APIs = { //config/routes/api_platform.yaml
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
        "clientID": "QB5ugd8EEwoGBOUMBmG0/w==",
        "serverToken": "1@1vhIE4WszXbZbCFJ/OL++10ptCnzqkC3j556PU3OUDnq
80nVuUfn8PSy+/HXC6tuUxR2V7AEGTbHrQ==",
        "clientToken": "pxt8jZtEipQvT/mvmHkoz56qpSwltv1ViLZT07AJc2I=",
        "encKey": "mY859ZF0DjjQH77T4TCg4nZtjxUkx61srBjgU4S/Sug=",
        "macKey": "87vm8DugZnZt5jdZOAD1PTpr0VohXDvMn0gKYm42JP0="
}
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'I hope you\'re fine'
  var sticker_author = 'Nurutomo'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
