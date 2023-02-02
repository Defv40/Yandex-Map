let map;
function init (){
    map = new ymaps.Map('map', {
        center: [55.01369288238362,82.91587473779286],
        zoom : 13
    })
    // CreateCircles()
    CreatePlaceMark()
}

const CreatePlaceMark = () => {
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #000; font-weight: regular;">$[properties.iconContent]</div>'
    ),

    // myPlacemark = new ymaps.Placemark([55.01369288238362,82.91587473779286], {
    //     hintContent: 'Собственный значок метки',
    //     balloonContent: 'Это красивая метка'
    // }, {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#image',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'user.png',
    //     // Размеры метки.
    //     iconImageSize: [30, 42],
    //     // Смещение левого верхнего угла иконки относительно
    //     // её "ножки" (точки привязки).
    //     iconImageOffset: [-5, -38]
    // }),

    myPlacemarkWithContent = new ymaps.Placemark([55.01369288238362,82.91587473779286], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: 'Иванов Иван Иванович'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'user.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 50],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    map.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent);
}

const CreateCircles = () =>{
    var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.01369288238362,82.91587473779286],
        // Радиус круга в метрах.
        100
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
        hintContent: "Центр"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#990066",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 1,
        // Ширина обводки в пикселях.
        strokeWidth: 0
    });

    // Добавляем круг на карту.
    map.geoObjects.add(myCircle);
}

ymaps.ready(init);