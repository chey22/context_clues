$(document).ready(function () {

    //5 friends    
    var friends = ['Tayler', 'Jamie', 'Ross', 'Mackenzie', 'Emily'];
    //10 locations
    var locations = ['kitchen', 'living room', 'dining room', 'bedroom', 'bathroom', 'pantry', 'basement', 'den', 'sunroom', 'foyer']
    //20 weapons
    var weapons = ['pistol', 'shotgun', 'cannon', 'knife', 'poison', 'broken glass', 'bomb', 'candlestick', 'lead pipe', 'rope', 'chain', 'chainsaw', 'axe', 'hatchet', 'bat', 'nunchucks', 'straight razor', 'shank', 'sword', 'brass knuckles'];

    for (var i = 1; i <= 100; i++) {
        $('body').append(`<h3 class="${i}">Accusation ${i}</h3>`);
        $(`.${i}`).click(accusation(i));
    };

    function accusation(i) {

        return function () {
            alert(`accusation ${i}: I accuse ${friends[(i - 1) % friends.length]}, with the ${weapons[(i - 1) % weapons.length]}, in the ${locations[(i - 1) % locations.length]}!`);
        };
    };
});