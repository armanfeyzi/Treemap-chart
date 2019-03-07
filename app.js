let data = {
  name: "بورس تهران",
  children: [
    {
      name: "group 1",
      children: [
        {
          name: "وبملت",
          volume: 2567.2,
          value: 12450,
          price: 13201,
          pc: 1
        },
        {
          name: "سپه",
          volume: 7809.1,
          value: 12450,
          price: 13201,
          pc: 2
        },
        {
          name: "سمپا",
          volume: 2163.7,
          value: 12450,
          price: 13201,
          pc: 3
        },
        {
          name: "قمرو",
          volume: 1756.5,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "آپ",
          volume: 1201.7,
          value: 12450,
          price: 13201,
          pc: 5
        }
      ]
    },
    {
      name: "Group 2",
      children: [
        {
          name: "خدماتا",
          volume: 2999.3,
          value: 12450,
          price: 13201,
          pc: 6
        },
        {
          name: "آرمان",
          volume: 10398.3,
          value: 12450,
          price: 13201,
          pc: 7
        },
        {
          name: "ربث",
          volume: 10150.5,
          value: 12450,
          price: 13201,
          pc: 8
        },
        {
          name: "کزرب",
          volume: 2652.6,
          value: 12450,
          price: 13201,
          pc: 7
        },
        {
          name: "حسیب",
          volume: 2894,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "نیب",
          volume: 6281.2,
          value: 12450,
          price: 13201,
          pc: 3
        },
        {
          name: "دثمق",
          volume: 2431.3,
          value: 12450,
          price: 13201,
          pc: 3
        },
        {
          name: "ثسمنی",
          volume: 2373.5,
          value: 12450,
          price: 13201,
          pc: 2
        },
        {
          name: "آبرح",
          volume: 1377.1,
          value: 12450,
          price: 13201,
          pc: 1
        }
      ]
    },
    {
      name: "Group 3",
      children: [
        {
          name: "صپثص",
          volume: 1335,
          value: 12450,
          price: 13201,
          pc: 0
        },
        {
          name: "بدقث",
          volume: 1148,
          value: 12450,
          price: 13201,
          pc: 9
        },
        {
          name: "سایپا",
          volume: 126,
          value: 12450,
          price: 13201,
          pc: 8
        },
        {
          name: "دیزل",
          volume: 1216,
          value: 12450,
          price: 13201,
          pc: 7
        },
        {
          name: "اینده",
          volume: 1035,
          value: 12450,
          price: 13201,
          pc: 6
        },
        {
          name: "سمینت",
          volume: 1333,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "صپث",
          volume: 903,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "نلج",
          volume: 919,
          value: 12450,
          price: 13201,
          pc: 1
        },
        {
          name: "صمیخ",
          volume: 778,
          value: 12450,
          price: 13201,
          pc: 1
        },
        {
          name: "دقثه",
          volume: 812,
          value: 12450,
          price: 13201,
          pc: 2
        },
        {
          name: "ودیست",
          volume: 593,
          value: 12450,
          price: 13201,
          pc: 2
        },
        {
          name: "پدسع",
          volume: 1422,
          value: 12450,
          price: 13201,
          pc: 2
        }
      ]
    },
    {
      name: "Group 4",
      children: [
        {
          name: "شسدپ",
          volume: 538.9,
          value: 12450,
          price: 13201,
          pc: 3
        },
        {
          name: "پثق",
          volume: 455.8,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "صمنی",
          volume: 2864,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "منسی",
          volume: 5181.6,
          value: 12450,
          price: 13201,
          pc: 4
        },
        {
          name: "ققب",
          volume: 692,
          value: 12450,
          price: 13201,
          pc: 6
        },
        {
          name: "عدبس",
          volume: 133.1,
          value: 12450,
          price: 13201,
          pc: 9
        }
      ]
    }
  ]
};

let chartDiv = document.getElementById("chart");
let svg = d3.select(chartDiv).append("svg");

