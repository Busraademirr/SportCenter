//////////////////////////headerın başlangıçta transparent olup sonradan dönmesi
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
    // Header'ın yüksekliği kadar aşağı kaydırıldığında
    // arka plan rengini #355592 olarak değiştir
    if (scrollPosition > header.offsetHeight) {
        header.style.backgroundColor = '#355592';
    } else {
        header.style.backgroundColor = 'transparent'; // Başlangıçta transparan
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////yoga ekranında içerik ve görselin değişmesi
/////////////////////////////////////////////////////////////////////////////////////////////////////
const yogaButton = document.querySelectorAll('#ourClassesBtn')[0]
const groupButton = document.querySelectorAll('#ourClassesBtn')[1]
const soloButton = document.querySelectorAll('#ourClassesBtn')[2]
const strButton = document.querySelectorAll('#ourClassesBtn')[3]
const ourClassesMainImg = document.querySelector('#ourClassesMainImg')
const ourClassesMain = document.querySelector('#ourClassesMain')
const ourClassesMainText = document.querySelector('#ourClassesMainText')

//butona tıklanıldığında etrafında gölge olması için class ekleme
function addShadowToButton(buttonName) {
    buttonName.classList.add("shadowed")
}
//tüm butonlardan gölge ve sarı rengin kalkması için class kaldırma
function removeShadowsFromButtons() {
    const buttons = document.querySelectorAll('#ourClassesBtn');
    buttons.forEach(buttonName => {
        buttonName.classList.remove("shadowed");
    });
}
//butonlara tıklandığında içeriklerin değişmesi için
function content(ourClass, hour, resimadi, buttonName) {
    ourClassesMainText.innerHTML = ` <h4>Why should you come to ${ourClass}?</h4>
    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt eos soluta nostrum,
        minima consequuntur vitae dolore earum blanditiis, recusandae deleniti quibusdam eveniet aut
        neque suscipit? Aliquam eius at sequi?
    </h6>
    <br>
    <h4>${ourClass} Hours</h4>
    <h6>Saturday-Sunday: ${hour}
    <br> Monday-Tuesday: ${hour}
    <br>Wednesday-Friday: ${hour}</h6>`

    ourClassesMainImg.innerHTML = `<img src="Resimler/${resimadi}" alt="">`
    removeShadowsFromButtons(); // Tüm butonlardan gölgeleri kaldır
    addShadowToButton(buttonName); // Tıklanan butona gölge ekle}
}
yogaButton.addEventListener("click", function () { content("Yoga", "10:00am - 12:00am", "yoga.jpg", yogaButton) });
groupButton.addEventListener("click", function () { content("Group", "2:00pm - 4:00pm", "group.webp", groupButton) });
soloButton.addEventListener("click", function () { content("Solo", "6:30pm - 8:00pm", "solo.jpg", soloButton) });
strButton.addEventListener("click", function () { content("Stretching", "7:00pm - 8:00pm", "stret.webp", strButton) });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bmi calculator için
function calculate() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);

    if (!isNaN(input1) && !isNaN(input2)) {
        var result = (input2 / ((input1 / 100) * (input1 / 100)));
        var resultText = result.toFixed(1); // Sonucu iki ondalık basamakla göstermek için
        document.getElementById("result").innerText = resultText;

        // Üçgenin konumunu güncelle
        updateTrianglePosition(result);

    } else {
        document.getElementById("result").innerText = "Please enter a valid number!";
    }
}

////////üçgen konumu için
function updateTrianglePosition(result) {
    var ucgen = document.getElementById("ucgen");
    var bmiGorsel = document.querySelector('#bmiImg img');
    var genislik = bmiGorsel.clientWidth; // Görselin genişliği
    var xPosition = (result / 40) * genislik; // BMI'ye göre x eksenindeki konumunu hesapla
    ucgen.style.left = xPosition + "px";

}

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ucgen").style.visibility = "visible";
    document.getElementById("calculateButton").addEventListener("click", function () {
        calculate();
    });
});

/////////////////////////hamburger menü
const burgerNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    hamburger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
    });

}
burgerNav();


////////////////üçgen konumunu ayarlama

