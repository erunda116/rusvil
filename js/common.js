$('.header-slider').slick({
    dots: true
});

// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте.
    var coordinates = new google.maps.LatLng(59.985848, 30.399855);
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: coordinates, // Координаты центра мы берем из переменной centerLatLng
        zoom: 16,               // Зум по умолчанию. Возможные значения от 0 до 21
        disableDefaultUI: true
    };
    // Создаем карту внутри элемента #footerMap
    var map = new google.maps.Map(document.getElementById("footerMap"), mapOptions);

    image = 'img/decoration/marker.png',
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

/*
 image = 'images/marker.png',
marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
});
 panControl: false,
      zoomControl: false,
      scaleControl: false,
* */