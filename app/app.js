import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function(e){
        let btnId = this.id;
        let contentID = btnId + "Content"
        MODEL.getPageContent(contentID);
    });
}

$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent");
});