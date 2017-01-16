var viewer = new Cesium.Viewer('cesiumContainer',{
  timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
  animation : false,         //デフォルトのアニメーションウィジェットをオフにする
});
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(135.695915, 34.692792, 45000.0)});
viewer.dataSources.add(Cesium.KmlDataSource.load('kml/ikoma4.kml'));
