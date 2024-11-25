document.getElementById('sendOrderButton').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const dateTime = document.getElementById('dateTime').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    let isValid = true;

    // Очистка предыдущих ошибок
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Валидация полей
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'Введите имя';
        isValid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Введите фамилию';
        isValid = false;
    }

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Введите номер в формате XXX-XXX-XXXX';
        isValid = false;
    }

    if (!destination) {
        document.getElementById('destinationError').textContent = 'Введите пункт назначения';
        isValid = false;
    }

    if (!dateTime) {
        document.getElementById('dateTimeError').textContent = 'Выберите дату и время';
        isValid = false;
    }

    if (quantity <= 0) {
        document.getElementById('quantityError').textContent = 'Введите количество больше 0';
        isValid = false;
    }

    if (!paymentMethod) {
        document.getElementById('paymentMethodError').textContent = 'Выберите способ оплаты';
        isValid = false;
    }

    // Если валидация прошла, заполнить итоговый блок
    if (isValid) {
        document.getElementById('summaryContent').innerHTML = `
            <p><strong>Имя:</strong> ${firstName}</p>
            <p><strong>Фамилия:</strong> ${lastName}</p>
            <p><strong>Номер телефона:</strong> ${phoneNumber}</p>
            <p><strong>Пункт назначения:</strong> ${destination}</p>
            <p><strong>Дата и время:</strong> ${dateTime}</p>
            <p><strong>Количество:</strong> ${quantity}</p>
            <p><strong>Способ оплаты:</strong> ${paymentMethod}</p>
        `;
    } else {
        document.getElementById('summaryContent').innerHTML = '<p>Данные заказа отсутствуют</p>';
    }
});


// Изменение стиля заголовка формы при заполнении всех полей
document.getElementById("sendOrderButton").addEventListener("click", function () {
    const formTitle = document.querySelector(".order-info h3");
    formTitle.style.color = "green"; // Меняем цвет заголовка
    formTitle.style.transition = "color 0.5s ease"; // Плавный переход цвета
});

// Выделение блока Order Summary при отправке
document.getElementById("sendOrderButton").addEventListener("click", function () {
    const summaryBlock = document.querySelector(".order-summary");
    summaryBlock.style.border = "2px solid #ffa500"; // Меняем границу
    summaryBlock.style.boxShadow = "0px 0px 10px #ffa500"; // Добавляем тень
});

