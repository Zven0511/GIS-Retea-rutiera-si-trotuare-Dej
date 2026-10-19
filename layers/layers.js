ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([403543.936831, 619536.345931, 420915.751317, 631137.184758]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Drumneasfaltat_3 = new ol.format.GeoJSON();
var features_Drumneasfaltat_3 = format_Drumneasfaltat_3.readFeatures(json_Drumneasfaltat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Drumneasfaltat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drumneasfaltat_3.addFeatures(features_Drumneasfaltat_3);
var lyr_Drumneasfaltat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drumneasfaltat_3, 
                style: style_Drumneasfaltat_3,
                popuplayertitle: 'Drum neasfaltat',
                interactive: true,
                title: '<img src="styles/legend/Drumneasfaltat_3.png" /> Drum neasfaltat'
            });
var format_Drum_4 = new ol.format.GeoJSON();
var features_Drum_4 = format_Drum_4.readFeatures(json_Drum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Drum_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drum_4.addFeatures(features_Drum_4);
var lyr_Drum_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drum_4, 
                style: style_Drum_4,
                popuplayertitle: 'Drum',
                interactive: true,
                title: '<img src="styles/legend/Drum_4.png" /> Drum'
            });
var format_Trotuar_5 = new ol.format.GeoJSON();
var features_Trotuar_5 = format_Trotuar_5.readFeatures(json_Trotuar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Trotuar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trotuar_5.addFeatures(features_Trotuar_5);
var lyr_Trotuar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trotuar_5, 
                style: style_Trotuar_5,
                popuplayertitle: 'Trotuar',
                interactive: true,
                title: '<img src="styles/legend/Trotuar_5.png" /> Trotuar'
            });
var format_Axdrumneasfaltat_6 = new ol.format.GeoJSON();
var features_Axdrumneasfaltat_6 = format_Axdrumneasfaltat_6.readFeatures(json_Axdrumneasfaltat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Axdrumneasfaltat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Axdrumneasfaltat_6.addFeatures(features_Axdrumneasfaltat_6);
var lyr_Axdrumneasfaltat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Axdrumneasfaltat_6, 
                style: style_Axdrumneasfaltat_6,
                popuplayertitle: 'Ax drum neasfaltat',
                interactive: true,
                title: '<img src="styles/legend/Axdrumneasfaltat_6.png" /> Ax drum neasfaltat'
            });
var format_Axdrum_7 = new ol.format.GeoJSON();
var features_Axdrum_7 = format_Axdrum_7.readFeatures(json_Axdrum_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Axdrum_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Axdrum_7.addFeatures(features_Axdrum_7);
var lyr_Axdrum_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Axdrum_7, 
                style: style_Axdrum_7,
                popuplayertitle: 'Ax drum',
                interactive: true,
                title: '<img src="styles/legend/Axdrum_7.png" /> Ax drum'
            });
var format_Drumuri_RENNS_8 = new ol.format.GeoJSON();
var features_Drumuri_RENNS_8 = format_Drumuri_RENNS_8.readFeatures(json_Drumuri_RENNS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Drumuri_RENNS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drumuri_RENNS_8.addFeatures(features_Drumuri_RENNS_8);
var lyr_Drumuri_RENNS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drumuri_RENNS_8,
maxResolution:2.8004466152261966,
 
                style: style_Drumuri_RENNS_8,
                popuplayertitle: 'Drumuri_RENNS',
                interactive: true,
                title: '<img src="styles/legend/Drumuri_RENNS_8.png" /> Drumuri_RENNS'
            });
var format_Adrese_Numereadministrative_RENNS_9 = new ol.format.GeoJSON();
var features_Adrese_Numereadministrative_RENNS_9 = format_Adrese_Numereadministrative_RENNS_9.readFeatures(json_Adrese_Numereadministrative_RENNS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Adrese_Numereadministrative_RENNS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adrese_Numereadministrative_RENNS_9.addFeatures(features_Adrese_Numereadministrative_RENNS_9);
var lyr_Adrese_Numereadministrative_RENNS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adrese_Numereadministrative_RENNS_9,
maxResolution:1.4002233076130983,
 
                style: style_Adrese_Numereadministrative_RENNS_9,
                popuplayertitle: 'Adrese_Numere administrative_RENNS',
                interactive: true,
                title: '<img src="styles/legend/Adrese_Numereadministrative_RENNS_9.png" /> Adrese_Numere administrative_RENNS'
            });
