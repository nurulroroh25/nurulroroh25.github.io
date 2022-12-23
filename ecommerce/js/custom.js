//Js Documents

jQuery(document).ready(function ($) {
  "user strict";

  initFavorite();
  initTimer();
  getCounter();
  //timer mundur
  function getCounter() {
    var countDownDate = new Date("Aug 11, 2021 22:00:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var textDays = document.getElementById("days");
      var textHours = document.getElementById("hours");
      var textMinutes = document.getElementById("minutes");
      var textSeconds = document.getElementById("seconds");

      textDays.innerHTML = days < 10 ? "0" + days : days;
      textHours.innerHTML = hours < 10 ? "0" + hours : hours;
      textMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
      textSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }
  // 1. Init Timer

  function initTimer() {
    if ($(".timer").length) {
      // uncoment line below and reolence date
      //var target_date = new Date("may 3, 2021").getTime();

      // comment lines below
      var date = new Date();
      date.setDate(date.getDate() + 3);
      var target_date = date.getTime();

      // variables for time units
      var days, hours, minutes, seconds;
      var d = $("#day");
      var h = $("#hour");
      var m = $("#minute");
      var s = $("#second");

      setInterval(function () {
        // find the amount of "seconds"

        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // display result
        d.text(days);
        h.text(hours);
        m.text(minutes);
        s.text(seconds);
      }, 1000);
    }
  }

  // 2. Init Favorite
  function initFavorite() {
    if ($(".favorite").length) {
      var favs = $(".favorite");

      favs.each(function () {
        var fav = $(this);
        var active = false;
        if (fav.hasClass("active")) {
          active = true;
        }
        fav.on("click", function () {
          if (active) {
            fav.removeClass("active");
            active = false;
          } else {
            fav.addClass("active");
            active = true;
          }
        });
      });
    }
  }
});
