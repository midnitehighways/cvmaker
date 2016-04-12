///////////////////////////////// switching the tabs in work-space
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


// $(document).ready(function() {
//     $(".headmenu a").click(function(event) {
//         event.preventDefault();
//         console.log($(this).parent());
//         $(this).parent().addClass("active");
//         $(this).parent().siblings().removeClass("active");
//         var tab = $(this).attr("href");
//         $(".tab-content").not(tab).css("display", "none");
//         $(tab).fadeIn();
//     });
// });
/////////////// saving the final PDF file.                      TO DO: make jquery - on event
function savePDF(name) { doc.save(name + '.pdf'); }

////////////////////// Encode image to base64 format
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
                var filename = $('input[type=file]').val().split('\\').pop();       // get the file' name
                $('.fileUpload').html(filename);
                newImage.src = srcData;              // result is here as a string
                // console.log(srcData);
                $("#pic").val(srcData);              // pass result to this hidden input, then it'll be uploaded with POST data after form submission
                // document.getElementById("imgText").value = srcData;
                document.getElementById("imgTest").src = srcData;   // show image in imgTest img-container
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

//////////////////////////////////// Add textEx function to jsPDF. First of all, for right alligning the text
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
////////////////////// this function is part of __input functionality
$(document).ready(function() {
    if (!String.prototype.trim) {
        (function() {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }
        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );
    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }
    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
});

