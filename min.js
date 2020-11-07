$(function () {
  setTimeout(function () {
    $('.start p').fadeIn(1600);
  }, 200); //0.5秒後にロゴをフェードイン!
  setTimeout(function () {
    $('.start').fadeOut(500);
  }, 1700); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});


$(function () {
  $('.openModal').click(function () {  //openModalをクリックした時に
    var btnIndex = $(this).index();
    //何番目のモーダルボタンかを取得
    $('.modalArea').eq(btnIndex).addClass('is-open');
    //クリックしたモーダルボタンと同じ番目のモーダルを表示する。addClassでis-openクラスを追加して表示する
    $('html, body').css('overflow', 'hidden');
    // overflow:hidden;の追加で背景のスクロール禁止に
  });
  $('.closeModal, .modalBg').click(function () { //closeModalかmodalBgをクリックした時に
    $('.modalArea').removeClass('is-open');
    //モーダルを非表示にする。removeClassでis-openクラスを削除して非表示にする
    $('html, body').removeAttr('style');
    //追加したoverflow:hidden;を削除
  });

});

