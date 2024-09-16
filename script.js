const photos = ['./img/perfeita.jpg', './img/sorriso.jpg', './img/bela.jpg','./img/gatinha.jpg','./img/oloko.jpg','./img/mds.jpg','./img/scrr.jpg']; // Adicione as URLs das fotos aqui
const quotes = [
    '"Seus olhos me tocam de uma forma que nem as palavras conseguem expressar, como se cada vez que em um dia me olha, o mundo ao nosso redor desaparecesse."',
    '"Cada detalhe seu é uma obra-prima da vida, mas o que mais me encanta é como sua essência brilha através de cada gesto."',
    '"Seus olhos são como estrelas pintadas por Da Vinci, brilhando com uma perfeição que desafia o tempo."',
    '"Cada vez que olho para você, sinto que estou diante de uma obra-prima, mais grandiosa que a Capela Sistina."',
    '"Sua beleza é uma sinfonia de Michelangelo, esculpida com a mesma precisão que molda os monumentos eternos."',
    '"Seus olhos têm a profundidade de uma catedral gótica, onde cada detalhe é uma obra de arte em si."',
    '"Nenhuma escultura de mármore grego pode captar a perfeição de seus traços, que deslumbram a alma."',
    '"Seus olhos são tão profundos e cheios de vida que me perco neles, como se estivesse diante de algo único e eterno."',
    '"Você é linda de um jeito que só quem conhece o seu coração entende, uma beleza que vai além de qualquer comparação, porque é real e única."',

];

let currentPhoto = 0;

function changePhoto() {
    const photoElement = document.getElementById('photo');
    const quoteElement = document.getElementById('quoteText');

    gsap.to(photoElement, { opacity: 0, duration: 0.5, onComplete: () => {
        currentPhoto = (currentPhoto + 1) % photos.length;
        photoElement.src = photos[currentPhoto];
        gsap.to(photoElement, { opacity: 1, duration: 0.5 });
    }});

    gsap.to(quoteElement, { opacity: 0, duration: 0.5, onComplete: () => {
        quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        gsap.to(quoteElement, { opacity: 1, duration: 0.5 });
    }});

    createFlower();
}

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    document.getElementById('flower-container').appendChild(flower);

    gsap.fromTo(flower, 
        { scale: 0, rotation: 0 },
        { scale: 1, rotation: 360, duration: 4, ease: "elastic.out(1, 0.3)", 
          onComplete: () => {
              gsap.to(flower, { opacity: 0, y: -100, duration: 2, onComplete: () => flower.remove() });
          }
        }
    );
}

setInterval(changePhoto, 5000); // Muda a foto e a citação a cada 5 segundos

// Cria flores periodicamente
setInterval(createFlower, 500);

function unmuteMusic() {
    var audio = document.getElementById('background-music');
    audio.muted = false;  // Desativa o "muted" para ativar o som
    audio.play();  // Reproduz o áudio, caso ele tenha sido pausado
}