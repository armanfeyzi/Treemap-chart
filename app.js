let data = {
  "name": "بورس تهران",
  "children": [{
      "name": "بانک ها و موسسات مالی",
      "children": [{
          "name": "وبملت",
          "volume": 10567.2,
          "value": 12450,
          "price": 33201,
          "pc": -8
        },
        {
          "name": "وسپه",
          "volume": 6009.1,
          "value": 12450,
          "price": 11201,
          "pc": -4
        },
        {
          "name": "وسینا",
          "volume": 4163.7,
          "value": 12450,
          "price": 1901,
          "pc": 3
        },
        {
          "name": "ونوین",
          "volume": 4756.5,
          "value": 12450,
          "price": 1001,
          "pc": 4
        },
        {
          "name": "وتجارت",
          "volume": 7201.7,
          "value": 12450,
          "price": 10201,
          "pc": 5.2
        },
        {
          "name": "وپارس",
          "volume": 5201.7,
          "value": 12450,
          "price": 19201,
          "pc": 5.2
        }
      ]
    },
    {
      "name": "فلزات اساسی",
      "children": [{
          "name": "فولاد",
          "volume": 2999.3,
          "value": 12450,
          "price": 13201,
          "pc": 6.3
        },
        {
          "name": "فخاس",
          "volume": 6398.3,
          "value": 12450,
          "price": 13201,
          "pc": 2.4
        },
        {
          "name": "فجر",
          "volume": 8150.5,
          "value": 12450,
          "price": 13201,
          "pc": 3.89
        },
        {
          "name": "کاوه",
          "volume": 2652.6,
          "value": 12450,
          "price": 13201,
          "pc": 1.3
        },
        {
          "name": "فلوله",
          "volume": 2894,
          "value": 12450,
          "price": 13201,
          "pc": -4.04
        },
        {
          "name": "فسپا",
          "volume": 6281.2,
          "value": 12450,
          "price": 13201,
          "pc": -3
        },
        {
          "name": "فملی",
          "volume": 2431.3,
          "value": 12450,
          "price": 13201,
          "pc": -3.4
        },
        {
          "name": "فایرا",
          "volume": 2373.5,
          "value": 12450,
          "price": 13201,
          "pc": -2
        },
        {
          "name": "فروس",
          "volume": 1377.1,
          "value": 12450,
          "price": 13201,
          "pc": 1
        }
      ]
    },
    {
      "name": "خودروسازی",
      "children": [{
          "name": "ورنا",
          "volume": 1335,
          "value": 12450,
          "price": 13201,
          "pc": 0.11
        },
        {
          "name": "خمحرکه",
          "volume": 1148,
          "value": 12450,
          "price": 13201,
          "pc": 9.9
        },
        {
          "name": "پارس",
          "volume": 126,
          "value": 12450,
          "price": 13201,
          "pc": 8.3
        },
        {
          "name": "جم",
          "volume": 1216,
          "value": 12450,
          "price": 13201,
          "pc": 7.2
        },
        {
          "name": "خکمک",
          "volume": 1535,
          "value": 12450,
          "price": 13201,
          "pc": 6
        },
        {
          "name": "خرینگ",
          "volume": 1333,
          "value": 12450,
          "price": 13201,
          "pc": 4.01
        },
        {
          "name": "خمحور",
          "volume": 2903,
          "value": 12450,
          "price": 13201,
          "pc": -4.34
        },
        {
          "name": "ختور",
          "volume": 3919,
          "value": 12450,
          "price": 13201,
          "pc": 1
        },
        {
          "name": "خاذین",
          "volume": 1778,
          "value": 12450,
          "price": 13201,
          "pc": -1
        },
        {
          "name": "پترل",
          "volume": 2812,
          "value": 12450,
          "price": 13201,
          "pc": 2.1
        },
        {
          "name": "خودرو",
          "volume": 593,
          "value": 12450,
          "price": 13201,
          "pc": -2
        },
        {
          "name": "خزامیا",
          "volume": 1422,
          "value": 12450,
          "price": 13201,
          "pc": -9.1
        }
      ]
    },
    {
      "name": "شرکت های IT",
      "children": [{
          "name": "رانفور",
          "volume": 538.9,
          "value": 12450,
          "price": 13201,
          "pc": 3.5
        },
        {
          "name": "سیستم",
          "volume": 455.8,
          "value": 12450,
          "price": 13201,
          "pc": 4
        },
        {
          "name": "آپ",
          "volume": 2864,
          "value": 12450,
          "price": 13201,
          "pc": 1
        },
        {
          "name": "پرداخت",
          "volume": 5181.6,
          "value": 12450,
          "price": 13201,
          "pc": 4
        },
        {
          "name": "مرقام",
          "volume": 692,
          "value": 12450,
          "price": 13201,
          "pc": 6
        },
        {
          "name": "رکیش",
          "volume": 133.1,
          "value": 12450,
          "price": 13201,
          "pc": 9
        }
      ]
    }
  ]
};

