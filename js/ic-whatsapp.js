var icIcon = document.getElementById("ic-whatsapp-icon");
var icModal = document.getElementById("ic-whatsapp-modal");
var icClose = document.getElementById("ic-whatsapp-close");
var icNome = document.getElementById("ic-nome");
var icEmail = document.getElementById("ic-email");
var icPhone = document.getElementById("ic-phone");

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

icIcon.onclick = function () {
  icModal.style.display = 'block';
}

icClose.onclick = function () {
  icModal.style.display = 'none';
}

function icWhatsAppSubmitForm(event) {
  if (icNome.value && icEmail.value && /(^\w.*@\w+\.\w)/.test(icEmail.value) && icPhone.value) {
    if (isMobile.any()) {
      window.open("https://api.whatsapp.com/send?phone=5548999435579&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Twnho%20interesse%20em%20uma%20solução");
    } else {
      window.open("https://web.whatsapp.com/send?phone=5548999435579&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20uma%20solução");
    }
  }
  event.preventDefault();
}