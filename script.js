const images = [
    "Image1.jpg",
    "MyImage1.jpg",
    "MyImage3.jpg",
    "MyImage4.jpg",
    "MyImage5.jpg",
    "MyImage6.jpg",
    "MyImage7.jpg",
    "MyImage8.jpg",
    "MyImage9.jpg",
    "MyImage10.jpg",
    "MyImage11.jpg",
    "MyImage13.jpg",
    "MyImage15.jpg",
    "MyImage16.jpg",
    "MyImage17.jpg",
    "MyImage19.jpg",
    "MyImage20.jpg",
    "MyImage21.jpg",
    "MyImage22.jpg",
    "MyImage24.jpg",
    "MyImage25.jpg",
    "MyImage26.jpg",
    "MyImage29.jpg",
   
];

let indexImage = 0;

function changerImageFond() {
    const imageUrl = images[indexImage];
    const imageExist = images.includes(imageUrl);
    
    if (imageExist) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    } else {
        document.body.style.backgroundColor = "black";
    }
    
    indexImage = (indexImage + 1) % images.length;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

shuffle(images);

setInterval(changerImageFond, 60 * 1000);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function afficherDate() {
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const maintenant = new Date();
    const dateLocale = maintenant.toLocaleDateString('ar-DZ', options);
    const jourAvecDeuxChiffres = dateLocale.replace(/\b(\d{1})\b/g, '0$1');
    const dateSansVirgule = jourAvecDeuxChiffres.replace('،', '');
    document.getElementById('date').innerText = dateSansVirgule;
}

function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.getHours().toString().padStart(2, '0');
    const minute = maintenant.getMinutes().toString().padStart(2, '0');
    const seconde = maintenant.getSeconds().toString().padStart(2, '0');

    document.getElementById('heure-minute').innerText = heure + ' : ' + minute;
    document.getElementById('seconde').innerText = seconde;

    if (heure === '00' && minute === '00') {
        afficherDate();
    }
}

afficherDate();
setInterval(afficherHeure, 1000);
