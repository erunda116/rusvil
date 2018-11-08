$('.header-slider').slick({
    dots: true
});

// initMap() - function for initialization map
function initMap() {
    // Center coords at the map
    var coordinates = new google.maps.LatLng(59.985848, 30.399855);
    // Options for initialization
    var mapOptions = {
        center: coordinates, // Center coordinates (var coordinates)
        zoom: 16,               // Zoom Possible 0 to 21
        disableDefaultUI: true
    };
    // Create map into #footerMap element
    var map = new google.maps.Map(document.getElementById("footerMap"), mapOptions);

    image = 'img/decoration/marker.png',
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}
// Wait page load, start initMap()
google.maps.event.addDomListener(window, "load", initMap);

//show hide adaptive form
let adaptiveForm = document.querySelector('#adaptiveForm');
adaptiveForm.addEventListener('click', showFeedback);
function showFeedback(){
    //get page height
    var pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    //get visible page height (browser window)
    var screenHeight = document.documentElement.clientHeight;
    var hiddenFeedbackContainer = document.querySelector('#hiddenFeedbackContainer');
    var hiddenFeedbackContainerForm = document.querySelector('#hiddenFeedbackContainerForm');
    //show hidden element with form
    hiddenFeedbackContainer.style.display = "block";
    //set height and position for hidden elements
    hiddenFeedbackContainerForm.style.top = pageHeight - screenHeight + "px";
    hiddenFeedbackContainer.style.height = pageHeight + "px";
    //add hide form function
    var hiddenFeedbackContainerFormHide = document.querySelector('#hiddenFeedbackContainerFormHide');
    document.body.addEventListener('click', hideOrderForm);
    hiddenFeedbackContainerFormHide.addEventListener('click', hideOrderForm);
    //hide form function
    function hideOrderForm(e){
        if(e.target.id == "hiddenFeedbackContainer" || e.target.id == "hiddenFeedbackContainerFormHide"){
            hiddenFeedbackContainer.style.display = "none";
        }
    }
};

