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
        },

        // Mapping
        attrMapFunction = function attrMapFunction(findNode){
            $(findNode).each(function(){
                $(this).attr({
                    title: 'Some attr set text',
                    style: 'font-size:14pt;background-color:Yellow;color:Black'
                })
            });
        }; 

        //Public members
        return {
            itterateNode: itterateNode,
            attrMapFunction: attrMapFunction
        };
    };

})(window.Gus = window.Gus || {}, window.Gus.ExJqDom = window.Gus.ExJqDom || {});