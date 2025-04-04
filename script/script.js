      // Блокуємо події копіювання, вирізання та вставки
     document.addEventListener('copy', function(e) {
         e.preventDefault();
         alert('Копіювання заборонене!');
     }) 
     document.addEventListener('cut', function(e) {
         e.preventDefault();
         alert('Вирізання заборонене!');
     }) 
     // Блокуємо контекстне меню (правий клік миші)
     document.addEventListener('contextmenu', function(e) {
         e.preventDefault();
         alert('Контекстне меню заборонене!');
     });

     // Блокування клавіші F5 та сполучень Ctrl+R / Cmd+R
     document.addEventListener('keydown', function(e) {
         // Якщо натискається F5 (код 116)
         if (e.key === 'F5' || e.keyCode === 116) {
             e.preventDefault();
             alert('Оновлення сторінки заборонено!');
         }
         // Якщо натискається Ctrl+R (Cmd+R на Mac)
         if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
             e.preventDefault();
             alert('Оновлення сторінки заборонено!');
         }
     });

     // Функція для відображення наступного блоку
     function showNextBlock(currentBlockNumber, event) {
     // Запобігаємо стандартній поведінці кнопки (якщо це кнопка submit)
     event.preventDefault();
         // Приховуємо поточний блок
         var currentBlock = document.getElementById('Block' + currentBlockNumber);
         currentBlock.classList.remove('visible');
         currentBlock.classList.add('hidden');
     
         // Визначаємо наступний блок
         var nextBlockNumber = currentBlockNumber + 1;
         var nextBlock = document.getElementById('Block' + nextBlockNumber);
     
         // Якщо є наступний блок, показуємо його
         if (nextBlock) {
             nextBlock.classList.remove('hidden');
             nextBlock.classList.add('visible');
                             // Прокручуємо сторінку до верху
        window.scrollTo({
         top: 0,
         behavior: 'smooth' // Додає плавний перехід при прокрутці
     });
         }
     }

     // Функція для відображення попереднього блоку
     function showBackBlock(currentBlockNumber, event) {
        // Запобігаємо стандартній поведінці кнопки (якщо це кнопка submit)
        event.preventDefault();
            // Приховуємо поточний блок
            var currentBlock = document.getElementById('Block' + currentBlockNumber);
            currentBlock.classList.remove('visible');
            currentBlock.classList.add('hidden');
        
            // Визначаємо попередній блок
            var backBlockNumber = currentBlockNumber - 1;
            var backBlock = document.getElementById('Block' + backBlockNumber);
        
            // Якщо є попередній блок, показуємо його
            if (backBlock) {
                backBlock.classList.remove('hidden');
                backBlock.classList.add('visible');
            // Прокручуємо сторінку до верху
            window.scrollTo({
            top: 0,
            behavior: 'smooth' // Додає плавний перехід при прокрутці
        });
            }
        };