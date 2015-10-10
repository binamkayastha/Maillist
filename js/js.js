function create() {
    var mailValue = document.getElementById('maillist').value;
    var techValue = document.getElementById('techsync').value;
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

    document.getElementById('organized').value = result;
}
