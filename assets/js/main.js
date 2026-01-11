let propertiesData;

$(document).ready(function() {
    $(window).on("scroll", function(){
        if(window.scrollY > 200){
            $("#scroll_top").show();
        } else {
            $("#scroll_top").hide();
        }

});

    // Fetch properties JSON data
    fetch('./assets/properties.json')
        .then(response => response.json())
        .then(data => {
            propertiesData = data;
            // Render cards
            propertiesData.forEach(property => {
                let cardHtml = `<div class="col-6 col-lg-3 my-5 m-0 m-auto">
                    <div class="card">
                        <div class="img_conta">
                          <a href="${property.page}" target="_blank">
                            <img class="card-img-top" src="${property.image}" alt="Card image cap">
                          </a>
                          <div class="card-price">${property.price}</div>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5 class="card-title">${property.title}</h5>
                                <p class="card-text">${property.location}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
                $('#picture-view-content').append(cardHtml);
            });
        });

    // Scroll to top animation on button click
    $("#scroll_top").click(function(){
        $('html, body').animate({scrollTop: 0}, 50);
    });
});
