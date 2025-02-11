
// да се сменят сами снимките 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Превключва иконата на менюто и видимостта на навигацията при клик
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x') // Превключва класа 'bx-x', за да промени външния вид на иконата на менюто
    navbar.classList.toggle('active') 
}

// Инициализира Swiper за плъзгача с клас 'coming-container'
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20, 
    loop: true, 
    centeredSlides: true, 
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
    breakpoints: { // Адаптивни точки на прекъсване за различни размери на екрана
        0: {
            slidesPerView: 2, // 2 слайда за преглед за екрани от 0px нагоре
        },

        568: {
            slidesPerView: 3, // 3 слайда за преглед за екрани от 568px нагоре
        },

        768: {
            slidesPerView: 4, // 4 слайда за преглед за екрани от 768px нагоре
        },
        968: {
            slidesPerView: 5, // 5 слайда за преглед за екрани от 968px нагоре
        },
    }
});



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Спира изпращането на формата

    let isValid = true;

    // Вземане на стойности от полетата
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const termsAccepted = document.querySelector('input[name="terms"]').checked;

    // Проверка дали всички задължителни полета са попълнени
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Моля, попълнете всички задължителни полета!");
        isValid = false;
    }

    // Проверка на имейл
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Моля, въведете валиден имейл адрес!");
        isValid = false;
    }

    // Проверка дали паролите съвпадат
    if (password !== confirmPassword) {
        alert("Паролите не съвпадат!");
        isValid = false;
    }

    // Проверка на телефонен номер (по избор)
    const phonePattern = /^[0-9\s\-+()]{6,15}$/;
    if (phone && !phonePattern.test(phone)) {
        alert("Моля, въведете валиден телефонен номер!");
        isValid = false;
    }

    // Проверка дали потребителят е приел условията
    if (!termsAccepted) {
        alert("Трябва да се съгласите с политиката за поверителност и условията!");
        isValid = false;
    }

    // Ако всичко е валидно, изпращаме формата
    if (isValid) {
        alert('Вие платихте успешно!');
        event.target.submit();
    }
});



// Сила на паролата 


const passwordInput = document.getElementById('password');

// Създаване на елемент за показване на силата на паролата
const passwordStrengthText = document.createElement('div');
passwordStrengthText.id = 'password-strength';
passwordInput.parentNode.appendChild(passwordStrengthText);

// Функция за проверка на силата на паролата
function checkPasswordStrength(password) {
    let strength = 0;

    // Проверка за дължина
    if (password.length >= 8) strength++;

    // Проверка за наличие на главни букви
    if (/[A-Z]/.test(password)) strength++;

    // Проверка за наличие на малки букви
    if (/[a-z]/.test(password)) strength++;

    // Проверка за наличие на цифри
    if (/\d/.test(password)) strength++;

    // Проверка за наличие на специални символи
    if (/[@$!%*?&]/.test(password)) strength++;

    return strength;
}

// Добавяне на събитие при въвеждане на текст в полето за парола
passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    let strengthText = '';
    let strengthColor = '';

    // Определяне на текст и цвят въз основа на силата
    switch (strength) {
        case 0:
        case 1:
            strengthText = 'Много слаба';
            strengthColor = 'red';
            break;
        case 2:
            strengthText = 'Слаба';
            strengthColor = 'orange';
            break;
        case 3:
            strengthText = 'Средна';
            strengthColor = 'yellow';
            break;
        case 4:
            strengthText = 'Силна';
            strengthColor = 'lightgreen';
            break;
        case 5:
            strengthText = 'Много силна';
            strengthColor = 'green';
            break;
    }

    // Показване на силата на паролата с цвят
    passwordStrengthText.textContent = `Сила на паролата: ${strengthText}`;
    passwordStrengthText.style.color = strengthColor;
});




 

//За датата //
const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Месеците започват от 0
    const dd = String(today.getDate()).padStart(2, '0');

    // Форматираме датата като YYYY-MM-DD
    const minDate = `${yyyy}-${mm}-${dd}`;

    // Задаваме минималната дата в полето за дата
    const dateInput = document.getElementById("date");
    dateInput.setAttribute("min", minDate);






