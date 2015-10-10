function create() {
    var mailValue = document.getElementById('maillist').value;
    var techValue = document.getElementById('techsync').value;
    var result = "MailList: " + mailValue + "\nTechValues: " + techValue;
    document.getElementById('final').value = result;
}
