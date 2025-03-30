// Текущая дата для отображения
function updateDate() {
    const dateElement = document.createElement('div');
    dateElement.className = 'current-date';
    
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = 2000; // Всегда 2000 год для атмосферы
    
    dateElement.innerHTML = `<p>Сегодня: ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}</p>`;
    
    // Добавляем перед футером
    const footer = document.querySelector('.footer');
    document.querySelector('.container').insertBefore(dateElement, footer);
}

// Анимация мигающего текста
function blinkText() {
    const elements = document.querySelectorAll('.sticky a, img[src="hot.gif"], img[src="new.gif"], img[src="alarm.gif"]');
    
    setInterval(() => {
        elements.forEach(el => {
            el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
    }, 500);
}

// Случайный счетчик посетителей (увеличивается периодически)
function randomVisitorCount() {
    const visitorCounter = document.querySelector('.counter span:first-child');
    let count = parseInt(visitorCounter.textContent.match(/\d+/)[0]);
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            count += Math.floor(Math.random() * 3) + 1;
            visitorCounter.textContent = `Посетителей онлайн: ${count}`;
        }
    }, 5000);
}

// Всплывающее сообщение о посетителе
function welcomePopup() {
    setTimeout(() => {
        alert("ДОБРО ПОЖАЛОВАТЬ НА ФОРУМ ДОБРОВОЛЬНОГО ОБЛЫСЕНИЯ!!!\n\nВы 12563-й посетитель сегодня!\nПолучите свой БЕСПЛАТНЫЙ рецепт для облысения!");
    }, 3000);
}

// Запуск всех функций при загрузке страницы
window.onload = function() {
    updateDate();
    blinkText();
    randomVisitorCount();
    welcomePopup();
}; 