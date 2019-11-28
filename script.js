$('[data-toggle="tooltip"]').tooltip();

$(function() {
  var $children = $('.children');
  var original = $children.html();

  $('.parent').change(function() {
    var val1 = $(this).val();

    $children.html(original).find('option').each(function() {
      var val2 = $(this).data('val');
      if (val1 != val2) {
        $(this).not(':first-child').remove();
      }
    });

    if ($(this).val() == '') {
      $children.attr('disabled', 'disabled');
    } else {
      $children.removeAttr('disabled');
    }

  });
});

function OnButtonClick() {
    var select1 = document.forms.formName.building; //変数select1を宣言
    var select2 = document.forms.formName.stage; //変数select2を宣言
    var toilet1 = document.getElementById("s1");
    var toilet2 = document.getElementById("s2");

 if (select1.options[select1.selectedIndex].value == '1')
  {
    if (toilet1.innerHTML == "NG" && toilet2.innerHTML == "NG")
      {
        target = document.getElementById("output");
        target.innerHTML = select1.options[select1.selectedIndex].value + "号館はすべて満室です";
      }

    else if ((toilet1.innerHTML == "NG" && toilet2.innerHTML == "OK") || (toilet1.innerHTML == "OK" && toilet2.innerHTML == "NG") )
      {
        target = document.getElementById("output");
        target.innerHTML = "14階に空室を1つ発見しました";
      }

    else if (toilet1.innerHTML == "OK" && toilet2.innerHTML == "OK")
      {
        target = document.getElementById("output");
        target.innerHTML = "14階に空室を2つ発見しました";
      }

    else
      {
        target = document.getElementById("output");
        target.innerHTML = "エラーが起こりました。もう一度入力してください";
        console.log(toilet1.innerHTML)
      }
  }

 else if (select1.options[select1.selectedIndex].value == "2")
  {
     target = document.getElementById("output");
     target.innerHTML = "まだ対応していません";
  }

 else if (select1.options[select1.selectedIndex].value == "3")
  {
     target = document.getElementById("output");
     target.innerHTML = "まだ対応していません";
  }

 else if (select1.options[select1.selectedIndex].value == "4")
  {
     target = document.getElementById("output");
     target.innerHTML = "まだ対応していません";
  }

 else if (select1.options[select1.selectedIndex].value == "5")
  {
     target = document.getElementById("output");
     target.innerHTML = "まだ対応していません";
  }

 else
  {
     target = document.getElementById("output");
     target.innerHTML = "現在地を正しく入力してください";
  }
}
