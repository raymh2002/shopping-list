$(function handleShoppingListEvents(){
    {
        $('form').on('submit', function (event) {
            // stop default behavior of form submit
            event.preventDefault();
            // define variable and obtain value from input text field
            let shoppingListItemValue = $("#shopping-list-entry").val();
            // language=HTML
            let shoppingListEntry = `<li>\n 
                   <span class=\"shopping-item\">${shoppingListItemValue}</span>\n 
                   <div class=\"shopping-item-controls\">\n 
                       <button class=\"shopping-item-toggle\">\n 
                           <span class=\"button-label\">check</span>\n 
                       </button>\n 
                       <button class=\"shopping-item-delete\">\n 
                           <span class=\"button-label\">delete</span>\n 
                       </button>\n 
                   </div>\n 
               </li>`;
            $('.shopping-list').append(shoppingListEntry);
        });
    }

    {
        $('ul').on('click', '.shopping-item-toggle', function(event){
            // stop propagation of the click event on .shopping-item-toggle
            event.stopPropagation();
            // append .shopping-item__checked class to <span> element for strike-through text decoration
            $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        });
    }

    {
        $('ul').on('click', '.shopping-item-delete', function(event){
            // stop propagation of the click event on .shopping-item-delete
            event.stopPropagation();
            // delete $(this) <li> when .shopping-item-delete click event
            $(this).closest("li").remove();
        });
    }

    })