let chartDiv = document.getElementById("chart");
let svg = d3.select(chartDiv).append("svg");

let format = d3.format(",d");

let colors = [
  "#AA2121",
  "#C84040",
  "#ED7171",
  "#7EC17E",
  "#518651",
  "#215E2C"
];

function getColor(val) {
  let color = "red"
  switch (parseInt(val)) {
    case -10:
    case -9:
    case -8:
    case -7:
      color = colors[0]
      break;
    case -6:
    case -5:
    case -4:
    case -3:
      color = colors[1]
      break;
    case -2:
    case -1:
      color = colors[2]
      break;
    case 0:
    case 1:
    case 2:
      color = colors[3]
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      color = colors[4]
      break;
    default:
      color = colors[5]
  }
  return color
}

var tooltip = d3.select("#chart").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

function redraw() {
  var width = chartDiv.clientWidth;
  var height = chartDiv.clientHeight;

  d3.select("svg").html("");

  let chart = () => {
    const root = treemap(filteredData);

    const svg = d3.select("svg");

    svg
      .attr("width", width)
      .attr("height", height)
      .classed("svg-content-responsive", true);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`)
      .on("mousemove", function (d) {
        // console.log(d)
        tooltip.transition()
          .duration(300)
          .style("opacity", .98);
        tooltip.html(`<div class="tooltip-body" data-id=${d.data.name} >
          <ul>
            <li>سهام شرکت: ${d.data.name}</li>
            <li>قیمت: ${d.data.price}</li>
            <li>درصد تغییر: ${d.data.pc}</li>
            <li># todo line chart</li>
          </ul>
          
      </div>`)
          .style("left", (d3.event.pageX + 10) + "px")
          .style("top", (d3.event.pageY + 10) + "px");
      })
      .on("mouseout", function (d) {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

    // leaf.append("title").text(
    //   d =>
    //     `${d
    //       .ancestors()
    //       .reverse()
    //       .map(d => d.data.name)
    //       .join("/")}\n${format(d.value)}`
    // );

    leaf
      .append("rect")
      .attr("id", d => (d.leafUid = "#leaf").id)
      .attr("fill", (d) => getColor(d.data.pc))
      .attr("fill-opacity", 1.0)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("class", (d) => "node level-" + d.depth);
    // .on("mouseover", (d) => {
    //   d3.select(this)
    //     .style("stroke", "yellow")
    //     .style("opacity", 1)
    //  });

    // leaf.append("clipPath")
    //     .attr("id", d => (d.clipUid = ("#clip")).id)
    //     .append("use")
    //     .attr("xlink:href", d => d.leafUid.href);

    let txt = leaf
      .append("text")
      .attr("fill", "#fff")
      .attr("text-anchor", "middle")
      .attr("class", "shadow")
      // .attr("dy", "1.7em")
      .attr("y", function () {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.y1 - parentData.y0) / 2;
      })
      // .attr("x", "1.7em")
      // .attr("unicode-bidi","isolate-override")
      .attr("font-size", d => Math.min(d.x1 - d.x0, d.y1 - d.y0) / 6);


    // Add a <tspan class="title"> for every data element.
    txt.append("tspan")
      .text(d => d.data.name)
      .attr("class", "title")
      .attr("dy", "-1.5em")
      .attr("x", function () {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      });

    // Add a <tspan class="author"> for every data element.
    txt.append("tspan")
      .text(d => `T${format(d.data.price / 10)}`)
      .attr("class", "price")
      .attr("dy", "1.4em")
      .attr("x", function () {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      });

    // Add a <tspan class="author"> for every data element.
    txt.append("tspan")
      .text(d => (d.data.pc > 0) ? `+${d.data.pc}` : `${d.data.pc}`)
      .attr("class", "percent")
      .attr("dy", "1.4em")
      .attr("x", function () {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      });

    // Add a <tspan class="text"> for every text line.
    // txt.selectAll("tspan.text")
    //     .data(d => d.text.split("\n"))
    //     .enter()
    //     .append("tspan")
    //     .attr("class", "text")
    //     .text(d => d)
    //     .attr("dy", "1.1em")
    //     .attr("x", function() {
    //       const parentData = d3.select(this.parentNode).datum();
    //       return (parentData.x1 - parentData.x0) / 2;
    //     });  

    //       .selectAll("tspan")
    //       .data(d =>
    //         d.data.name
    //           .split(/(?=[A-Z][^A-Z])/g)
    //           .concat(format(d.data.volume))
    //           .concat("+%"+format(d.data.pc))
    //       )
    //       .enter()
    //       .append("tspan")
    //       // .style("width", d => d.x1 - d.x0)
    //       // .style("height", d => d.y1 - d.y0)
    //       // .attr("direction" ,"rtl")
    //       // .attr("xml:lang","fa")
    //       // .attr("unicode-bidi","bidi-override")
    //       // .attr("transform", "(250 250 250 250)")
    //       // .style("text-anchor", "start")
    //       // .attr("dominant-baseline", "central")
    //       // .attr("y", function() {
    //       //   const parentData = d3.select(this.parentNode).datum();
    //       //   return (parentData.y1 - parentData.y0) / 2;
    //       // })
    //       .attr("dy", "1.4em")
    //       .attr("x", function() {
    //         const parentData = d3.select(this.parentNode).datum();
    //         return (parentData.x1 - parentData.x0) / 2;
    //       })
    //       .attr("font-weight", (d, i, nodes) =>
    //         i === nodes.length - 1 ? "400" : "700"
    //       )
    //       .text(d => d);





    // Add title for the top level
    svg
      .selectAll("titles")
      .data(
        root.descendants().filter(function (d) {
          return d.depth == 1;
        })
      )
      .enter()
      .append('g')
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("dx", (d) => d.x0 + d.x1)
      .attr("dy", (d) => d.y0 + d.y1)
      .append("text")
      .attr("x", (d) => d.x0 + 3)
      .attr("y", (d) => d.y0 + 18)
      .text((d) => d.data.name)
      // .attr("font-size", d => Math.max(d.x1 - d.x0, d.y1 - d.y0) / 22)
      .attr("font-size", "16px")
      .attr("font-weight", "400")
      .attr("fill", "#fff");

    return svg.node();
  };

  let filteredData = d3
    .hierarchy(data)
    .sum(d => d.volume)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  let reg = d3.selectAll("input[name='dtype']").on("change", function () {
    let dtype = this.value;
  });

  let treemap = d3
    .treemap()
    .size([width, height])
    .padding(1)
    .paddingRight(3)
    .paddingTop(25)
    .round(true);

  // let charsts = d3.select("#chart");

  let format = d3.format(",d");

  chart();
}

// Draw for the first time to initialize.
redraw();

// Redraw based on the new size whenever the browser window is resized.
window.addEventListener("resize", redraw);

// ZOOM Function
var instance = panzoom(document.getElementById("chart"), {
  zoomSpeed: 0.06,
  maxZoom: 20,
  minZoom: 1
});

instance.on("panstart", function (e) {
  console.log("Fired when pan is just started ", e);
  // Note: e === instance.
});

instance.on("pan", function (e) {
  console.log("Fired when the scene is being panned", e);
});

instance.on("panend", function (e) {
  console.log("Fired when pan ended", e);
});

instance.on("zoom", function (e) {
  console.log("Fired when scene is zoomed", e);
});

instance.on("transform", function (e) {
  // This event will be called along with events above.
  console.log("Fired when any transformation has happened", e);
});