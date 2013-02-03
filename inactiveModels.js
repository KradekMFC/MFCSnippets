//snippet for  highlighting models that have not logged in for some time
//on the offline friends page
[ ].slice.call(document.querySelectorAll("div[style] div[style]")).forEach(function (e)
{
    var m = e.innerText.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2}(st|nd|rd|th) '\d{2}/g);
    if (m)
    {
        var date = new Date(m[0].replace(/(st|nd|rd|th)/, "").replace(/'/, "20"));
        var today = new Date();
        if (Math.ceil((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)) > 60)
            e.style.backgroundColor = "Red";
    }
})