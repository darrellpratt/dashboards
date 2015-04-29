var client = new Keen({
    projectId: "553ff65296773d08113d230f",
    readKey: "33d9680d8c2577056ac8b01d1f83b954b5b8056cbb18e69e00d75ab06eb9536b0bd4634aba252ce606241fa507dc9d5620a78f43981c4b70191396428a29a39841c4c6e419336a2aed9366718f4d581563ee2f141935c1bad37314eb23cfe3cbce7c4871d38c8b2e6ed555497f19d9cf"
});

var demoClient = new Keen({
    projectId: "5368fa5436bf5a5623000000",
    readKey: "3f324dcb5636316d6865ab0ebbbbc725224c7f8f3e8899c7733439965d6d4a2c7f13bf7765458790bd50ec76b4361687f51cf626314585dc246bb51aeb455c0a1dd6ce77a993d9c953c5fc554d1d3530ca5d17bdc6d1333ef3d8146a990c79435bb2c7d936f259a22647a75407921056"
});

Keen.ready(function() {


    // ----------------------------------------
    // Pageviews Area Chart
    // ----------------------------------------
    // var pageviews_timeline = new Keen.Query("count", {
    //     eventCollection: "pageviews",
    //     interval: "hourly",
    //     groupBy: "user.device_info.browser.family",
    //     timeframe: {
    //         start: "2014-05-04T00:00:00.000Z",
    //         end: "2014-05-05T00:00:00.000Z"
    //     }
    // });
    // demoClient.draw(pageviews_timeline, document.getElementById("chart-01"), {
    //     chartType: "areachart",
    //     title: false,
    //     height: 250,
    //     width: "auto",
    //     chartOptions: {
    //         chartArea: {
    //             height: "85%",
    //             left: "5%",
    //             top: "5%",
    //             width: "80%"
    //         },
    //         isStacked: true
    //     }
    // });


    // ----------------------------------------
    // Pageviews Pie Chart
    // ----------------------------------------
    var pageviews_static = new Keen.Query("count", {
        eventCollection: "vote",
        groupBy: "vote",
        timeframe: "this_2_hours"

    });
    client.draw(pageviews_static, document.getElementById("chart-02"), {
        chartType: "barchart",
        title: false,
        height: 500,
        width: "auto",
        chartOptions: {
            chartArea: {
                height: "85%",
                left: "5%",
                top: "5%",
                width: "100%"
            }
        }
    });
    console.log("fetched initial");
    window.setInterval(function() {
        client.draw(pageviews_static, document.getElementById("chart-02"), {
            chartType: "barchart",
            title: false,
            height: 500,
            width: "auto",
            chartOptions: {
                chartArea: {
                    height: "85%",
                    left: "5%",
                    top: "5%",
                    width: "100%"
                }
                
            }
        });
        console.log("fetched");
    }, 15000);



});
