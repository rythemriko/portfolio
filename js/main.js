"use strict";

/* ===============================================
# 共通部分 header
=============================================== */
$(function () {
  $("#header").load("../header.html");
});

/* ===============================================
# フェードイン
=============================================== */

const targets = document.querySelectorAll(".fade");
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
        observer.unobserve(entries[j].target);
      }
    }
  });
  observer.observe(targets[i]);
}

// let els = document.querySelectorAll(".fade");

// els.forEach(function (fadeIn) {
//   let windowHeight = window.innerHeight;

//   window.addEventListener("scroll", function () {
//     let offset = fadeIn.getBoundingClientRect().top;
//     let scroll = window.scrollY;

//     if (scroll > offset - windowHeight + 250) {
//       fadeIn.classList.add("active");
//     }
//   });
// });

/* ===============================================
# luxy.js  メインビジュアルのスクロールの挙動
=============================================== */
$(function () {
  luxy.init();

  $(window).scroll(function () {
    const nowPosi = $(window).scrollTop();
    if (nowPosi > 450) {
      $(".mainvisual").addClass("on");
      $("body").addClass("on");
    } else {
      $("body").removeClass("on");
      $(".mainvisual").removeClass("on");
    }
  });
});

/* ===============================================
# Vanilla JSにてスクロールの挙動の実装
=============================================== */
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  if (scroll > 450) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

/* ===============================================
luxy.min.jsがページ内リンク効かない原因
同じページ内にあるアンカー先にジャンプさせるためのJavaScript
=============================================== */
$(function () {
  $('a[href^="#"]').click(function () {
    //href属性に#を含むaタグをクリックした時
    var href = $(this).attr("href"); //クリックした要素のhref属性を取得
    var target = $(href == "#" || href == "" ? "html" : href); //リンク先を取得
    var position = target.offset().top - 100; //リンク先までの距離を取得
    $("html, body").animate({ scrollTop: position }, 300); //スムーススクロール
    return false;
  });
});

/* ===============================================
# 
luxy.min.jsがページ内リンク効かない原因
別ページへのアンカー先にジャンプさせるためのJavaScript
=============================================== */
$(function () {
  var a = location.hash; //URLからハッシュタグを取得：a
  if (a) {
    //aが存在する場合
    var b = $(a).offset().top - 50; //aで取得したhref属性の値と同じ要素について、ページトップからの距離を取得する：b
  }
  $(window).on("load", function () {
    //ページが読み込まれた時に実行
    $("html,body").animate({ scrollTop: b }, 300); //スムーススクロールの設定
    return false;
  });
});
