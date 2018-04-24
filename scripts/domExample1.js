(function(ns1, ns2){

    ns2.DomWork = function DomWork(){
        //Private members 
        var itterateNode = function itterateNode(findNode, output){
            var outputTo = $(output);
            var html = '';
            $(findNode).each(function(index){
                html += "<br>" + index + " " + $(this).text();
            });
            outputTo.html(html);
        };

        //Public members
        return {
            itterateNode: itterateNode
        };
    };

})(window.Gus = window.Gus || {}, window.Gus.ExJqDom = window.Gus.ExJqDom || {});