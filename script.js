document.addEventListener("DOMContentLoaded", function () {

    let qrButton = document.getElementById("genQr");
    let qrTextInput = document.getElementById("qrText");
    let qrImage = document.getElementById("qrImage");

    function generateQr() {
        let qrText = qrTextInput.value.trim();
        if (qrText === '') {
            qrTextInput.classList.add("error");


            setTimeout(() => {
                qrTextInput.classList.remove("error");

            }, 300);

        } else {
            qrImage.src = "loading.gif";

            setTimeout(() => {
                qrImage.removeAttribute("src");

                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;

                qrImage.src = qrUrl;
                qrImage.style.display = "block";
            }, 500);
        }
    }

    qrButton.addEventListener("click", generateQr);
});
