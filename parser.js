var csv = require('./csvparser.js');
lines = 0;
console.log('[');
csv.each('car.data.csv').on('data', function(data){
  lines++;

  // Move one index
  data[7] = data[6];
  data[6] = data[5];
  data[5] = data[4];
  data[4] = data[3];
  data[3] = data[2];
  data[2] = data[1];
  data[1] = data[0];
  data[0] = lines;

  // Normalize buying
  if (data[1] == 'low') data[1] = 1;
  if (data[1] == 'med') data[1] = 2;
  if (data[1] == 'high') data[1] = 3;
  if (data[1] == 'vhigh') data[1] = 4;

  // Normalize maint
  if (data[2] == 'low') data[2] = 1;
  if (data[2] == 'med') data[2] = 2;
  if (data[2] == 'high') data[2] = 3;
  if (data[2] == 'vhigh') data[2] = 4;
  
  // Normalize doors
  if (data[3] == '2') data[3] = 2;
  if (data[3] == '3') data[3] = 3;
  if (data[3] == '4') data[3] = 4;
  if (data[3] == '5more') data[3] = 5;
  
  // Normalize doors
  if (data[4] == '2') data[4] = 2;
  if (data[4] == '4') data[4] = 4;
  if (data[4] == 'more') data[4] = 5;

  // Normalize lug_boot
  if (data[5] == 'small') data[5] = 1;
  if (data[5] == 'med') data[5] = 2;
  if (data[5] == 'big') data[5] = 3;
  
  // Normalize safety
  if (data[6] == 'low') data[6] = 1;
  if (data[6] == 'med') data[6] = 2;
  if (data[6] == 'high') data[6] = 3;
  
  // Normalize class
  if (data[7] == 'unacc') data[7] = 1;
  if (data[7] == 'acc') data[7] = 2;
  if (data[7] == 'good') data[7] = 3;
  if (data[7] == 'vgood') data[7] = 4;

  console.log(JSON.stringify(data) + ',');
  /* console.log(','); */
}).on('end', function() {
  console.log('[\'\',\'\',\'\',\'\',\'\',\'\',\'\']]');
  // Done. Do nothing.
})
