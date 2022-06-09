const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'MCaq9dBz',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "*Ozzi | Bot*" //namabot kalian
global.ownername= "OJI MIKU?" //nama kalian
global.myweb ="https://instagram.com/alah.tabuak" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/channel/UC7bugAZ8aAzoqnVJOiFfNGQ" //bebas asal jan hapus
global.github = "https://github.com/OJIGIT" //bebas
global.email = "telahdigunakan889@gmail.com" //bebas
global.region = "Indonesian" //bebas
global.ownernomer = "6282122375139" // nomor wa kalian
global.ownernomerr = "+6282122375139" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://yt3.ggpht.com/ytc/AKedOLQcA4DeMf-MEN0z4AenjEshsL2wHFsQVcKYIW3B=s176-c-k-c0x00ffffff-no-rj" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6282122375139","6283111152208","6281370040608"] //ganti agar fitur owner bisa di gunakan
global.packname = '© OJI Senpai Dakara' //sticker wm ubah
global.author = '*Created OJI Senpai*' //sticker wm ganti nama kalian
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['.','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*Done DECK✅*',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner Babang OJI !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '*Oke anying sabar nih Babang OJI lagi prosess*',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner Babang OJI!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
