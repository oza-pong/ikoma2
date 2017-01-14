var cesiumWidget = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('http://oza-pong.github.io/ikoma2/ikoma4.kml'));