var group_RENNSPrimariaMunicipiuluiDejprimite = new ol.layer.Group({
                                layers: [lyr_Drumuri_RENNS_8,lyr_Adrese_Numereadministrative_RENNS_9,],
                                fold: 'open',
                                title: 'RENNS Primaria Municipiului Dej - primite'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Drumneasfaltat_3.setVisible(true);lyr_Drum_4.setVisible(true);lyr_Trotuar_5.setVisible(true);lyr_Axdrumneasfaltat_6.setVisible(true);lyr_Axdrum_7.setVisible(true);lyr_Drumuri_RENNS_8.setVisible(true);lyr_Adrese_Numereadministrative_RENNS_9.setVisible(true);
var layersList = [group_Basemaps,lyr_Drumneasfaltat_3,lyr_Drum_4,lyr_Trotuar_5,lyr_Axdrumneasfaltat_6,lyr_Axdrum_7,group_RENNSPrimariaMunicipiuluiDejprimite];
lyr_Drumneasfaltat_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Strada': 'Strada', 'Supr.[mp]': 'Supr.[mp]', });
lyr_Drum_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Strada': 'Strada', 'Supr.[mp]': 'Supr.[mp]', });
lyr_Trotuar_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Strada': 'Strada', 'Supr.[mp]': 'Supr.[mp]', });
lyr_Axdrumneasfaltat_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Lungime[m]': 'Lungime[m]', 'Strada': 'Strada', });
lyr_Axdrum_7.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Lungime[m]': 'Lungime[m]', 'Strada': 'Strada', });
lyr_Drumuri_RENNS_8.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'TipArtera': 'TipArtera', 'DenumireAr': 'DenumireAr', 'DenumireLo': 'DenumireLo', 'TipPersoan': 'TipPersoan', 'SIRUTA': 'SIRUTA', 'Observatii': 'Observatii', });
lyr_Adrese_Numereadministrative_RENNS_9.set('fieldAliases', {'DenumireLo': 'DenumireLo', 'DenumireAr': 'DenumireAr', 'NumarAdmin': 'NumarAdmin', 'NumarAdm_1': 'NumarAdm_1', 'SIRUTA': 'SIRUTA', 'TipArtera': 'TipArtera', 'TipPersoan': 'TipPersoan', 'Observatii': 'Observatii', 'Obs_CAEC': 'Obs_CAEC', });
lyr_Drumneasfaltat_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Strada': 'TextEdit', 'Supr.[mp]': '', });
lyr_Drum_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Strada': 'TextEdit', 'Supr.[mp]': '', });
lyr_Trotuar_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Strada': 'TextEdit', 'Supr.[mp]': '', });
lyr_Axdrumneasfaltat_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Lungime[m]': 'TextEdit', 'Strada': 'TextEdit', });
lyr_Axdrum_7.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Lungime[m]': 'TextEdit', 'Strada': 'TextEdit', });
lyr_Drumuri_RENNS_8.set('fieldImages', {'Shape_Leng': 'TextEdit', 'TipArtera': 'TextEdit', 'DenumireAr': 'TextEdit', 'DenumireLo': 'TextEdit', 'TipPersoan': 'TextEdit', 'SIRUTA': 'TextEdit', 'Observatii': 'TextEdit', });
lyr_Adrese_Numereadministrative_RENNS_9.set('fieldImages', {'DenumireLo': 'TextEdit', 'DenumireAr': 'TextEdit', 'NumarAdmin': 'TextEdit', 'NumarAdm_1': 'TextEdit', 'SIRUTA': 'TextEdit', 'TipArtera': 'TextEdit', 'TipPersoan': 'TextEdit', 'Observatii': 'TextEdit', 'Obs_CAEC': 'TextEdit', });
lyr_Drumneasfaltat_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Strada': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_Drum_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Strada': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_Trotuar_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Strada': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_Axdrumneasfaltat_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Lungime[m]': 'inline label - visible with data', 'Strada': 'inline label - visible with data', });
lyr_Axdrum_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Lungime[m]': 'inline label - visible with data', 'Strada': 'inline label - visible with data', });
lyr_Drumuri_RENNS_8.set('fieldLabels', {'Shape_Leng': 'inline label - visible with data', 'TipArtera': 'inline label - visible with data', 'DenumireAr': 'inline label - visible with data', 'DenumireLo': 'inline label - visible with data', 'TipPersoan': 'inline label - visible with data', 'SIRUTA': 'inline label - visible with data', 'Observatii': 'inline label - visible with data', });
lyr_Adrese_Numereadministrative_RENNS_9.set('fieldLabels', {'DenumireLo': 'inline label - visible with data', 'DenumireAr': 'inline label - visible with data', 'NumarAdmin': 'inline label - visible with data', 'NumarAdm_1': 'inline label - visible with data', 'SIRUTA': 'inline label - visible with data', 'TipArtera': 'inline label - visible with data', 'TipPersoan': 'inline label - visible with data', 'Observatii': 'inline label - visible with data', 'Obs_CAEC': 'inline label - visible with data', });
lyr_Adrese_Numereadministrative_RENNS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});