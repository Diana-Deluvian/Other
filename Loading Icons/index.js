jQuery(document).ready(function() {

function setUpCharacters() {
    var $letters = $('.overflow h1');
    $letters.each(function() {
        var $letter = $(this);
        var newContent = '';
        for (i = 0; i < $letters.text().length; i++) {
            var substring = $letters.text().substr(i, 1);
            if (substring != " ") {
                newContent += '<span>' + substring + '</span>';
            } 
            else {
            newContent += substring;
            } 
        }
        $letters.html(newContent); 
    });
}

setUpCharacters();

function makeActive(rand) {
    return () => {
        var $letters = $('.overflow h1');
        var $spans = $letters.find('span');
        $spans.removeClass('active');
        var spanCounter = $spans.length;
        var random = Math.floor(Math.random() * spanCounter);
        while(rand === random){
            random = Math.floor(Math.random() * spanCounter); 
        }
        $(".overflow h1 span").eq(rand).addClass('active');
        setTimeout(makeActive(random), 2000);
    }
}

makeActive(8)();

});