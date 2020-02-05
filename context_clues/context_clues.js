$(document).ready(function () {

    //5 friends    
    var friends = ['Jamie', 'Emily', 'Ross', 'Mackenzie', 'Anna'];
    //10 locations
    var locations = ['kitchen', 'living room', 'dining room', 'bedroom', 'bathroom', 'pantry', 'basement', 'den', 'sunroom', 'foyer']
    //20 weapons
    var weapons = ['pistol', 'shotgun', 'cannon', 'knife', 'poison', 'broken glass', 'bomb', 'candlestick', 'lead pipe', 'rope', 'chain', 'chainsaw', 'axe', 'hatchet', 'bat', 'nunchucks', 'straight razor', 'shank', 'sword', 'brass knuckles'];

    for (var i = 1; i <= 100; i++) {
        $('body').append(`<h3 class="${i}">Accusation ${i}</h3>`);
        $(`.${i}`).click(accusation(i));
    };

    function accusation(i) {
        var friend = friends[(i - 1) % 5];
        var location = locations[(i - 1) % 10];
        var weapon = weapons[(i - 1) % 20];

        function Alert() {
            alert(`accusation ${i}: I accuse ${friend}, with the ${weapon}, in the ${location}!`);
        };

        return Alert;
    };

});