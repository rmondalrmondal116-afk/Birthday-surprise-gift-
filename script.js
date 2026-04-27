const remBtn = document.getElementById('rem-btn');
const setup = document.getElementById('setup-screen');
const scene1 = document.getElementById('station-scene');
const scene2 = document.getElementById('gift-scene');
const trainGroup = document.getElementById('train-comp');
const gift = document.getElementById('gift-b');
const cakeCont = document.getElementById('cake-container');
const candles = document.querySelectorAll('.can');

// আপনার আপডেট করা মেসেজ লিস্ট
const wishes = [
    { 
        name: "My Special Wish", 
        charImg: "🦋", 
        msg: "<h1 style='font-size: 35px; color: #ff4081; margin: 0; line-height:1.2;'>HAPPY BIRTHDAY PALLABI</h1><p style='font-size: 18px; margin-top: 15px; color:#555;'>Tomar 21st birthday-te ei chotto bhalobashar proyash. Sob somoy khushi theko!</p>" 
    },
    { 
        name: "Doraemon", 
        charImg: "https://i.ibb.co/nRL9n9X/doraemon.png", 
        msg: "Hey Pallabi! My gadgets say you'll have a perfect year. Keep smiling forever! Happy Birthday!" 
    },
    { 
        name: "Chhota Bheem", 
        charImg: "https://i.ibb.co/3pY6XzD/bheem.png", 
        msg: "Eat healthy, stay strong, and enjoy every moment just like my laddoos! Have a powerful year, Pallabi!" 
    },
    { 
        name: "Krishna Ji", 
        charImg: "https://i.ibb.co/pX1pYmC/krishna.png", 
        msg: "May your life be filled with love, peace, and endless joy. My blessings are always with you, Pallabi." 
    }
];

let currentWish = 0;

// Remote Button Logic
remBtn.addEventListener('click', () => {
    setup.style.display = 'none';
    scene1.classList.remove('hidden');
    setTimeout(() => { trainGroup.style.left = '30%'; }, 1000);
});

// Gift Box Open Logic
gift.addEventListener('click', () => {
    scene2.style.display = 'flex';
    cakeCont.classList.remove('hidden');
});

// Candle Blow Logic
let blownCount = 0;
candles.forEach(can => {
    can.addEventListener('click', () => {
        can.innerText = '💨'; 
        blownCount++;
        if (blownCount === 10) {
            setTimeout(startFinalScene, 1000);
        }
    });
});

// Final Butterfly and Character Animation
function startFinalScene() {
    scene2.style.display = 'none';
    const finalScene = document.createElement('div');
    finalScene.id = 'message-scene';
    finalScene.innerHTML = `
        <div class="butterfly-container">
            <span class="butterfly">🦋</span><span class="butterfly">🦋</span>
            <span class="butterfly">🦋</span><span class="butterfly">🦋</span>
        </div>
        <div id="final-paper">
            <div id="char-display">
                <img id="char-img" src="" style="display:none; width:120px; margin:0 auto;">
                <div id="char-wish-text" style="margin-top:15px;"></div>
            </div>
            <button id="next-btn" style="margin-top:25px; padding:12px 25px; background:gold; border:none; border-radius:15px; font-weight:bold; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.2);">Read Next Wish ✨</button>
        </div>
    `;
    document.body.appendChild(finalScene);
    updateWish();
}

function updateWish() {
    const imgElement = document.getElementById('char-img');
    const textElement = document.getElementById('char-wish-text');
    const btn = document.getElementById('next-btn');

    if (currentWish === 0) {
        imgElement.style.display = 'none';
        textElement.innerHTML = wishes[currentWish].msg;
    } else {
        imgElement.style.display = 'block';
        imgElement.src = wishes[currentWish].charImg;
        textElement.innerHTML = `<b style='color:#d81b60; font-size:20px;'>${wishes[currentWish].name} says:</b><br><p style='font-size:18px; margin-top:10px;'>${wishes[currentWish].msg}</p>`;
    }

    btn.onclick = () => {
        currentWish++;
        if (currentWish < wishes.length) {
            updateWish();
        } else {
            textElement.innerHTML = "<h2 style='color:#ff4081;'>The End</h2><p>Enjoy your day to the fullest, Pallabi! 🎉</p>";
            btn.style.display = 'none';
        }
    };
      }
      