//----- PREPARE PDF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// MAIN CV BUILDING FUNCTION

    var v, u;
    var home_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAuBJREFUSA2tlb9rFEEUx3d2cjFCLARTRbAQk85Swepsgkm4/AE2dqJoZfJPhKiNXGGrdgELzzPEgAT8AxQslICIWF4azWH07nbHz3d3Z7OX+xnwwdy8ffPm+33vO7N7JkjNZPP/npyATblctuMg7+7udpRH/sSY+XE4TqJyBF6pVG5qeKJx9o4kmJmZcQJcWVm+HYbhc2PMC/mKaW0UyVACAWxubkYCDAJbdc4pH1ltVTGtjSIZSODBl5dTcICLuuOPR9KXwIOrSmtt1YPTwQMNniVNRrIytJMegiK4qszAXRzHq8a4EgQaq0ckAXINJukiGAK+xuGGxth1OlqHLOwl6X8mOcFocLMBcKABycNeEp1JbycJgQc/dqCShcodlZsNKkaV1OT3J+mVK3mT2eb8VcTXbSmA2y7wlCL9hTiIomiN9yPGf0RUeB3nOvdrtTdP9Zx8ImjtVhCECowNTm5igC/Q6Q4E24wFgpbjujE3N/djb2/vYyIRLd+dwChIGmeyHFUOiCQJNBd9MXi5jEkPXhjCYumO1pMO5ufnf7NxNoriDaqAKCzKAoZ7z/jA+EkB3zL/gNxZgcjYT/XxjnOmjn+WvCd08Ck/A3LM4uLiGci/svEcIMlGftqMy7Va7cvS0tJV1n7V6/XPnNl16nvn84irm/1Op3Nxa2vrgD0CoGesnH1+ObApHiPFitZutyd5BsNMWhuV5PNZ0nzcgEgwckxplRs6w6rS1VhqgNpSqcRXunKJCq9QdTPzr6nqY5a37eP5i6YA7L07nIsAfo1ELzXHsXmV+W89yLC5i2BAokPXP6yB71rGtP7KZ7QG5HeF+0hkpnQlAfOJ0v8Zsuwzc2tsC7+Bf76YJ7ko5HQqs9+aip38J+tz0Ww2J0i4Z625wCenaKcgVLcRQBxw6vNMR6mqui5R5L4jc3V6errTaDQM/3px3oECAiD4uIh8Ul838vDwMD9L7/j5pHgj8/8BRcTMxL9DqBkAAAAASUVORK5CYII=";
    var phone_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAldJREFUKBVNUk9ImnEY/vwc4kVZ9qX2pXYZ4rJNG7gsWAcJFqwRa5MRk47Og10nQUlENC92WWvEOhq0w1o3ccZiHVz7hOmcBxei4Un8cxCnfk6ne75+4fYefry/9/c+z/s87/dRnU6n2+0WCoXDw/dI/lwGkuVlj9/vj8W+kQZSx0nhXqv9cjieaTQsx3G4NpvNVqvl8bwwm2/rdJq5uYfRKAcK1NvtNkXIGEahUg3Mzz/i+cbvy0C90WhEIhG7/YlON3R09AEVAbC7+4ZlVVrtEMiUSmZ/P4CHYrEIhYnEd+SY6fWuABONRnGlS6Vyq9UWiUTChRZVKhWKojKZzOrqyuzsA5frOSpe79r4uHVjY12YkEz+GB7WYgLLqnd2XoMPimq1WrlcDoc/Go03XS4nitAGCfF4nALIbn+sUjEAnJx8whyYQ8A38uPjMPoSiQT8mM2mrS0/LRaLnU6XWHwNyEBAMAB5UAVWVMbG7shksnQ6LZVKZ2bul0oliix4acnNMH0QBhm9IUQbx33FDpCTmQIATPl8fmrqXn9/n9V6N5vN9jDQhrx3RacAIFV81NFRo0JxfXralkql0IQnnLFYLJlMIsGEfwCCOT39PDJiAMZkurW9/er8/GcwGDQY9Hr9DditVquAiYgkuERIJJKzsy9ut/viIotlyOVywoo1gNFisWxu+mjSSk44s1onDg7e2Ww2kOFrYFdA0rTQhh+U5/krDyDoBZrq9fre3tvJyQm1ekCtVg4OKhcXHblcDixXW4Kb/4PYxU8RCoUWFp76fC/JTsH1FxzBARdln2r/AAAAAElFTkSuQmCC";
    var email_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAjdJREFUOBFdk71rU1EYh8/9TC69SfAjZMmiVnQQQe9Q0SUxIDiJQhwUBx0FKQiCU4lQBQeFLl0UJ3XuP2Cb4KIW1GxqlIqgiFFMMQk1IabP7/YGigee/u77ed5zcuoYY6z/wDQBHIez8Bgi8KADf0DL3hIalEolt1ar2cJxnMuWZb2Hv/AFVqEFA+jYtj1fKBSmlDtpYskoFosBwUckjdGHnucdlW88HlsilUpN47+vOCypCQ00vYkTCC4SGDHBxUlRJpPZ7bruCSgFQVCUn7yrySZzKo4XRacT500l6Ugk3sCnI2hH8RvfXcVZDWhTvEsNbIxlWMvn82Gyyx1sZeoenoHuID5aEp+VTe1JNdiDMaT7PQU5+wy2LuyHRk8KHmCrwaxsJj4jm9oLuskD4OJ4i5rRaHQe8bAXhsNhQz6K9kvxtaQsf0vMhhrsTIx1KcmHpOz2XKqLRA7CgJ3X5CPniJTVUoON+NOYbKLyKWmvtN/vX0cK0PN9/1c6nd5H7Ar2C3gH5rDOw44LBPQz3ZINHdAj+goNkO8V/IR1/bwq1vJxvIZvYRjmc7ncDpo8wf4Ey7pUPSK+V+AzLMmnzaiNpzWc7RwBTfE0iiJPQb006Xa2+/RW1CD+RyJJTWqoXled7/lsNrtaqVR67XbbajabU91ud5rpPpTL5b585Jl6vf5PalWrVUc7UXiJST5qGvgOL+FN8t1j9Eh52n0yQdyAPzpL3BUN4RTchgGswDU4BimYnD2u2QQIj+YoA3Rr8gAAAABJRU5ErkJggg==";
    var DOB_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUUlEQVQ4T52SX2rCQBDGv1kQhEDS4EvyZCMIQhAEL1BP0PQG7Q3aG/QI3qC9Qe0JzAWEQhAfBKUPwbyIf0BICOyWjaaYdtXgvO3u7O+b+WYIiuh2uwbnfADg7vDsM8a80Wi0+ZtOKkC73R4SUf45SxFC+EEQ9EoBXNcVKvB4PP4nqKyg1WopAUR0O5lMvo/hSkCz2Rwe9Z/n+9PptFwLjUbDEEIUTCQibzablTMxl3Qcpz6fzwslnzRRqiZJ8grgGcCac95ZLBbZZ9u264yxLwA3APphGL7koF8PLMt6A/B4pPAeRdGTPJ97ywC1Wu2eMSZ7LgQRdQ47INULwTn3lsvlZwYwTfNDmqSa/ak7afJqtXrIALquK+d+CbjdbikDaJp2FWC32+0B1Wr1KkAcx3tApVJRbd6lDvw0TXv5GA3GWB+ANFLO+lysAQw453JfNj8ZlXMRjnxkbQAAAABJRU5ErkJggg==";
    var citizenship_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4T3VTS47aQBCtatsIiQVmgYQEgjEIIVbxnGA4AjkBPoJzA44wcwNygnCDcU4wzgrBAhHEgh0TCSQ+dlf0HBsRC1qy5K7q97rq1Wum3HJdd8TMHhENcqlARCZhGH6/jXO26ff7LcuypkTk5knT/YqInogovFwuw9ls9hvxhABgpVRIRDYzT7XWITOPiQggfKhmpbUeKKVwyZPW2gVJQtDr9T6YGTevzueza5qmr5Qai8gnEY2Z+VVEQhHxoihaWZYVADefz5+50+mMlFITIvpk5sFisfjV7Xbf05uhxXWJyDiO44lSCpVMtNYeO46DwwPcslwuv+G04zgtZvZFxM8LeSNu0h43m01JD/nr9fqt3W6XoyhCiffEBAgVQA/kfa7X6xkBQBALfdv3JgGBN5vNV+QajcaLiARcq9UyAoJQqZgPJknedrtNfFCr1V6IKOBqtXoleITK4qmIr6ZpemkbU65UKu9Q/wbsM/MKrrvXCkbLzLaIwA8227Y90lrjcLJglv1+/xP/5XL5h4gMH1WmlPISI5VKpY8b1cNCoTDY7XZ/0twX2PcOSXg4HJ4TgmKx2EoFTNTH/E+n0xviGFv+YaVtuMfj8Z+VM5I4jrPHBNsG6avMjzQ0DGMIMHBXgozIMAxo4uWERVUB7BvH8X/P+S/VgemqwJIq3QAAAABJRU5ErkJggg==";
    var doc = new jsPDF();  // global
    function preparePDF(person) {
        
        var x = 8+3;
        var x1 = 30;
        var y = 15+3;
        var mx = x+188;
        var x2 = x 
        var interval = 8;
        var big_interval = 14;
        var small_interval = 4;
        doc.setFontSize(24);
        doc.line(x,8,100,8);
        doc.textEx("c u r r i c u l u m   v i t a e", mx, 3, "right");
        doc.setFontSize(22);
        y=32;
        doc.setFontType("bold");doc.textEx(person.fullName, x, y-15, "left");doc.setFontType("normal");
        doc.setFontSize(12);

        // console.log("pic: "+person.pic);
        
        if(person.pic) doc.addImage(person.pic, 'JPEG', mx-50, 18, 36, 36);
        doc.addImage(DOB_icon, 'JPEG', x+90, y, 4, 4);
        doc.textEx(person.born, x+97, y, "left");
        doc.addImage(phone_icon, 'JPEG', x, y, 4, 4);
        doc.textEx(person.phone, x+7, y, "left"); y+=interval;
        doc.addImage(citizenship_icon, 'JPEG', x+90, y, 4, 4);
        doc.textEx(person.citizenship, x+97, y, "left");
        doc.addImage(email_icon, 'JPEG', x, y, 4, 4);
        doc.textEx(person.email, x+7, y, "left"); y+=interval;
        doc.addImage(home_icon, 'JPEG', x, y, 4, 4);
        doc.textEx(person.address, x+7, y, "left");y+=big_interval+interval-4;

        doc.line(x,y,mx,y);doc.setFontType("bold");doc.textEx("Education",x,y-7,"left");doc.setFontType("normal");y+=small_interval;
        for(var i = 0; i < person.education.length; i++) {
            doc.textEx(person.education[i].university, x, y, "left");
            doc.textEx(person.education[i].from + " - " + person.education[i].till, mx, y, "right");y+=interval-2;
            doc.setFontSize(10);doc.textEx(person.education[i].faculty, x, y, "left");doc.setFontSize(12);y+=interval;
        }
        y+=big_interval-4;
        doc.line(x,y,mx,y);doc.setFontType("bold");doc.textEx("Work experience",x,y-7,"left");doc.setFontType("normal");y+=small_interval;
        for(var i = 0; i < person.employment.length; i++) {
            doc.textEx(person.employment[i].company, x, y, "left");
            doc.textEx(person.employment[i].from + " - " + person.employment[i].till, mx, y, "right");y+=interval-2;
            doc.setFontSize(10);doc.textEx(person.employment[i].position, x, y, "left");doc.setFontSize(12);y+=interval;
        }
        y+=big_interval-4;
        doc.line(x,y,mx,y);doc.setFontType("bold");doc.textEx("Qualifications and skills",x,y-7,"left");doc.setFontType("normal");y+=small_interval;
        for(var i = 0; i < person.skills.length; i++) {
            doc.textEx(person.skills[i], x, y, "left");y+=interval;
        }
        y+=big_interval-4;
        doc.line(x,y,mx,y);doc.setFontType("bold");doc.textEx("Language proficiency",x,y-7,"left");doc.setFontType("normal");y+=small_interval;
        for(var i = 0; i < person.languages.length; i++) {
            doc.textEx(person.languages[i], x, y, "left");y+=interval;
        }
        y+=big_interval-4;
        doc.line(x,y,mx,y);doc.setFontType("bold");doc.textEx("A bit about me",x,y-7,"left");doc.setFontType("normal");y+=small_interval;
        doc.textEx(person.about, x, y, "left");y+=interval;

        // doc.textEx(person.email, x+7, 36, "left");
        // doc.addImage(email_icon, 'JPEG', x, 36, 4, 4);


  //    var x = 8;          // left horizontal border
  //    var y = 18;         // top vertical border
  //    var maxX = x+194;   // right horizontal border
  //    var midX = x+36;
  //    var interval = 8;   // between the normal lines
  //       var dist = 25;

  //       v=(<%= person.education.length %>)*2*(interval)+3;      // doc.addPage('a4');
  //       u=dist*3+v;
  //       var w = (<%= person.education.length %>)*2*interval + (<%= person.employment.length %>)*interval + 20-dist;
  //       doc.setFontSize(22);
        // doc.text(x, y, "<%= person.fullName %>");    // first and last names
        // // doc.text(5,5, a);
        // doc.setLineWidth(0.3);
        // doc.line(x, y+12, maxX, y+12);       // line
  //       if("<%= person.pic %>"){            // if image was uploaded. Without this condition would be addImage error
  //           doc.addImage("<%= person.pic %>", 'JPEG', maxX-26, 4, 26, 26);
  //       }
  //       doc.setFontSize(14); doc.setTextColor(255, 255, 255);
        // doc.rect(x-1, y+dist-1, 34, 7, 'F');
        // doc.rect(x-1, y+dist*2-1, 34, 7, 'F');
        // doc.rect(x-1, y+dist*3-1, 34, 7, 'F');
        // doc.rect(x-1, y+dist*3-1+v, 34, 15, 'F');
        // doc.rect(x-1, y+dist*4-1+w, 34, 7, 'F');
        // doc.textEx("CONTACT", x, y+dist, "left");
        // doc.textEx("PERSONAL", x, y+dist*2, "left");
        // doc.textEx("EDUCATION", x, y+dist*3, "left");
        // doc.textEx("WORK", x, y+dist*3+v, "left");doc.textEx("EXPERIENCE", x, y+dist*3+8+v, "left");
        // doc.textEx("SKILLS", x, y+dist*4+w, "left");
        // doc.setFontSize(12); doc.setTextColor(0, 0, 0);
        // doc.textEx("Email: <%= person.email %>", maxX, y+dist, "right");
        // doc.textEx("Phone: <%= person.phone %>", maxX, y+dist+interval, "right");
        // doc.textEx("<%= person.address %>", midX, y+dist, "left");
        // doc.textEx("Date of birth: <%= person.born %>", midX, y+dist*2, "left");             // DOB
        // doc.textEx("Citizenship: <%= person.citizenship %>", midX, y+dist*2+interval*1, "left"); // citizenship

        // <% for (var i=0; i < person.education.length; i++) { %>
        //  doc.setFontType("bold");
        //  doc.textEx("<%= person.education[i].university %>", midX, y+dist*3+interval*<%= i*2 %>, "left");            // uni
        //  doc.setFontType("normal");
        //  doc.textEx("<%= person.education[i].faculty %>", midX, y+dist*3+interval*(<%= i*2 %>+1)-2, "left");         // faculty
        //  doc.textEx("<%= person.education[i].from %> - <%= person.education[i].till %>", maxX, y+dist*3+interval*<%= i*2 %>, "right");
        // <% }%>
        // console.log("<%= person.education.length %> -----sssss")
  //       <% for (var i=0; i < person.employment.length; i++) { %>
  //           doc.setFontType("bold");
  //           doc.textEx("<%= person.employment[i].company %>", midX, y+u+interval*<%= i*2 %>, "left");          // company
  //           doc.setFontType("normal");
  //           doc.textEx("<%= person.employment[i].position %>", midX, y+u+interval*(<%= i*2 %>+1)-2, "left");         // position
  //           doc.textEx("<%= person.employment[i].from %> - <%= person.employment[i].till %>", maxX, y+u+interval*<%= i*2 %>, "right");
  //       <% }%>

  //       <% for (var i=0; i < person.skills.length; i++) { %>
  //           doc.textEx("<%= person.skills[i] %>", midX, y+dist*4+w+1+interval*(<%= i %>), "left");          // skill
  //       <% }%>

        var string = doc.output('bloburi');
        // console.log("person.citizenship");
        $('.preview-pane').attr('src', string);
    }

