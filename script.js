document.addEventListener('DOMContentLoaded', function() {
    
    // Находим все необходимые элементы - теперь по классу для изображения
    const mainImage = document.querySelector('.main-news-image'); // изменили на класс
    const mainTitle = document.getElementById('main-news-title');
    const mainDescription = document.getElementById('main-news-description');
    const resetButton = document.getElementById('reset-main-news');
    const newsItems = document.querySelectorAll('.news-item');
    
    // Проверяем, что все элементы найдены
    if (!mainImage) {
        console.error('Элемент .main-news-image не найден!');
        return;
    }
    if (!mainTitle) {
        console.error('Элемент main-news-title не найден!');
        return;
    }
    if (!mainDescription) {
        console.error('Элемент main-news-description не найден!');
        return;
    }
    if (!resetButton) {
        console.error('Элемент reset-main-news не найден!');
        return;
    }
    

    // Сохраняем оригинальную главную новость
    const originalNews = {
        imageSrc: mainImage.src,
        title: mainTitle.textContent,
        description: mainDescription.innerHTML
    };

    // Добавляем обработчики для всех новостей
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Клик по новости');
            
            const imageSrc = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            if (!imageSrc || !title) {
                console.error('Не хватает данных в новости:', {imageSrc, title});
                return;
            }
            
            // Обновляем главную новость
            mainImage.src = imageSrc;
            mainImage.alt = title;
            mainTitle.textContent = title;
            
            // Используем data-description если есть, иначе берем текст из параграфа
            if (description) {
                mainDescription.innerHTML = `<p>${description}</p>`;
            } else {
                // Берем текст из первого параграфа в новости
                const firstParagraph = this.querySelector('p');
                if (firstParagraph) {
                    mainDescription.innerHTML = firstParagraph.outerHTML;
                }
            }
            
        });
    });

    // Обработчик для кнопки сброса
    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Восстанавливаем оригинальную новость
        mainImage.src = originalNews.imageSrc;
        mainTitle.textContent = originalNews.title;
        mainDescription.innerHTML = originalNews.description;
        
    });
    
});