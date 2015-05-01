var client = new Keen({
    projectId: "553ff65296773d08113d230f",
    readKey: "33d9680d8c2577056ac8b01d1f83b954b5b8056cbb18e69e00d75ab06eb9536b0bd4634aba252ce606241fa507dc9d5620a78f43981c4b70191396428a29a39841c4c6e419336a2aed9366718f4d581563ee2f141935c1bad37314eb23cfe3cbce7c4871d38c8b2e6ed555497f19d9cf"
});


Keen.ready(function() {


    // ----------------------------------------
    // Vote Count
    // ----------------------------------------
    var voteCount = new Keen.Query("count", {
        eventCollection: "vote",
        timeframe: "this_1_month"
    });
    client.draw(voteCount, document.getElementById("chart-01"), {
        chartType: "metric",
        title: false,
        height: 200,
        colors: ["#9966FF"]
    });

    // ----------------------------------------
    // Voter Count
    // ----------------------------------------
    var userCount = new Keen.Query("count_unique", {
        eventCollection: "vote",
        targetProperty: "from",
        timeframe: "this_1_month"
    });
    client.draw(userCount, document.getElementById("chart-04"), {
        chartType: "metric",
        title: false,
        height: 200,
        colors: ["#9966FF"]
    });



    // ----------------------------------------
    // Votes Pie Chart
    // ----------------------------------------
    var pageviews_static = new Keen.Query("count", {
        eventCollection: "vote",
        groupBy: "vote",
        timeframe: "this_1_month"

    });
    client.draw(pageviews_static, document.getElementById("chart-02"), {
        chartType: "piechart",
        title: false,
        height: 500,
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


    // ----------------------------------------
    // Unique Votes Pie Chart
    // ----------------------------------------
    var uniqueVotes = new Keen.Query("count_unique", {
        eventCollection: "vote",
        groupBy: "vote",
        targetProperty: "from",
        timeframe: "this_1_month"

    });
    client.draw(uniqueVotes, document.getElementById("chart-03"), {
        chartType: "piechart",
        title: false,
        height: 500,
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

    console.log("fetched initial");
    // window.setInterval(function() {
    //     client.draw(pageviews_static, document.getElementById("chart-02"), {
    //         chartType: "piechart",
    //         title: false,
    //         height: 500,
    //         width: "auto",
    //         chartOptions: {
    //             chartArea: {
    //                 height: "85%",
    //                 left: "5%",
    //                 top: "5%",
    //                 width: "100%"
    //             },
    //             pieHole: .4
    //         }
    //     });
    //     client.draw(voteCount, document.getElementById("chart-01"), {
    //         chartType: "metric",
    //         title: false,
    //         height: 200,
    //         colors: ["#9966FF"]
    //     });
    //     console.log("fetched");
    // }, 15000);



});