let cr = [
  "#AA2121",
  "#AA2121",
  "#C84040",
  "#C84040",
  "#ED7171",
  "#7EC17E",
  "#7EC17E",
  "#518651",
  "#518651",
  "#518651",
  "#215E2C",
  "#215E2C"
];

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
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    leaf.append("title").text(
      d =>
        `${d
          .ancestors()
          .reverse()
          .map(d => d.data.name)
          .join("/")}\n${format(d.value)}`
    );

    leaf
      .append("rect")
      .attr("id", d => (d.leafUid = "#leaf").id)
      .attr("fill", (d, i) => cr[d.data.pc])
      .attr("fill-opacity", 1.0)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("class", function(d) {
        return "node level-" + d.depth;
      });
    // .on("mouseover", (d) => {
    //   d3.select(this)
    //     .style("stroke", "yellow")
    //     .style("opacity", 1)
    //  });

    // leaf.append("clipPath")
    //     .attr("id", d => (d.clipUid = ("#clip")).id)
    //     .append("use")
    //     .attr("xlink:href", d => d.leafUid.href);

    leaf
      .append("text")
      .attr("fill", "#fff")
      .attr("text-anchor", "middle")
      .attr("unicode-bidi", "isolate-override")
      // .attr("clip-path", d => d.clipUid)
      // .attr("width", d => d.x1 - d.x0)
      // .attr("height", d => d.y1 - d.y0)
      // .attr("y", 0)
      // .attr("x", 0)
      // .attr("dy", 0)
      .attr("font-size", d => Math.min(d.x1 - d.x0, d.y1 - d.y0) / 7)
      .selectAll("tspan")
      .data(d =>
        d.data.name
          .split(/(?=[A-Z][^A-Z])/g)
          .concat(format(d.data.volume))
          .concat(format(d.data.pc))
      )
      .enter()
      .append("tspan")
      // .style("width", d => d.x1 - d.x0)
      // .style("height", d => d.y1 - d.y0)
      // .attr("direction" ,"rtl")
      // .attr("xml:lang","fa")
      // .attr("unicode-bidi","bidi-override")
      // .attr("transform", "(250 250 250 250)")
      // .style("text-anchor", "start")
      // .attr("dominant-baseline", "central")
      .attr("dy", "1.5em")
      .attr("x", function() {
        const parentData = d3.select(this.parentNode).datum();
        return (parentData.x1 - parentData.x0) / 2;
      })
      .attr("font-weight", (d, i, nodes) =>
        i === nodes.length - 1 ? "200" : "700"
      )
      .text(d => d);

    // Add title for the top level
    svg
      .selectAll("titles")
      .data(
        root.descendants().filter(function(d) {
          return d.depth == 1;
        })
      )
      .enter()
      .append("text")
      .attr("x", function(d) {
        return d.x0 + 3;
      })
      .attr("y", function(d) {
        return d.y0 + 17;
      })
      .text(function(d) {
        return d.data.name;
      })
      .attr("font-size", "16px")
      .attr("font-weight", "600")
      .attr("fill", "#fff");

    return svg.node();
  };

  let filteredData = d3
    .hierarchy(data)
    .sum(d => d.volume)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  let reg = d3.selectAll("input[name='dtype']").on("change", function() {
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
  zoomSpeed: 0.2,
  maxZoom: 20,
  minZoom: 1
});

instance.on("panstart", function(e) {
  console.log("Fired when pan is just started ", e);
  // Note: e === instance.
});

instance.on("pan", function(e) {
  console.log("Fired when the scene is being panned", e);
});

instance.on("panend", function(e) {
  console.log("Fired when pan ended", e);
});

instance.on("zoom", function(e) {
  console.log("Fired when scene is zoomed", e);
});

instance.on("transform", function(e) {
  // This event will be called along with events above.
  console.log("Fired when any transformation has happened", e);
});
