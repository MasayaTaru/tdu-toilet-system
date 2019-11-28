var date = new Date();
var milkcocoa = new MilkCocoa('catjybj8hav.mlkcca.com');

var i = 0;
var milk = milkcocoa.dataStore("esp8266")
milk.stream().sort('desc').size(100).next(function(err, esp8266){
  esp8266.forEach(function(data) {
    render_data(data.timestamp);
  })
  });

function render_data(data){
  var x = date - data;
  x =  Math.round(x / 1000);
  if(x <= 86400){
    i++;
    return i;
  }
}

milk.stream().next(function(err, msgs){
  var dataset = [
    { "name": "1階", "value": 1 },
    { "name": "2階", "value": 2 },
    { "name": "3階", "value": 3 },
    { "name": "4階", "value": 4 },
    { "name": "5階", "value": 5 },
    { "name": "6階", "value": 6 },
    { "name": "7階", "value": 7 },
    { "name": "8階", "value": 8 },
    { "name": "9階", "value": 9 },
    { "name": "10階", "value": 10 },
    { "name": "11階", "value": 11 },
    { "name": "12階", "value": 12 },
    { "name": "13階", "value": 13 },
    { "name": "14階", "value": 14 }
  ];

  var last_msg = msgs[msgs.length - 1];
  ;
  dataset[13].value =Math.floor((render_data(last_msg.timestamp) - 1) / 2);
  console.log(dataset[13].value);

  var width = 1200; // グラフの幅
  var height = 500; // グラフの高さ
  var padding = 30; // スケール表示用マージン

  // 2. SVG領域の設定
  var svg = d3.select("#graf").append("svg").attr("width", width).attr("height", height);

  // 3. 軸スケールの設定
  var xScale = d3.scaleBand()
    .rangeRound([padding, width - padding])
    .padding(0.1)
    .domain(dataset.map(function(d) {
       return d.name;
    })
  );

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d.value; })])
    .range([height - padding, padding]);

  // 4. 軸の表示
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(d3.axisBottom(xScale));


  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(
      d3.axisLeft(yScale)
      .ticks(10)
      .tickSize(-width)
    );

  // 5. バーの表示
  svg.append("g")
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d) { return xScale(d.name); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - padding - yScale(d.value); })
    .attr("fill", "steelblue");

});
