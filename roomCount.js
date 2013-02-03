//snippet for calculating how many users are currently on the site
(function(){
    Math.sum = function (ary) {
        return ary.reduce(function (a, b) { return a + b; });
    }
    Math.avg = function (ary) {
        return Math.sum(ary) / ary.length;
    }

    function getRoomCounts() {
        return [].slice.call(document.querySelectorAll("i")).map(function (e) {
            var match = e.innerHTML.match(/\d*/);
            if (match) {
                var cnt = parseInt(match[0], 10);
                if (cnt > 0)
                    return cnt;
            }
        }).filter(function (e) {
            return undefined !== e;
        });
    }

    function navRoomPages(pageNum) {
        MfcPaging.hInstances[1].nPage = pageNum;
        PopularRooms.LoadTopRooms();
    }


    var userCount = 0;
    var allRoomCounts = [];
    var currentPage = 1;
    navRoomPages(currentPage);
    var roomCounts = getRoomCounts();
    while (roomCounts.length > 0) {
        userCount += Math.sum(roomCounts);
        allRoomCounts = allRoomCounts.concat(roomCounts);
        navRoomPages(++currentPage);
        roomCounts = getRoomCounts();
    }
    console.log(userCount + " total viewers.");
    console.log(Math.round(Math.avg(allRoomCounts)) + " average viewers per room.");

})();