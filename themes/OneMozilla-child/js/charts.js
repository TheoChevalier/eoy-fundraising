(function() {

  // Based on pie chart example: http://jsfiddle.net/ragingsquirrel3/qkHK6/

  var w = 500;
  var h = 500;
  var r = h/2;
  var color = d3.scale.category20c();

  // data came from http://fundraising.mozilla.org/who-gave-mozilla-203000/
  var data = [
        { "country": "US", "amount": 103871 },
        { "country": "CH", "amount": 4279 },
        { "country": "BR", "amount": 6079},
        { "country": "AU", "amount": 8413},
        { "country": "GB", "amount": 9380},
        { "country": "CA", "amount": 11827},
        { "country": "FR", "amount": 13487},
        { "country": "DE", "amount": 24321},
        { "country": "Other", "amount": 26371}
  ];


  var vis = d3.select('.chart')
              .append("svg:svg")
              .data([data]).attr("width", w)
              .attr("height", h)
              .append("svg:g")
              .attr("transform", "translate(" + r + "," + r + ")");
  var pie = d3.layout.pie()
              .value( function(d) {return d.amount;} );

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis.selectAll("g.slice")
                .data(pie)
                .enter()
                .append("svg:g")
                .attr("class", "slice");
  arcs.append("svg:path")
      .attr("fill", function(d, i){
          return color(i);
      })
      .attr("class", function(d, i) {
        return d.data.country;
      })
      .attr("d", function (d) {
        // console.log(arc(d));
        return arc(d);
      });

  // add the text
  arcs.append("svg:text")
      .attr("transform", function(d){
        d.innerRadius = r * 0.7;
        d.outerRadius = r * 1.5;
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle").text( function(d, i) {
        return data[i].country ;
      })
      .attr("class", function(d, i) {
        return d.data.country;
      });
})();
