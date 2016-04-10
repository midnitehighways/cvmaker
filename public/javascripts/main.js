$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

function savePDF() { doc.save('Test.pdf'); }

$(function () {  
    $('#inputFileToLoad').on('change', function encodeImageFileAsUrl(){
    console.log("HELLO");
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if(filesSelected){
        if(filesSelected.length > 0){
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent){
                var srcData = fileLoadedEvent.target.result;
                var newImage = document.createElement('img');
                newImage.src = srcData;
                // console.log(srcData);
                $("#pic").val(srcData);
                // document.getElementById("imgText").value = srcData;
                // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
    else{ alert("Unfortunately, your browser can't do this operation"); }
    })
});

$(function () {                         // reset form values
    $(".reset").click(function() {
        $(this).closest('form').find("input[type=text], [type=email], [type=date], textarea").val("");
        console.log("reset");
    })
});

var splitRegex = /\r\n|\r|\n/g;
jsPDF.API.textEx = function (text, x, y, hAlign, vAlign) {
    var fontSize = this.internal.getFontSize() / this.internal.scaleFactor;
    // As defined in jsPDF source code
    var lineHeightProportion = 1.15;
    var splittedText = null;
    var lineCount = 1;
    if (vAlign === 'middle' || vAlign === 'bottom' || hAlign === 'center' || hAlign === 'right') {
        splittedText = typeof text === 'string' ? text.split(splitRegex) : text;

        lineCount = splittedText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - lineHeightProportion);

    if (vAlign === 'middle')
        y -= (lineCount / 2) * fontSize;
    else if (vAlign === 'bottom')
        y -= lineCount * fontSize;

    if (hAlign === 'center' || hAlign === 'right') {
        var alignSize = fontSize;
        if (hAlign === 'center')
            alignSize *= 0.5;
        if (lineCount > 1) {
            for (var iLine = 0; iLine < splittedText.length; iLine++) {
                this.text(splittedText[iLine], x - this.getStringUnitWidth(splittedText[iLine]) * alignSize, y);
                y += fontSize;
            }
            return this;
        }
        x -= this.getStringUnitWidth(text) * alignSize;
    }
    this.text(text, x, y);
    return this;
};
