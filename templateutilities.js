function getGridFromMap(biome, direction) {
  var outputGrid = [];
  for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
      var cell = maps[biome][direction][`(${j}.0,0.0,${i}.0)`];
      outputGrid.push({
        type: cell.type,
        watered: 0,
        shaded: 0,
        ocean: 0,
        edgeSatisfied: true,
      });
    }
  }
  return outputGrid;
}
