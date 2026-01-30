// 1. Extract the data from your query

// We check if data exists to avoid errors

if (!data || !data.series || !data.series.length) {

  return {};

}



const series = data.series[0];



// Find the columns by name

const xField = series.fields.find(f => f.name === 'x');

const yField = series.fields.find(f => f.name === 'y');

const zField = series.fields.find(f => f.name === 'z');



// Safety check: ensure all columns were found

if (!xField || !yField || !zField) {

  return {};

}



// Extract values (use .buffer if available for speed, otherwise standard values)

const xData = xField.values.buffer || xField.values;

const yData = yField.values.buffer || yField.values;

const zData = zField.values.buffer || zField.values;



// 2. Define the 3D Trace (The Data)

const trace = {

  type: 'scatter3d',

  mode: 'lines+markers',

  x: xData,

  y: yData,

  z: zData,

  line: {

    width: 5,

    color: '#00ffff' // Cyan color line

  },

  marker: {

    size: 3,

    color: zData,     // Color points by altitude

    colorscale: 'Viridis',

    opacity: 0.8

  }

};



// 3. Define the Layout (The Visuals)

const layout = {

  title: '3D Vehicle Path',

  autosize: true,

  margin: { l: 0, r: 0, b: 0, t: 30 },

  scene: {

    xaxis: { title: 'Longitude' },

    yaxis: { title: 'Latitude' },

    zaxis: { title: 'Altitude' },

    aspectmode: 'data' // Maintains realistic proportions

  },

  paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background

  plot_bgcolor: 'rgba(0,0,0,0)'

};



// 4. Return everything to the panel

return {

  data: [trace],

  layout: layout

};