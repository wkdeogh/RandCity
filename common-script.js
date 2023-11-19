
let currentIndex = 0;
let running = false;
let updateInterval = 100; // 초깃값: 100ms
let fireworksActive = false;


function updateLabel(labelId, items, currentIndex) {
    const label = document.getElementById(labelId);
    label.textContent = items[currentIndex];
}

function updateColor(labelId, clr) {
    const label = document.getElementById(labelId);
    label.style.color = clr;
}

function startRotating(startButtonId, labelId, resultLabelId, items) {
    shuffleArray(items);
    stopFireworks();
    updateColor(labelId, 'black');
    const startButton = document.getElementById(startButtonId);
    const resultLabel = document.getElementById(resultLabelId);

    let currentIndex = 0;
    let running = true;
    let updateInterval = 100;

    startButton.disabled = true;

    resultLabel.textContent = "ㅤ";


    function rotate() {
        if (running) {
            currentIndex = (currentIndex + 1) % items.length;
            updateLabel(labelId, items, currentIndex);
            setTimeout(rotate, updateInterval);
        }
    }

    rotate();
    setTimeout(() => slowDown(), 5000);

    function slowDown() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                updateInterval += 10 * i;
            }, 500 * i);
        }

        setTimeout(() => {
            running = false;
            let selected = items[currentIndex];
            updateLabel(labelId, [`⭐️ ${selected} ⭐️`], 0);
            updateColor(labelId, 'teal');
            startButton.disabled = false;
            showResultLabel(selected);
            showFireworks();
        }, 500 * 20);
    }
}


function stopFireworks() {
  if(fireworksActive) {
    document.getElementById('particles-js').style.display = 'none';
    if(window.pJSDom && window.pJSDom.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    fireworksActive = false;
  }
}


function showFireworks() {
    fireworksActive = true;
    document.getElementById('particles-js').style.display = 'block';
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: false
          }
        },
        color: {
          value: ["#ff0000", "#00ff00", "#0000ff"]
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 10,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 10,
          direction: "none",
          random: true,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          }
        }
      },
      retina_detect: true
    });
  
    setTimeout(stopFireworks, 60000); // 시간은 밀리초 단위로 설정 (예: 3000ms = 3초)
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}