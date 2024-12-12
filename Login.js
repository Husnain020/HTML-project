$(function(){
    $.ajax({
      url: '',
      dataType: "jsonp",
      data: { action: 'opensearch',
             format: "json",
             limit: 10,
             search: "javascript",
            },
      success: function(data){
        console.log (data);
      }
    });
    
    $(".search-bar__text-input").keypress(function(e){
      if (e.which === 13) {
        var searchVal = $(this).val();
        $.ajax({
          url: 'https://en.wikipedia.org/w/api.php',
          dataType: "jsonp",
          data: { action: 'opensearch',
                 format: "json",
                 limit: 10,
                 search: searchVal,
                },
          success: function(data){
            console.log(data);
            var searchBar = $(".search-bar");
            if (!searchBar.hasClass("search-bar_theme_active")) {
              searchBar.fadeOut().hide().addClass("search-bar_theme_active").fadeIn();
            }
            var parentBlock = $(".search-result");
            parentBlock.empty();
            for (var i = 0; i < data[1].length; i++){
              var item = $("<a class='search-result__item'></a>");
              item.text(data[1][i]);
              item.attr("href", data[3][i]);
              item.attr("target", "_blank");
              parentBlock.append(item).hide().fadeIn();
            } 
          }
        });
      }
    });
    
    $(".search-bar__random-gen").click(function(event) {
      
    });
  });