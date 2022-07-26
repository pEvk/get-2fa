var totp = new jsOTP.totp();
var secret = document.getElementById("secret").value;

function copyText() {
    var copyText = totp.getOtp(secret);
    navigator.clipboard.writeText(copyText);
}

function updatSecret() {
    secret = document.getElementById("secret").value.replaceAll(" ", "");
    updateTotp();
}

function updateTicker(tick) {
    document.getElementById("ticker").innerText = "Expires after: " + tick + " second";

}

function updateTotp() {
    document.getElementById("code-1").innerText = totp.getOtp(secret);
}

updateTotp();

function timeLoop() {
    var epoch = Math.round(new Date().getTime() / 1000.0);
    var countDown = 30 - (epoch % 30);
    document.getElementById("timecountdown").value = 30 - countDown;
    updateTicker(countDown);
    if (epoch % 30 == 0) updateTotp();
}

setInterval(timeLoop, 1000);
