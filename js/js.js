function create() {
    var mailValue = document.getElementById('maillist').value;
    var techValue = document.getElementById('techsync').value;
    mailValue = mailValue.toLowerCase();
    techValue = techValue.toLowerCase();
    var result = "MailList: " + mailValue + "\nTechValues: " + techValue;
    //document.getElementById('final').value = result;
    var splitMailValue = mailValue.split("\n");
    var splitTechValue = techValue.split("\n");
    //splitMailValue.sort();
    //splitTechValue.sort();

    var diff = $(splitTechValue).not(splitMailValue).get();
    diff.sort();
    var result = ""
    diff.forEach(function(s) {
        result += s;
        result += "\n";
    });

    document.getElementById('final').value = result;

    var organized = splitMailValue.concat(diff);
    organized.sort()
    result = "";
    organized.forEach(function(s) {
        result += s;
        result += "\n";
    });
    check(result);
    document.getElementById('organized').value = result;
}

function check(result) {
    if(result.match("johncena", "i") || result.match("john cena", "i")) {
        document.getElementById('wrapper').style.display = 'none';
        document.getElementById('johncena').style.display = 'block';
        document.getElementById('johncena').innerHTML = '<iframe width="100%" height="1000px" src="http://www.youtube.com/embed/9EPL_4HyCFQ?autoplay=1"></iframe>';
        setTimeout(reset, 14000)
    }
    // if(result.match("moon" , "i")) {
    //     document.getElementById('wrapper').style.display = 'none';
    //     document.getElementById('johncena').style.display = 'block';
    //     document.getElementById('johncena').innerHTML = '';
    //     document.getElementById('johncena').innerHTML = '<iframe width="100%" height="1000px" id="youtube_player" class="yt_player_iframe" src="http://www.youtube.com/embed/Lp350b00nsQ?autoplay=1" allowscriptaccess="always" frameborder="0"></iframe>';
    //     setTimeout(reset, 10000)
    // }
}

function reset() {
        document.getElementById('wrapper').style.display = 'block';
        document.getElementById('johncena').style.display = 'none';
}
