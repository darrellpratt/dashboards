var client = new Keen({
    projectId: "553ff65296773d08113d230f",
    readKey: "33d9680d8c2577056ac8b01d1f83b954b5b8056cbb18e69e00d75ab06eb9536b0bd4634aba252ce606241fa507dc9d5620a78f43981c4b70191396428a29a39841c4c6e419336a2aed9366718f4d581563ee2f141935c1bad37314eb23cfe3cbce7c4871d38c8b2e6ed555497f19d9cf"
});

Keen.ready(function() {





    // ----------------------------------------
    // Pageviews Pie Chart
    // ----------------------------------------
    var count_unique = new Keen.Query("count_unique", {
        eventCollection: "vote",
        groupBy: "vote",
        targetProperty: "vote"
    });
    client.draw(count_unique, document.getElementById("chart-stage"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: {
            chartArea: {
                height: "85%",
                left: "5%",
                top: "5%",
                width: "100%"
            },
            pieHole: .4
        }
    });



});
