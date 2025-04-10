ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([9.639818, 44.499536, 10.223563, 44.806694]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_am_v_alberi_pt_ValTaro_ValCeno_1 = new ol.format.GeoJSON();
var features_am_v_alberi_pt_ValTaro_ValCeno_1 = format_am_v_alberi_pt_ValTaro_ValCeno_1.readFeatures(json_am_v_alberi_pt_ValTaro_ValCeno_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_am_v_alberi_pt_ValTaro_ValCeno_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_am_v_alberi_pt_ValTaro_ValCeno_1.addFeatures(features_am_v_alberi_pt_ValTaro_ValCeno_1);
var lyr_am_v_alberi_pt_ValTaro_ValCeno_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_am_v_alberi_pt_ValTaro_ValCeno_1, 
                style: style_am_v_alberi_pt_ValTaro_ValCeno_1,
                popuplayertitle: 'am_v_alberi_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/am_v_alberi_pt_ValTaro_ValCeno_1.png" /> am_v_alberi_pt_ValTaro_ValCeno'
            });
var format_a_v_scavi_pl_ValTaro_ValCeno_2 = new ol.format.GeoJSON();
var features_a_v_scavi_pl_ValTaro_ValCeno_2 = format_a_v_scavi_pl_ValTaro_ValCeno_2.readFeatures(json_a_v_scavi_pl_ValTaro_ValCeno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_a_v_scavi_pl_ValTaro_ValCeno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a_v_scavi_pl_ValTaro_ValCeno_2.addFeatures(features_a_v_scavi_pl_ValTaro_ValCeno_2);
var lyr_a_v_scavi_pl_ValTaro_ValCeno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a_v_scavi_pl_ValTaro_ValCeno_2, 
                style: style_a_v_scavi_pl_ValTaro_ValCeno_2,
                popuplayertitle: 'a_v_scavi_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/a_v_scavi_pl_ValTaro_ValCeno_2.png" /> a_v_scavi_pl_ValTaro_ValCeno'
            });
var format_a_v_scavi_ln_ValTaro_ValCeno_3 = new ol.format.GeoJSON();
var features_a_v_scavi_ln_ValTaro_ValCeno_3 = format_a_v_scavi_ln_ValTaro_ValCeno_3.readFeatures(json_a_v_scavi_ln_ValTaro_ValCeno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_a_v_scavi_ln_ValTaro_ValCeno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a_v_scavi_ln_ValTaro_ValCeno_3.addFeatures(features_a_v_scavi_ln_ValTaro_ValCeno_3);
var lyr_a_v_scavi_ln_ValTaro_ValCeno_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a_v_scavi_ln_ValTaro_ValCeno_3, 
                style: style_a_v_scavi_ln_ValTaro_ValCeno_3,
                popuplayertitle: 'a_v_scavi_ln_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/a_v_scavi_ln_ValTaro_ValCeno_3.png" /> a_v_scavi_ln_ValTaro_ValCeno'
            });
var format_a_v_scavi_pt_ValTaro_ValCeno_4 = new ol.format.GeoJSON();
var features_a_v_scavi_pt_ValTaro_ValCeno_4 = format_a_v_scavi_pt_ValTaro_ValCeno_4.readFeatures(json_a_v_scavi_pt_ValTaro_ValCeno_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_a_v_scavi_pt_ValTaro_ValCeno_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a_v_scavi_pt_ValTaro_ValCeno_4.addFeatures(features_a_v_scavi_pt_ValTaro_ValCeno_4);
var lyr_a_v_scavi_pt_ValTaro_ValCeno_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_a_v_scavi_pt_ValTaro_ValCeno_4, 
                style: style_a_v_scavi_pt_ValTaro_ValCeno_4,
                popuplayertitle: 'a_v_scavi_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/a_v_scavi_pt_ValTaro_ValCeno_4.png" /> a_v_scavi_pt_ValTaro_ValCeno'
            });
var format_ba_v_vincoli_pl_ValTaro_ValCeno_5 = new ol.format.GeoJSON();
var features_ba_v_vincoli_pl_ValTaro_ValCeno_5 = format_ba_v_vincoli_pl_ValTaro_ValCeno_5.readFeatures(json_ba_v_vincoli_pl_ValTaro_ValCeno_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ba_v_vincoli_pl_ValTaro_ValCeno_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ba_v_vincoli_pl_ValTaro_ValCeno_5.addFeatures(features_ba_v_vincoli_pl_ValTaro_ValCeno_5);
var lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ba_v_vincoli_pl_ValTaro_ValCeno_5, 
                style: style_ba_v_vincoli_pl_ValTaro_ValCeno_5,
                popuplayertitle: 'ba_v_vincoli_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/ba_v_vincoli_pl_ValTaro_ValCeno_5.png" /> ba_v_vincoli_pl_ValTaro_ValCeno'
            });
var format_ba_v_vincoli_pt_ValTaro_ValCeno_6 = new ol.format.GeoJSON();
var features_ba_v_vincoli_pt_ValTaro_ValCeno_6 = format_ba_v_vincoli_pt_ValTaro_ValCeno_6.readFeatures(json_ba_v_vincoli_pt_ValTaro_ValCeno_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ba_v_vincoli_pt_ValTaro_ValCeno_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ba_v_vincoli_pt_ValTaro_ValCeno_6.addFeatures(features_ba_v_vincoli_pt_ValTaro_ValCeno_6);
var lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ba_v_vincoli_pt_ValTaro_ValCeno_6, 
                style: style_ba_v_vincoli_pt_ValTaro_ValCeno_6,
                popuplayertitle: 'ba_v_vincoli_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/ba_v_vincoli_pt_ValTaro_ValCeno_6.png" /> ba_v_vincoli_pt_ValTaro_ValCeno'
            });
var format_ba_v_vincoli_tur_ValTaro_ValCeno_7 = new ol.format.GeoJSON();
var features_ba_v_vincoli_tur_ValTaro_ValCeno_7 = format_ba_v_vincoli_tur_ValTaro_ValCeno_7.readFeatures(json_ba_v_vincoli_tur_ValTaro_ValCeno_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ba_v_vincoli_tur_ValTaro_ValCeno_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ba_v_vincoli_tur_ValTaro_ValCeno_7.addFeatures(features_ba_v_vincoli_tur_ValTaro_ValCeno_7);
var lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ba_v_vincoli_tur_ValTaro_ValCeno_7, 
                style: style_ba_v_vincoli_tur_ValTaro_ValCeno_7,
                popuplayertitle: 'ba_v_vincoli_tur_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/ba_v_vincoli_tur_ValTaro_ValCeno_7.png" /> ba_v_vincoli_tur_ValTaro_ValCeno'
            });
var format_bt_v_complessi_pt_ValTaro_ValCeno_8 = new ol.format.GeoJSON();
var features_bt_v_complessi_pt_ValTaro_ValCeno_8 = format_bt_v_complessi_pt_ValTaro_ValCeno_8.readFeatures(json_bt_v_complessi_pt_ValTaro_ValCeno_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bt_v_complessi_pt_ValTaro_ValCeno_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_v_complessi_pt_ValTaro_ValCeno_8.addFeatures(features_bt_v_complessi_pt_ValTaro_ValCeno_8);
var lyr_bt_v_complessi_pt_ValTaro_ValCeno_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_v_complessi_pt_ValTaro_ValCeno_8, 
                style: style_bt_v_complessi_pt_ValTaro_ValCeno_8,
                popuplayertitle: 'bt_v_complessi_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/bt_v_complessi_pt_ValTaro_ValCeno_8.png" /> bt_v_complessi_pt_ValTaro_ValCeno'
            });
var format_rer_bp_laghi_pl_ValTaro_ValCeno_9 = new ol.format.GeoJSON();
var features_rer_bp_laghi_pl_ValTaro_ValCeno_9 = format_rer_bp_laghi_pl_ValTaro_ValCeno_9.readFeatures(json_rer_bp_laghi_pl_ValTaro_ValCeno_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_laghi_pl_ValTaro_ValCeno_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_laghi_pl_ValTaro_ValCeno_9.addFeatures(features_rer_bp_laghi_pl_ValTaro_ValCeno_9);
var lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_laghi_pl_ValTaro_ValCeno_9, 
                style: style_rer_bp_laghi_pl_ValTaro_ValCeno_9,
                popuplayertitle: 'rer_bp_laghi_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_laghi_pl_ValTaro_ValCeno_9.png" /> rer_bp_laghi_pl_ValTaro_ValCeno'
            });
var format_rer_bp_fiumi150_ValTaro_ValCeno_10 = new ol.format.GeoJSON();
var features_rer_bp_fiumi150_ValTaro_ValCeno_10 = format_rer_bp_fiumi150_ValTaro_ValCeno_10.readFeatures(json_rer_bp_fiumi150_ValTaro_ValCeno_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_fiumi150_ValTaro_ValCeno_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_fiumi150_ValTaro_ValCeno_10.addFeatures(features_rer_bp_fiumi150_ValTaro_ValCeno_10);
var lyr_rer_bp_fiumi150_ValTaro_ValCeno_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_fiumi150_ValTaro_ValCeno_10, 
                style: style_rer_bp_fiumi150_ValTaro_ValCeno_10,
                popuplayertitle: 'rer_bp_fiumi150_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_fiumi150_ValTaro_ValCeno_10.png" /> rer_bp_fiumi150_ValTaro_ValCeno'
            });
var format_rer_bp_fiumi_ln_ValTaro_ValCeno_11 = new ol.format.GeoJSON();
var features_rer_bp_fiumi_ln_ValTaro_ValCeno_11 = format_rer_bp_fiumi_ln_ValTaro_ValCeno_11.readFeatures(json_rer_bp_fiumi_ln_ValTaro_ValCeno_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_fiumi_ln_ValTaro_ValCeno_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_fiumi_ln_ValTaro_ValCeno_11.addFeatures(features_rer_bp_fiumi_ln_ValTaro_ValCeno_11);
var lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_fiumi_ln_ValTaro_ValCeno_11, 
                style: style_rer_bp_fiumi_ln_ValTaro_ValCeno_11,
                popuplayertitle: 'rer_bp_fiumi_ln_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_fiumi_ln_ValTaro_ValCeno_11.png" /> rer_bp_fiumi_ln_ValTaro_ValCeno'
            });
var format_rer_bp_fiumi_pl_ValTaro_ValCeno_12 = new ol.format.GeoJSON();
var features_rer_bp_fiumi_pl_ValTaro_ValCeno_12 = format_rer_bp_fiumi_pl_ValTaro_ValCeno_12.readFeatures(json_rer_bp_fiumi_pl_ValTaro_ValCeno_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_fiumi_pl_ValTaro_ValCeno_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_fiumi_pl_ValTaro_ValCeno_12.addFeatures(features_rer_bp_fiumi_pl_ValTaro_ValCeno_12);
var lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_fiumi_pl_ValTaro_ValCeno_12, 
                style: style_rer_bp_fiumi_pl_ValTaro_ValCeno_12,
                popuplayertitle: 'rer_bp_fiumi_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_fiumi_pl_ValTaro_ValCeno_12.png" /> rer_bp_fiumi_pl_ValTaro_ValCeno'
            });
var format_rer_bp_montagna_pl_ValTaro_ValCeno_13 = new ol.format.GeoJSON();
var features_rer_bp_montagna_pl_ValTaro_ValCeno_13 = format_rer_bp_montagna_pl_ValTaro_ValCeno_13.readFeatures(json_rer_bp_montagna_pl_ValTaro_ValCeno_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_montagna_pl_ValTaro_ValCeno_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_montagna_pl_ValTaro_ValCeno_13.addFeatures(features_rer_bp_montagna_pl_ValTaro_ValCeno_13);
var lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_montagna_pl_ValTaro_ValCeno_13, 
                style: style_rer_bp_montagna_pl_ValTaro_ValCeno_13,
                popuplayertitle: 'rer_bp_montagna_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_montagna_pl_ValTaro_ValCeno_13.png" /> rer_bp_montagna_pl_ValTaro_ValCeno'
            });
var format_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14 = new ol.format.GeoJSON();
var features_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14 = format_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.readFeatures(json_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.addFeatures(features_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14);
var lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14, 
                style: style_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14,
                popuplayertitle: 'rer_bp_circhiglaciali_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.png" /> rer_bp_circhiglaciali_pl_ValTaro_ValCeno'
            });
var format_rer_parchi_riserve_pl_ValTaro_ValCeno_15 = new ol.format.GeoJSON();
var features_rer_parchi_riserve_pl_ValTaro_ValCeno_15 = format_rer_parchi_riserve_pl_ValTaro_ValCeno_15.readFeatures(json_rer_parchi_riserve_pl_ValTaro_ValCeno_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_parchi_riserve_pl_ValTaro_ValCeno_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_parchi_riserve_pl_ValTaro_ValCeno_15.addFeatures(features_rer_parchi_riserve_pl_ValTaro_ValCeno_15);
var lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_parchi_riserve_pl_ValTaro_ValCeno_15, 
                style: style_rer_parchi_riserve_pl_ValTaro_ValCeno_15,
                popuplayertitle: 'rer_parchi_riserve_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_parchi_riserve_pl_ValTaro_ValCeno_15.png" /> rer_parchi_riserve_pl_ValTaro_ValCeno'
            });
var format_rer_bp_usc_pt_ValTaro_ValCeno_16 = new ol.format.GeoJSON();
var features_rer_bp_usc_pt_ValTaro_ValCeno_16 = format_rer_bp_usc_pt_ValTaro_ValCeno_16.readFeatures(json_rer_bp_usc_pt_ValTaro_ValCeno_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_usc_pt_ValTaro_ValCeno_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_usc_pt_ValTaro_ValCeno_16.addFeatures(features_rer_bp_usc_pt_ValTaro_ValCeno_16);
var lyr_rer_bp_usc_pt_ValTaro_ValCeno_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_usc_pt_ValTaro_ValCeno_16, 
                style: style_rer_bp_usc_pt_ValTaro_ValCeno_16,
                popuplayertitle: 'rer_bp_usc_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_usc_pt_ValTaro_ValCeno_16.png" /> rer_bp_usc_pt_ValTaro_ValCeno'
            });
var format_rer_bp_usc_pl_ValTaro_ValCeno_17 = new ol.format.GeoJSON();
var features_rer_bp_usc_pl_ValTaro_ValCeno_17 = format_rer_bp_usc_pl_ValTaro_ValCeno_17.readFeatures(json_rer_bp_usc_pl_ValTaro_ValCeno_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_usc_pl_ValTaro_ValCeno_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_usc_pl_ValTaro_ValCeno_17.addFeatures(features_rer_bp_usc_pl_ValTaro_ValCeno_17);
var lyr_rer_bp_usc_pl_ValTaro_ValCeno_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_usc_pl_ValTaro_ValCeno_17, 
                style: style_rer_bp_usc_pl_ValTaro_ValCeno_17,
                popuplayertitle: 'rer_bp_usc_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_usc_pl_ValTaro_ValCeno_17.png" /> rer_bp_usc_pl_ValTaro_ValCeno'
            });
var format_rer_bp_usccom_pl_ValTaro_ValCeno_18 = new ol.format.GeoJSON();
var features_rer_bp_usccom_pl_ValTaro_ValCeno_18 = format_rer_bp_usccom_pl_ValTaro_ValCeno_18.readFeatures(json_rer_bp_usccom_pl_ValTaro_ValCeno_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_usccom_pl_ValTaro_ValCeno_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_usccom_pl_ValTaro_ValCeno_18.addFeatures(features_rer_bp_usccom_pl_ValTaro_ValCeno_18);
var lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_usccom_pl_ValTaro_ValCeno_18, 
                style: style_rer_bp_usccom_pl_ValTaro_ValCeno_18,
                popuplayertitle: 'rer_bp_usccom_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_usccom_pl_ValTaro_ValCeno_18.png" /> rer_bp_usccom_pl_ValTaro_ValCeno'
            });
var format_rer_bp_imm_pl_ValTaro_ValCeno_19 = new ol.format.GeoJSON();
var features_rer_bp_imm_pl_ValTaro_ValCeno_19 = format_rer_bp_imm_pl_ValTaro_ValCeno_19.readFeatures(json_rer_bp_imm_pl_ValTaro_ValCeno_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rer_bp_imm_pl_ValTaro_ValCeno_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rer_bp_imm_pl_ValTaro_ValCeno_19.addFeatures(features_rer_bp_imm_pl_ValTaro_ValCeno_19);
var lyr_rer_bp_imm_pl_ValTaro_ValCeno_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rer_bp_imm_pl_ValTaro_ValCeno_19, 
                style: style_rer_bp_imm_pl_ValTaro_ValCeno_19,
                popuplayertitle: 'rer_bp_imm_pl_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/rer_bp_imm_pl_ValTaro_ValCeno_19.png" /> rer_bp_imm_pl_ValTaro_ValCeno'
            });
var format_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20 = new ol.format.GeoJSON();
var features_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20 = format_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.readFeatures(json_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.addFeatures(features_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20);
var lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20, 
                style: style_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20,
                popuplayertitle: 'bt_v_complessi_notutela_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.png" /> bt_v_complessi_notutela_pt_ValTaro_ValCeno'
            });
var format_tourer_pt_ValTaro_ValCeno_21 = new ol.format.GeoJSON();
var features_tourer_pt_ValTaro_ValCeno_21 = format_tourer_pt_ValTaro_ValCeno_21.readFeatures(json_tourer_pt_ValTaro_ValCeno_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tourer_pt_ValTaro_ValCeno_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourer_pt_ValTaro_ValCeno_21.addFeatures(features_tourer_pt_ValTaro_ValCeno_21);
var lyr_tourer_pt_ValTaro_ValCeno_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourer_pt_ValTaro_ValCeno_21, 
                style: style_tourer_pt_ValTaro_ValCeno_21,
                popuplayertitle: 'tourer_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/tourer_pt_ValTaro_ValCeno_21.png" /> tourer_pt_ValTaro_ValCeno'
            });
var format_ar_v_conservatori_pt_ValTaro_ValCeno_22 = new ol.format.GeoJSON();
var features_ar_v_conservatori_pt_ValTaro_ValCeno_22 = format_ar_v_conservatori_pt_ValTaro_ValCeno_22.readFeatures(json_ar_v_conservatori_pt_ValTaro_ValCeno_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ar_v_conservatori_pt_ValTaro_ValCeno_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ar_v_conservatori_pt_ValTaro_ValCeno_22.addFeatures(features_ar_v_conservatori_pt_ValTaro_ValCeno_22);
var lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ar_v_conservatori_pt_ValTaro_ValCeno_22, 
                style: style_ar_v_conservatori_pt_ValTaro_ValCeno_22,
                popuplayertitle: 'ar_v_conservatori_pt_ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/ar_v_conservatori_pt_ValTaro_ValCeno_22.png" /> ar_v_conservatori_pt_ValTaro_ValCeno'
            });
var format_ValTaro_ValCeno_23 = new ol.format.GeoJSON();
var features_ValTaro_ValCeno_23 = format_ValTaro_ValCeno_23.readFeatures(json_ValTaro_ValCeno_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ValTaro_ValCeno_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValTaro_ValCeno_23.addFeatures(features_ValTaro_ValCeno_23);
var lyr_ValTaro_ValCeno_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ValTaro_ValCeno_23, 
                style: style_ValTaro_ValCeno_23,
                popuplayertitle: 'ValTaro_ValCeno',
                interactive: true,
                title: '<img src="styles/legend/ValTaro_ValCeno_23.png" /> ValTaro_ValCeno'
            });
var format_varsi_other_24 = new ol.format.GeoJSON();
var features_varsi_other_24 = format_varsi_other_24.readFeatures(json_varsi_other_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_varsi_other_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varsi_other_24.addFeatures(features_varsi_other_24);
var lyr_varsi_other_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varsi_other_24, 
                style: style_varsi_other_24,
                popuplayertitle: 'varsi_other',
                interactive: true,
                title: '<img src="styles/legend/varsi_other_24.png" /> varsi_other'
            });
var format_034046_Varsi20241112T08Zmultipolygons_25 = new ol.format.GeoJSON();
var features_034046_Varsi20241112T08Zmultipolygons_25 = format_034046_Varsi20241112T08Zmultipolygons_25.readFeatures(json_034046_Varsi20241112T08Zmultipolygons_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034046_Varsi20241112T08Zmultipolygons_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034046_Varsi20241112T08Zmultipolygons_25.addFeatures(features_034046_Varsi20241112T08Zmultipolygons_25);
var lyr_034046_Varsi20241112T08Zmultipolygons_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034046_Varsi20241112T08Zmultipolygons_25, 
                style: style_034046_Varsi20241112T08Zmultipolygons_25,
                popuplayertitle: '034046_Varsi-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034046_Varsi20241112T08Zmultipolygons_25.png" /> 034046_Varsi-2024-11-12T08Z — multipolygons'
            });
var format_034046_Varsi20241112T08Zlines_26 = new ol.format.GeoJSON();
var features_034046_Varsi20241112T08Zlines_26 = format_034046_Varsi20241112T08Zlines_26.readFeatures(json_034046_Varsi20241112T08Zlines_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034046_Varsi20241112T08Zlines_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034046_Varsi20241112T08Zlines_26.addFeatures(features_034046_Varsi20241112T08Zlines_26);
var lyr_034046_Varsi20241112T08Zlines_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034046_Varsi20241112T08Zlines_26, 
                style: style_034046_Varsi20241112T08Zlines_26,
                popuplayertitle: '034046_Varsi-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034046_Varsi20241112T08Zlines_26.png" /> 034046_Varsi-2024-11-12T08Z — lines'
            });
var format_034046_Varsi20241112T08Zmultilinestrings_27 = new ol.format.GeoJSON();
var features_034046_Varsi20241112T08Zmultilinestrings_27 = format_034046_Varsi20241112T08Zmultilinestrings_27.readFeatures(json_034046_Varsi20241112T08Zmultilinestrings_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034046_Varsi20241112T08Zmultilinestrings_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034046_Varsi20241112T08Zmultilinestrings_27.addFeatures(features_034046_Varsi20241112T08Zmultilinestrings_27);
var lyr_034046_Varsi20241112T08Zmultilinestrings_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034046_Varsi20241112T08Zmultilinestrings_27, 
                style: style_034046_Varsi20241112T08Zmultilinestrings_27,
                popuplayertitle: '034046_Varsi-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034046_Varsi20241112T08Zmultilinestrings_27.png" /> 034046_Varsi-2024-11-12T08Z — multilinestrings'
            });
var format_034046_Varsi20241112T08Zpoints_28 = new ol.format.GeoJSON();
var features_034046_Varsi20241112T08Zpoints_28 = format_034046_Varsi20241112T08Zpoints_28.readFeatures(json_034046_Varsi20241112T08Zpoints_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034046_Varsi20241112T08Zpoints_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034046_Varsi20241112T08Zpoints_28.addFeatures(features_034046_Varsi20241112T08Zpoints_28);
var lyr_034046_Varsi20241112T08Zpoints_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034046_Varsi20241112T08Zpoints_28, 
                style: style_034046_Varsi20241112T08Zpoints_28,
                popuplayertitle: '034046_Varsi-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034046_Varsi20241112T08Zpoints_28.png" /> 034046_Varsi-2024-11-12T08Z — points'
            });
var format_varano_other_29 = new ol.format.GeoJSON();
var features_varano_other_29 = format_varano_other_29.readFeatures(json_varano_other_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_varano_other_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varano_other_29.addFeatures(features_varano_other_29);
var lyr_varano_other_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varano_other_29, 
                style: style_varano_other_29,
                popuplayertitle: 'varano_other',
                interactive: true,
                title: '<img src="styles/legend/varano_other_29.png" /> varano_other'
            });
var format_034045_Varano_de_Melegari20250114T14Zmultipolygons_30 = new ol.format.GeoJSON();
var features_034045_Varano_de_Melegari20250114T14Zmultipolygons_30 = format_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.readFeatures(json_034045_Varano_de_Melegari20250114T14Zmultipolygons_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034045_Varano_de_Melegari20250114T14Zmultipolygons_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.addFeatures(features_034045_Varano_de_Melegari20250114T14Zmultipolygons_30);
var lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034045_Varano_de_Melegari20250114T14Zmultipolygons_30, 
                style: style_034045_Varano_de_Melegari20250114T14Zmultipolygons_30,
                popuplayertitle: '034045_Varano_de\'_Melegari-2025-01-14T14Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034045_Varano_de_Melegari20250114T14Zmultipolygons_30.png" /> 034045_Varano_de\'_Melegari-2025-01-14T14Z — multipolygons'
            });
var format_034045_Varano_de_Melegari20250114T14Zlines_31 = new ol.format.GeoJSON();
var features_034045_Varano_de_Melegari20250114T14Zlines_31 = format_034045_Varano_de_Melegari20250114T14Zlines_31.readFeatures(json_034045_Varano_de_Melegari20250114T14Zlines_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034045_Varano_de_Melegari20250114T14Zlines_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034045_Varano_de_Melegari20250114T14Zlines_31.addFeatures(features_034045_Varano_de_Melegari20250114T14Zlines_31);
var lyr_034045_Varano_de_Melegari20250114T14Zlines_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034045_Varano_de_Melegari20250114T14Zlines_31, 
                style: style_034045_Varano_de_Melegari20250114T14Zlines_31,
                popuplayertitle: '034045_Varano_de\'_Melegari-2025-01-14T14Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034045_Varano_de_Melegari20250114T14Zlines_31.png" /> 034045_Varano_de\'_Melegari-2025-01-14T14Z — lines'
            });
var format_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32 = new ol.format.GeoJSON();
var features_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32 = format_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.readFeatures(json_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.addFeatures(features_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32);
var lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32, 
                style: style_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32,
                popuplayertitle: '034045_Varano_de\'_Melegari-2025-01-14T14Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.png" /> 034045_Varano_de\'_Melegari-2025-01-14T14Z — multilinestrings'
            });
var format_034045_Varano_de_Melegari20250114T14Zpoints_33 = new ol.format.GeoJSON();
var features_034045_Varano_de_Melegari20250114T14Zpoints_33 = format_034045_Varano_de_Melegari20250114T14Zpoints_33.readFeatures(json_034045_Varano_de_Melegari20250114T14Zpoints_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034045_Varano_de_Melegari20250114T14Zpoints_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034045_Varano_de_Melegari20250114T14Zpoints_33.addFeatures(features_034045_Varano_de_Melegari20250114T14Zpoints_33);
var lyr_034045_Varano_de_Melegari20250114T14Zpoints_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034045_Varano_de_Melegari20250114T14Zpoints_33, 
                style: style_034045_Varano_de_Melegari20250114T14Zpoints_33,
                popuplayertitle: '034045_Varano_de\'_Melegari-2025-01-14T14Z — points',
                interactive: true,
                title: '<img src="styles/legend/034045_Varano_de_Melegari20250114T14Zpoints_33.png" /> 034045_Varano_de\'_Melegari-2025-01-14T14Z — points'
            });
var format_034044_Valmozzola20241112T08Zmultipolygons_34 = new ol.format.GeoJSON();
var features_034044_Valmozzola20241112T08Zmultipolygons_34 = format_034044_Valmozzola20241112T08Zmultipolygons_34.readFeatures(json_034044_Valmozzola20241112T08Zmultipolygons_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034044_Valmozzola20241112T08Zmultipolygons_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034044_Valmozzola20241112T08Zmultipolygons_34.addFeatures(features_034044_Valmozzola20241112T08Zmultipolygons_34);
var lyr_034044_Valmozzola20241112T08Zmultipolygons_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034044_Valmozzola20241112T08Zmultipolygons_34, 
                style: style_034044_Valmozzola20241112T08Zmultipolygons_34,
                popuplayertitle: '034044_Valmozzola-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034044_Valmozzola20241112T08Zmultipolygons_34.png" /> 034044_Valmozzola-2024-11-12T08Z — multipolygons'
            });
var format_034044_Valmozzola20241112T08Zlines_35 = new ol.format.GeoJSON();
var features_034044_Valmozzola20241112T08Zlines_35 = format_034044_Valmozzola20241112T08Zlines_35.readFeatures(json_034044_Valmozzola20241112T08Zlines_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034044_Valmozzola20241112T08Zlines_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034044_Valmozzola20241112T08Zlines_35.addFeatures(features_034044_Valmozzola20241112T08Zlines_35);
var lyr_034044_Valmozzola20241112T08Zlines_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034044_Valmozzola20241112T08Zlines_35, 
                style: style_034044_Valmozzola20241112T08Zlines_35,
                popuplayertitle: '034044_Valmozzola-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034044_Valmozzola20241112T08Zlines_35.png" /> 034044_Valmozzola-2024-11-12T08Z — lines'
            });
var format_034044_Valmozzola20241112T08Zmultilinestrings_36 = new ol.format.GeoJSON();
var features_034044_Valmozzola20241112T08Zmultilinestrings_36 = format_034044_Valmozzola20241112T08Zmultilinestrings_36.readFeatures(json_034044_Valmozzola20241112T08Zmultilinestrings_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034044_Valmozzola20241112T08Zmultilinestrings_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034044_Valmozzola20241112T08Zmultilinestrings_36.addFeatures(features_034044_Valmozzola20241112T08Zmultilinestrings_36);
var lyr_034044_Valmozzola20241112T08Zmultilinestrings_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034044_Valmozzola20241112T08Zmultilinestrings_36, 
                style: style_034044_Valmozzola20241112T08Zmultilinestrings_36,
                popuplayertitle: '034044_Valmozzola-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034044_Valmozzola20241112T08Zmultilinestrings_36.png" /> 034044_Valmozzola-2024-11-12T08Z — multilinestrings'
            });
var format_034044_Valmozzola20241112T08Zpoints_37 = new ol.format.GeoJSON();
var features_034044_Valmozzola20241112T08Zpoints_37 = format_034044_Valmozzola20241112T08Zpoints_37.readFeatures(json_034044_Valmozzola20241112T08Zpoints_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034044_Valmozzola20241112T08Zpoints_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034044_Valmozzola20241112T08Zpoints_37.addFeatures(features_034044_Valmozzola20241112T08Zpoints_37);
var lyr_034044_Valmozzola20241112T08Zpoints_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034044_Valmozzola20241112T08Zpoints_37, 
                style: style_034044_Valmozzola20241112T08Zpoints_37,
                popuplayertitle: '034044_Valmozzola-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034044_Valmozzola20241112T08Zpoints_37.png" /> 034044_Valmozzola-2024-11-12T08Z — points'
            });
var format_tornolo_other_38 = new ol.format.GeoJSON();
var features_tornolo_other_38 = format_tornolo_other_38.readFeatures(json_tornolo_other_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tornolo_other_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tornolo_other_38.addFeatures(features_tornolo_other_38);
var lyr_tornolo_other_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tornolo_other_38, 
                style: style_tornolo_other_38,
                popuplayertitle: 'tornolo_other',
                interactive: true,
                title: '<img src="styles/legend/tornolo_other_38.png" /> tornolo_other'
            });
var format_034040_Tornolo20241112T08Zmultipolygons_39 = new ol.format.GeoJSON();
var features_034040_Tornolo20241112T08Zmultipolygons_39 = format_034040_Tornolo20241112T08Zmultipolygons_39.readFeatures(json_034040_Tornolo20241112T08Zmultipolygons_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034040_Tornolo20241112T08Zmultipolygons_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034040_Tornolo20241112T08Zmultipolygons_39.addFeatures(features_034040_Tornolo20241112T08Zmultipolygons_39);
var lyr_034040_Tornolo20241112T08Zmultipolygons_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034040_Tornolo20241112T08Zmultipolygons_39, 
                style: style_034040_Tornolo20241112T08Zmultipolygons_39,
                popuplayertitle: '034040_Tornolo-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034040_Tornolo20241112T08Zmultipolygons_39.png" /> 034040_Tornolo-2024-11-12T08Z — multipolygons'
            });
var format_034040_Tornolo20241112T08Zlines_40 = new ol.format.GeoJSON();
var features_034040_Tornolo20241112T08Zlines_40 = format_034040_Tornolo20241112T08Zlines_40.readFeatures(json_034040_Tornolo20241112T08Zlines_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034040_Tornolo20241112T08Zlines_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034040_Tornolo20241112T08Zlines_40.addFeatures(features_034040_Tornolo20241112T08Zlines_40);
var lyr_034040_Tornolo20241112T08Zlines_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034040_Tornolo20241112T08Zlines_40, 
                style: style_034040_Tornolo20241112T08Zlines_40,
                popuplayertitle: '034040_Tornolo-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034040_Tornolo20241112T08Zlines_40.png" /> 034040_Tornolo-2024-11-12T08Z — lines'
            });
var format_034040_Tornolo20241112T08Zmultilinestrings_41 = new ol.format.GeoJSON();
var features_034040_Tornolo20241112T08Zmultilinestrings_41 = format_034040_Tornolo20241112T08Zmultilinestrings_41.readFeatures(json_034040_Tornolo20241112T08Zmultilinestrings_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034040_Tornolo20241112T08Zmultilinestrings_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034040_Tornolo20241112T08Zmultilinestrings_41.addFeatures(features_034040_Tornolo20241112T08Zmultilinestrings_41);
var lyr_034040_Tornolo20241112T08Zmultilinestrings_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034040_Tornolo20241112T08Zmultilinestrings_41, 
                style: style_034040_Tornolo20241112T08Zmultilinestrings_41,
                popuplayertitle: '034040_Tornolo-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034040_Tornolo20241112T08Zmultilinestrings_41.png" /> 034040_Tornolo-2024-11-12T08Z — multilinestrings'
            });
var format_034040_Tornolo20241112T08Zpoints_42 = new ol.format.GeoJSON();
var features_034040_Tornolo20241112T08Zpoints_42 = format_034040_Tornolo20241112T08Zpoints_42.readFeatures(json_034040_Tornolo20241112T08Zpoints_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034040_Tornolo20241112T08Zpoints_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034040_Tornolo20241112T08Zpoints_42.addFeatures(features_034040_Tornolo20241112T08Zpoints_42);
var lyr_034040_Tornolo20241112T08Zpoints_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034040_Tornolo20241112T08Zpoints_42, 
                style: style_034040_Tornolo20241112T08Zpoints_42,
                popuplayertitle: '034040_Tornolo-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034040_Tornolo20241112T08Zpoints_42.png" /> 034040_Tornolo-2024-11-12T08Z — points'
            });
var format_034035_Solignano20241112T08Zmultipolygons_43 = new ol.format.GeoJSON();
var features_034035_Solignano20241112T08Zmultipolygons_43 = format_034035_Solignano20241112T08Zmultipolygons_43.readFeatures(json_034035_Solignano20241112T08Zmultipolygons_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034035_Solignano20241112T08Zmultipolygons_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034035_Solignano20241112T08Zmultipolygons_43.addFeatures(features_034035_Solignano20241112T08Zmultipolygons_43);
var lyr_034035_Solignano20241112T08Zmultipolygons_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034035_Solignano20241112T08Zmultipolygons_43, 
                style: style_034035_Solignano20241112T08Zmultipolygons_43,
                popuplayertitle: '034035_Solignano-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034035_Solignano20241112T08Zmultipolygons_43.png" /> 034035_Solignano-2024-11-12T08Z — multipolygons'
            });
var format_034035_Solignano20241112T08Zlines_44 = new ol.format.GeoJSON();
var features_034035_Solignano20241112T08Zlines_44 = format_034035_Solignano20241112T08Zlines_44.readFeatures(json_034035_Solignano20241112T08Zlines_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034035_Solignano20241112T08Zlines_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034035_Solignano20241112T08Zlines_44.addFeatures(features_034035_Solignano20241112T08Zlines_44);
var lyr_034035_Solignano20241112T08Zlines_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034035_Solignano20241112T08Zlines_44, 
                style: style_034035_Solignano20241112T08Zlines_44,
                popuplayertitle: '034035_Solignano-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034035_Solignano20241112T08Zlines_44.png" /> 034035_Solignano-2024-11-12T08Z — lines'
            });
var format_034035_Solignano20241112T08Zmultilinestrings_45 = new ol.format.GeoJSON();
var features_034035_Solignano20241112T08Zmultilinestrings_45 = format_034035_Solignano20241112T08Zmultilinestrings_45.readFeatures(json_034035_Solignano20241112T08Zmultilinestrings_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034035_Solignano20241112T08Zmultilinestrings_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034035_Solignano20241112T08Zmultilinestrings_45.addFeatures(features_034035_Solignano20241112T08Zmultilinestrings_45);
var lyr_034035_Solignano20241112T08Zmultilinestrings_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034035_Solignano20241112T08Zmultilinestrings_45, 
                style: style_034035_Solignano20241112T08Zmultilinestrings_45,
                popuplayertitle: '034035_Solignano-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034035_Solignano20241112T08Zmultilinestrings_45.png" /> 034035_Solignano-2024-11-12T08Z — multilinestrings'
            });
var format_034035_Solignano20241112T08Zpoints_46 = new ol.format.GeoJSON();
var features_034035_Solignano20241112T08Zpoints_46 = format_034035_Solignano20241112T08Zpoints_46.readFeatures(json_034035_Solignano20241112T08Zpoints_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034035_Solignano20241112T08Zpoints_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034035_Solignano20241112T08Zpoints_46.addFeatures(features_034035_Solignano20241112T08Zpoints_46);
var lyr_034035_Solignano20241112T08Zpoints_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034035_Solignano20241112T08Zpoints_46, 
                style: style_034035_Solignano20241112T08Zpoints_46,
                popuplayertitle: '034035_Solignano-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034035_Solignano20241112T08Zpoints_46.png" /> 034035_Solignano-2024-11-12T08Z — points'
            });
var format_pellegrino_other_47 = new ol.format.GeoJSON();
var features_pellegrino_other_47 = format_pellegrino_other_47.readFeatures(json_pellegrino_other_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pellegrino_other_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pellegrino_other_47.addFeatures(features_pellegrino_other_47);
var lyr_pellegrino_other_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pellegrino_other_47, 
                style: style_pellegrino_other_47,
                popuplayertitle: 'pellegrino_other',
                interactive: true,
                title: '<img src="styles/legend/pellegrino_other_47.png" /> pellegrino_other'
            });
var format_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48 = new ol.format.GeoJSON();
var features_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48 = format_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.readFeatures(json_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.addFeatures(features_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48);
var lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48, 
                style: style_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48,
                popuplayertitle: '034028_Pellegrino_Parmense-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.png" /> 034028_Pellegrino_Parmense-2024-11-12T08Z — multipolygons'
            });
var format_034028_Pellegrino_Parmense20241112T08Zlines_49 = new ol.format.GeoJSON();
var features_034028_Pellegrino_Parmense20241112T08Zlines_49 = format_034028_Pellegrino_Parmense20241112T08Zlines_49.readFeatures(json_034028_Pellegrino_Parmense20241112T08Zlines_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034028_Pellegrino_Parmense20241112T08Zlines_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034028_Pellegrino_Parmense20241112T08Zlines_49.addFeatures(features_034028_Pellegrino_Parmense20241112T08Zlines_49);
var lyr_034028_Pellegrino_Parmense20241112T08Zlines_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034028_Pellegrino_Parmense20241112T08Zlines_49, 
                style: style_034028_Pellegrino_Parmense20241112T08Zlines_49,
                popuplayertitle: '034028_Pellegrino_Parmense-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034028_Pellegrino_Parmense20241112T08Zlines_49.png" /> 034028_Pellegrino_Parmense-2024-11-12T08Z — lines'
            });
var format_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50 = new ol.format.GeoJSON();
var features_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50 = format_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.readFeatures(json_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.addFeatures(features_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50);
var lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50, 
                style: style_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50,
                popuplayertitle: '034028_Pellegrino_Parmense-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.png" /> 034028_Pellegrino_Parmense-2024-11-12T08Z — multilinestrings'
            });
var format_034028_Pellegrino_Parmense20241112T08Zpoints_51 = new ol.format.GeoJSON();
var features_034028_Pellegrino_Parmense20241112T08Zpoints_51 = format_034028_Pellegrino_Parmense20241112T08Zpoints_51.readFeatures(json_034028_Pellegrino_Parmense20241112T08Zpoints_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034028_Pellegrino_Parmense20241112T08Zpoints_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034028_Pellegrino_Parmense20241112T08Zpoints_51.addFeatures(features_034028_Pellegrino_Parmense20241112T08Zpoints_51);
var lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034028_Pellegrino_Parmense20241112T08Zpoints_51, 
                style: style_034028_Pellegrino_Parmense20241112T08Zpoints_51,
                popuplayertitle: '034028_Pellegrino_Parmense-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034028_Pellegrino_Parmense20241112T08Zpoints_51.png" /> 034028_Pellegrino_Parmense-2024-11-12T08Z — points'
            });
var format_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52 = new ol.format.GeoJSON();
var features_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52 = format_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.readFeatures(json_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.addFeatures(features_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52);
var lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52, 
                style: style_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52,
                popuplayertitle: '034017_Fornovo_di_Taro-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.png" /> 034017_Fornovo_di_Taro-2024-11-12T08Z — multipolygons'
            });
var format_034017_Fornovo_di_Taro20241112T08Zlines_53 = new ol.format.GeoJSON();
var features_034017_Fornovo_di_Taro20241112T08Zlines_53 = format_034017_Fornovo_di_Taro20241112T08Zlines_53.readFeatures(json_034017_Fornovo_di_Taro20241112T08Zlines_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034017_Fornovo_di_Taro20241112T08Zlines_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034017_Fornovo_di_Taro20241112T08Zlines_53.addFeatures(features_034017_Fornovo_di_Taro20241112T08Zlines_53);
var lyr_034017_Fornovo_di_Taro20241112T08Zlines_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034017_Fornovo_di_Taro20241112T08Zlines_53, 
                style: style_034017_Fornovo_di_Taro20241112T08Zlines_53,
                popuplayertitle: '034017_Fornovo_di_Taro-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034017_Fornovo_di_Taro20241112T08Zlines_53.png" /> 034017_Fornovo_di_Taro-2024-11-12T08Z — lines'
            });
var format_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54 = new ol.format.GeoJSON();
var features_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54 = format_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.readFeatures(json_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.addFeatures(features_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54);
var lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54, 
                style: style_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54,
                popuplayertitle: '034017_Fornovo_di_Taro-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.png" /> 034017_Fornovo_di_Taro-2024-11-12T08Z — multilinestrings'
            });
var format_034017_Fornovo_di_Taro20241112T08Zpoints_55 = new ol.format.GeoJSON();
var features_034017_Fornovo_di_Taro20241112T08Zpoints_55 = format_034017_Fornovo_di_Taro20241112T08Zpoints_55.readFeatures(json_034017_Fornovo_di_Taro20241112T08Zpoints_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034017_Fornovo_di_Taro20241112T08Zpoints_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034017_Fornovo_di_Taro20241112T08Zpoints_55.addFeatures(features_034017_Fornovo_di_Taro20241112T08Zpoints_55);
var lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034017_Fornovo_di_Taro20241112T08Zpoints_55, 
                style: style_034017_Fornovo_di_Taro20241112T08Zpoints_55,
                popuplayertitle: '034017_Fornovo_di_Taro-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034017_Fornovo_di_Taro20241112T08Zpoints_55.png" /> 034017_Fornovo_di_Taro-2024-11-12T08Z — points'
            });
var format_compiano_other_56 = new ol.format.GeoJSON();
var features_compiano_other_56 = format_compiano_other_56.readFeatures(json_compiano_other_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_compiano_other_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_compiano_other_56.addFeatures(features_compiano_other_56);
var lyr_compiano_other_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_compiano_other_56, 
                style: style_compiano_other_56,
                popuplayertitle: 'compiano_other',
                interactive: true,
                title: '<img src="styles/legend/compiano_other_56.png" /> compiano_other'
            });
var format_034011_Compiano20241112T08Zmultipolygons_57 = new ol.format.GeoJSON();
var features_034011_Compiano20241112T08Zmultipolygons_57 = format_034011_Compiano20241112T08Zmultipolygons_57.readFeatures(json_034011_Compiano20241112T08Zmultipolygons_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034011_Compiano20241112T08Zmultipolygons_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034011_Compiano20241112T08Zmultipolygons_57.addFeatures(features_034011_Compiano20241112T08Zmultipolygons_57);
var lyr_034011_Compiano20241112T08Zmultipolygons_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034011_Compiano20241112T08Zmultipolygons_57, 
                style: style_034011_Compiano20241112T08Zmultipolygons_57,
                popuplayertitle: '034011_Compiano-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034011_Compiano20241112T08Zmultipolygons_57.png" /> 034011_Compiano-2024-11-12T08Z — multipolygons'
            });
var format_034011_Compiano20241112T08Zlines_58 = new ol.format.GeoJSON();
var features_034011_Compiano20241112T08Zlines_58 = format_034011_Compiano20241112T08Zlines_58.readFeatures(json_034011_Compiano20241112T08Zlines_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034011_Compiano20241112T08Zlines_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034011_Compiano20241112T08Zlines_58.addFeatures(features_034011_Compiano20241112T08Zlines_58);
var lyr_034011_Compiano20241112T08Zlines_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034011_Compiano20241112T08Zlines_58, 
                style: style_034011_Compiano20241112T08Zlines_58,
                popuplayertitle: '034011_Compiano-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034011_Compiano20241112T08Zlines_58.png" /> 034011_Compiano-2024-11-12T08Z — lines'
            });
var format_034011_Compiano20241112T08Zmultilinestrings_59 = new ol.format.GeoJSON();
var features_034011_Compiano20241112T08Zmultilinestrings_59 = format_034011_Compiano20241112T08Zmultilinestrings_59.readFeatures(json_034011_Compiano20241112T08Zmultilinestrings_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034011_Compiano20241112T08Zmultilinestrings_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034011_Compiano20241112T08Zmultilinestrings_59.addFeatures(features_034011_Compiano20241112T08Zmultilinestrings_59);
var lyr_034011_Compiano20241112T08Zmultilinestrings_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034011_Compiano20241112T08Zmultilinestrings_59, 
                style: style_034011_Compiano20241112T08Zmultilinestrings_59,
                popuplayertitle: '034011_Compiano-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034011_Compiano20241112T08Zmultilinestrings_59.png" /> 034011_Compiano-2024-11-12T08Z — multilinestrings'
            });
var format_034011_Compiano20241112T08Zpoints_60 = new ol.format.GeoJSON();
var features_034011_Compiano20241112T08Zpoints_60 = format_034011_Compiano20241112T08Zpoints_60.readFeatures(json_034011_Compiano20241112T08Zpoints_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034011_Compiano20241112T08Zpoints_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034011_Compiano20241112T08Zpoints_60.addFeatures(features_034011_Compiano20241112T08Zpoints_60);
var lyr_034011_Compiano20241112T08Zpoints_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034011_Compiano20241112T08Zpoints_60, 
                style: style_034011_Compiano20241112T08Zpoints_60,
                popuplayertitle: '034011_Compiano-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034011_Compiano20241112T08Zpoints_60.png" /> 034011_Compiano-2024-11-12T08Z — points'
            });
var format_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61 = new ol.format.GeoJSON();
var features_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61 = format_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.readFeatures(json_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.addFeatures(features_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61);
var lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61, 
                style: style_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61,
                popuplayertitle: '034006_Borgo_Val_di_Taro-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.png" /> 034006_Borgo_Val_di_Taro-2024-11-12T08Z — multipolygons'
            });
var format_034006_Borgo_Val_di_Taro20241112T08Zlines_62 = new ol.format.GeoJSON();
var features_034006_Borgo_Val_di_Taro20241112T08Zlines_62 = format_034006_Borgo_Val_di_Taro20241112T08Zlines_62.readFeatures(json_034006_Borgo_Val_di_Taro20241112T08Zlines_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034006_Borgo_Val_di_Taro20241112T08Zlines_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034006_Borgo_Val_di_Taro20241112T08Zlines_62.addFeatures(features_034006_Borgo_Val_di_Taro20241112T08Zlines_62);
var lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034006_Borgo_Val_di_Taro20241112T08Zlines_62, 
                style: style_034006_Borgo_Val_di_Taro20241112T08Zlines_62,
                popuplayertitle: '034006_Borgo_Val_di_Taro-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034006_Borgo_Val_di_Taro20241112T08Zlines_62.png" /> 034006_Borgo_Val_di_Taro-2024-11-12T08Z — lines'
            });
var format_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63 = new ol.format.GeoJSON();
var features_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63 = format_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.readFeatures(json_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.addFeatures(features_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63);
var lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63, 
                style: style_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63,
                popuplayertitle: '034006_Borgo_Val_di_Taro-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.png" /> 034006_Borgo_Val_di_Taro-2024-11-12T08Z — multilinestrings'
            });
var format_034006_Borgo_Val_di_Taro20241112T08Zpoints_64 = new ol.format.GeoJSON();
var features_034006_Borgo_Val_di_Taro20241112T08Zpoints_64 = format_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.readFeatures(json_034006_Borgo_Val_di_Taro20241112T08Zpoints_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034006_Borgo_Val_di_Taro20241112T08Zpoints_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.addFeatures(features_034006_Borgo_Val_di_Taro20241112T08Zpoints_64);
var lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034006_Borgo_Val_di_Taro20241112T08Zpoints_64, 
                style: style_034006_Borgo_Val_di_Taro20241112T08Zpoints_64,
                popuplayertitle: '034006_Borgo_Val_di_Taro-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034006_Borgo_Val_di_Taro20241112T08Zpoints_64.png" /> 034006_Borgo_Val_di_Taro-2024-11-12T08Z — points'
            });
var format_bore_other_65 = new ol.format.GeoJSON();
var features_bore_other_65 = format_bore_other_65.readFeatures(json_bore_other_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bore_other_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bore_other_65.addFeatures(features_bore_other_65);
var lyr_bore_other_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bore_other_65, 
                style: style_bore_other_65,
                popuplayertitle: 'bore_other',
                interactive: true,
                title: '<img src="styles/legend/bore_other_65.png" /> bore_other'
            });
var format_034005_Bore20241112T08Zmultipolygons_66 = new ol.format.GeoJSON();
var features_034005_Bore20241112T08Zmultipolygons_66 = format_034005_Bore20241112T08Zmultipolygons_66.readFeatures(json_034005_Bore20241112T08Zmultipolygons_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034005_Bore20241112T08Zmultipolygons_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034005_Bore20241112T08Zmultipolygons_66.addFeatures(features_034005_Bore20241112T08Zmultipolygons_66);
var lyr_034005_Bore20241112T08Zmultipolygons_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034005_Bore20241112T08Zmultipolygons_66, 
                style: style_034005_Bore20241112T08Zmultipolygons_66,
                popuplayertitle: '034005_Bore-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034005_Bore20241112T08Zmultipolygons_66.png" /> 034005_Bore-2024-11-12T08Z — multipolygons'
            });
var format_034005_Bore20241112T08Zlines_67 = new ol.format.GeoJSON();
var features_034005_Bore20241112T08Zlines_67 = format_034005_Bore20241112T08Zlines_67.readFeatures(json_034005_Bore20241112T08Zlines_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034005_Bore20241112T08Zlines_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034005_Bore20241112T08Zlines_67.addFeatures(features_034005_Bore20241112T08Zlines_67);
var lyr_034005_Bore20241112T08Zlines_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034005_Bore20241112T08Zlines_67, 
                style: style_034005_Bore20241112T08Zlines_67,
                popuplayertitle: '034005_Bore-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034005_Bore20241112T08Zlines_67.png" /> 034005_Bore-2024-11-12T08Z — lines'
            });
var format_034005_Bore20241112T08Zmultilinestrings_68 = new ol.format.GeoJSON();
var features_034005_Bore20241112T08Zmultilinestrings_68 = format_034005_Bore20241112T08Zmultilinestrings_68.readFeatures(json_034005_Bore20241112T08Zmultilinestrings_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034005_Bore20241112T08Zmultilinestrings_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034005_Bore20241112T08Zmultilinestrings_68.addFeatures(features_034005_Bore20241112T08Zmultilinestrings_68);
var lyr_034005_Bore20241112T08Zmultilinestrings_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034005_Bore20241112T08Zmultilinestrings_68, 
                style: style_034005_Bore20241112T08Zmultilinestrings_68,
                popuplayertitle: '034005_Bore-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034005_Bore20241112T08Zmultilinestrings_68.png" /> 034005_Bore-2024-11-12T08Z — multilinestrings'
            });
var format_034005_Bore20241112T08Zpoints_69 = new ol.format.GeoJSON();
var features_034005_Bore20241112T08Zpoints_69 = format_034005_Bore20241112T08Zpoints_69.readFeatures(json_034005_Bore20241112T08Zpoints_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034005_Bore20241112T08Zpoints_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034005_Bore20241112T08Zpoints_69.addFeatures(features_034005_Bore20241112T08Zpoints_69);
var lyr_034005_Bore20241112T08Zpoints_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034005_Bore20241112T08Zpoints_69, 
                style: style_034005_Bore20241112T08Zpoints_69,
                popuplayertitle: '034005_Bore-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034005_Bore20241112T08Zpoints_69.png" /> 034005_Bore-2024-11-12T08Z — points'
            });
var format_bedonia_other_70 = new ol.format.GeoJSON();
var features_bedonia_other_70 = format_bedonia_other_70.readFeatures(json_bedonia_other_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bedonia_other_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bedonia_other_70.addFeatures(features_bedonia_other_70);
var lyr_bedonia_other_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bedonia_other_70, 
                style: style_bedonia_other_70,
                popuplayertitle: 'bedonia_other',
                interactive: true,
                title: '<img src="styles/legend/bedonia_other_70.png" /> bedonia_other'
            });
var format_034003_Bedonia20241112T08Zmultipolygons_71 = new ol.format.GeoJSON();
var features_034003_Bedonia20241112T08Zmultipolygons_71 = format_034003_Bedonia20241112T08Zmultipolygons_71.readFeatures(json_034003_Bedonia20241112T08Zmultipolygons_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034003_Bedonia20241112T08Zmultipolygons_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034003_Bedonia20241112T08Zmultipolygons_71.addFeatures(features_034003_Bedonia20241112T08Zmultipolygons_71);
var lyr_034003_Bedonia20241112T08Zmultipolygons_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034003_Bedonia20241112T08Zmultipolygons_71, 
                style: style_034003_Bedonia20241112T08Zmultipolygons_71,
                popuplayertitle: '034003_Bedonia-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034003_Bedonia20241112T08Zmultipolygons_71.png" /> 034003_Bedonia-2024-11-12T08Z — multipolygons'
            });
var format_034003_Bedonia20241112T08Zlines_72 = new ol.format.GeoJSON();
var features_034003_Bedonia20241112T08Zlines_72 = format_034003_Bedonia20241112T08Zlines_72.readFeatures(json_034003_Bedonia20241112T08Zlines_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034003_Bedonia20241112T08Zlines_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034003_Bedonia20241112T08Zlines_72.addFeatures(features_034003_Bedonia20241112T08Zlines_72);
var lyr_034003_Bedonia20241112T08Zlines_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034003_Bedonia20241112T08Zlines_72, 
                style: style_034003_Bedonia20241112T08Zlines_72,
                popuplayertitle: '034003_Bedonia-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034003_Bedonia20241112T08Zlines_72.png" /> 034003_Bedonia-2024-11-12T08Z — lines'
            });
var format_034003_Bedonia20241112T08Zmultilinestrings_73 = new ol.format.GeoJSON();
var features_034003_Bedonia20241112T08Zmultilinestrings_73 = format_034003_Bedonia20241112T08Zmultilinestrings_73.readFeatures(json_034003_Bedonia20241112T08Zmultilinestrings_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034003_Bedonia20241112T08Zmultilinestrings_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034003_Bedonia20241112T08Zmultilinestrings_73.addFeatures(features_034003_Bedonia20241112T08Zmultilinestrings_73);
var lyr_034003_Bedonia20241112T08Zmultilinestrings_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034003_Bedonia20241112T08Zmultilinestrings_73, 
                style: style_034003_Bedonia20241112T08Zmultilinestrings_73,
                popuplayertitle: '034003_Bedonia-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034003_Bedonia20241112T08Zmultilinestrings_73.png" /> 034003_Bedonia-2024-11-12T08Z — multilinestrings'
            });
var format_034003_Bedonia20241112T08Zpoints_74 = new ol.format.GeoJSON();
var features_034003_Bedonia20241112T08Zpoints_74 = format_034003_Bedonia20241112T08Zpoints_74.readFeatures(json_034003_Bedonia20241112T08Zpoints_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034003_Bedonia20241112T08Zpoints_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034003_Bedonia20241112T08Zpoints_74.addFeatures(features_034003_Bedonia20241112T08Zpoints_74);
var lyr_034003_Bedonia20241112T08Zpoints_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034003_Bedonia20241112T08Zpoints_74, 
                style: style_034003_Bedonia20241112T08Zpoints_74,
                popuplayertitle: '034003_Bedonia-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034003_Bedonia20241112T08Zpoints_74.png" /> 034003_Bedonia-2024-11-12T08Z — points'
            });
var format_034002_Bardi20241112T08Zmultipolygons_75 = new ol.format.GeoJSON();
var features_034002_Bardi20241112T08Zmultipolygons_75 = format_034002_Bardi20241112T08Zmultipolygons_75.readFeatures(json_034002_Bardi20241112T08Zmultipolygons_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034002_Bardi20241112T08Zmultipolygons_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034002_Bardi20241112T08Zmultipolygons_75.addFeatures(features_034002_Bardi20241112T08Zmultipolygons_75);
var lyr_034002_Bardi20241112T08Zmultipolygons_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034002_Bardi20241112T08Zmultipolygons_75, 
                style: style_034002_Bardi20241112T08Zmultipolygons_75,
                popuplayertitle: '034002_Bardi-2024-11-12T08Z — multipolygons',
                interactive: true,
                title: '<img src="styles/legend/034002_Bardi20241112T08Zmultipolygons_75.png" /> 034002_Bardi-2024-11-12T08Z — multipolygons'
            });
var format_034002_Bardi20241112T08Zlines_76 = new ol.format.GeoJSON();
var features_034002_Bardi20241112T08Zlines_76 = format_034002_Bardi20241112T08Zlines_76.readFeatures(json_034002_Bardi20241112T08Zlines_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034002_Bardi20241112T08Zlines_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034002_Bardi20241112T08Zlines_76.addFeatures(features_034002_Bardi20241112T08Zlines_76);
var lyr_034002_Bardi20241112T08Zlines_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034002_Bardi20241112T08Zlines_76, 
                style: style_034002_Bardi20241112T08Zlines_76,
                popuplayertitle: '034002_Bardi-2024-11-12T08Z — lines',
                interactive: true,
                title: '<img src="styles/legend/034002_Bardi20241112T08Zlines_76.png" /> 034002_Bardi-2024-11-12T08Z — lines'
            });
var format_034002_Bardi20241112T08Zmultilinestrings_77 = new ol.format.GeoJSON();
var features_034002_Bardi20241112T08Zmultilinestrings_77 = format_034002_Bardi20241112T08Zmultilinestrings_77.readFeatures(json_034002_Bardi20241112T08Zmultilinestrings_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034002_Bardi20241112T08Zmultilinestrings_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034002_Bardi20241112T08Zmultilinestrings_77.addFeatures(features_034002_Bardi20241112T08Zmultilinestrings_77);
var lyr_034002_Bardi20241112T08Zmultilinestrings_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034002_Bardi20241112T08Zmultilinestrings_77, 
                style: style_034002_Bardi20241112T08Zmultilinestrings_77,
                popuplayertitle: '034002_Bardi-2024-11-12T08Z — multilinestrings',
                interactive: true,
                title: '<img src="styles/legend/034002_Bardi20241112T08Zmultilinestrings_77.png" /> 034002_Bardi-2024-11-12T08Z — multilinestrings'
            });
var format_034002_Bardi20241112T08Zpoints_78 = new ol.format.GeoJSON();
var features_034002_Bardi20241112T08Zpoints_78 = format_034002_Bardi20241112T08Zpoints_78.readFeatures(json_034002_Bardi20241112T08Zpoints_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_034002_Bardi20241112T08Zpoints_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_034002_Bardi20241112T08Zpoints_78.addFeatures(features_034002_Bardi20241112T08Zpoints_78);
var lyr_034002_Bardi20241112T08Zpoints_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_034002_Bardi20241112T08Zpoints_78, 
                style: style_034002_Bardi20241112T08Zpoints_78,
                popuplayertitle: '034002_Bardi-2024-11-12T08Z — points',
                interactive: true,
                title: '<img src="styles/legend/034002_Bardi20241112T08Zpoints_78.png" /> 034002_Bardi-2024-11-12T08Z — points'
            });
var format_multipolygons_79 = new ol.format.GeoJSON();
var features_multipolygons_79 = format_multipolygons_79.readFeatures(json_multipolygons_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_multipolygons_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_multipolygons_79.addFeatures(features_multipolygons_79);
var lyr_multipolygons_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_multipolygons_79, 
                style: style_multipolygons_79,
                popuplayertitle: 'multipolygons',
                interactive: true,
                title: 'multipolygons'
            });
var format_multilinestrings_80 = new ol.format.GeoJSON();
var features_multilinestrings_80 = format_multilinestrings_80.readFeatures(json_multilinestrings_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_multilinestrings_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_multilinestrings_80.addFeatures(features_multilinestrings_80);
var lyr_multilinestrings_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_multilinestrings_80, 
                style: style_multilinestrings_80,
                popuplayertitle: 'multilinestrings',
                interactive: true,
    title: 'multilinestrings<br />\
    <img src="styles/legend/multilinestrings_80_0.png" /> "Variante Percorso Comunità Montana Val Taro" Groppo - Montegroppo - Passo della Cappelletta<br />\
    <img src="styles/legend/multilinestrings_80_1.png" /> Albareto Freeride<br />\
    <img src="styles/legend/multilinestrings_80_2.png" /> Anello dei Castagni di Albareto - da Albareto alla strada del Passo dei 2 Santi<br />\
    <img src="styles/legend/multilinestrings_80_3.png" /> Anello dei Castagni di Albareto - da strada del Passo dei 2 Santi ad Albareto<br />\
    <img src="styles/legend/multilinestrings_80_4.png" /> Chiusola - Sella delle Guardie - Foce Tre Confini<br />\
    <img src="styles/legend/multilinestrings_80_5.png" /> collegamento fra sentiero 846 e sentiero 846A<br />\
    <img src="styles/legend/multilinestrings_80_6.png" /> Costadasi - Madonnina del Moro - Pradeschei - Passo dei Due Santi<br />\
    <img src="styles/legend/multilinestrings_80_7.png" /> E1 Toscana 01 Passo dei Due Santi - Passo della Cisa<br />\
    <img src="styles/legend/multilinestrings_80_8.png" /> E1 Toscana 01 Variante 1.1<br />\
    <img src="styles/legend/multilinestrings_80_9.png" /> European Long distance path E1 - part Italy - Liguria<br />\
    <img src="styles/legend/multilinestrings_80_10.png" /> Folta - Monte Bagastese - Alta Via dei Monti Liguri<br />\
    <img src="styles/legend/multilinestrings_80_11.png" /> Grande Escursione Appenninica - Tappa 25<br />\
    <img src="styles/legend/multilinestrings_80_12.png" /> Passo della Cappelletta - Passo Calzavitello<br />\
    <img src="styles/legend/multilinestrings_80_13.png" /> Passo della Cappelletta – Monte Chiappa – Monte Gottero (Bivio AVML)<br />\
    <img src="styles/legend/multilinestrings_80_14.png" /> Percorso Comunità Montana Val di Taro<br />\
    <img src="styles/legend/multilinestrings_80_15.png" /> Rio - Monte Gottero<br />\
    <img src="styles/legend/multilinestrings_80_16.png" /> San Vincenzo - Rovinaglia - Capanne dei Martelletti - Madonnina del Moro<br />\
    <img src="styles/legend/multilinestrings_80_17.png" /> Sentiero Comunalia di Albareto<br />\
    <img src="styles/legend/multilinestrings_80_18.png" /> Sentiero Comunalia di Boschetto<br />\
    <img src="styles/legend/multilinestrings_80_19.png" /> Sentiero di spartiacque appenninico<br />\
    <img src="styles/legend/multilinestrings_80_20.png" /> Sentiero Italia - Tappa G01<br />\
    <img src="styles/legend/multilinestrings_80_21.png" /> Sentiero Italia - Tappa L24<br />\
    <img src="styles/legend/multilinestrings_80_22.png" /> Sentiero Italia Ciclo - tappa G01-A<br />\
    <img src="styles/legend/multilinestrings_80_23.png" /> Sentiero Italia Ciclo - tappa G01-B<br />\
    <img src="styles/legend/multilinestrings_80_24.png" /> Sentiero Italia Ciclo - tappa L23-A<br />\
    <img src="styles/legend/multilinestrings_80_25.png" /> Vergastrelli - Il Focetto (Innesto AVML)<br />\
    <img src="styles/legend/multilinestrings_80_26.png" /> Via dei Remi - tappa 1<br />\
    <img src="styles/legend/multilinestrings_80_27.png" /> Via dei Remi - tappa 2<br />\
    <img src="styles/legend/multilinestrings_80_28.png" /> Via Pacifica<br />\
    <img src="styles/legend/multilinestrings_80_29.png" /> Zalloni - Foce dei Tre Confini<br />\
    <img src="styles/legend/multilinestrings_80_30.png" /> <br />' });
var format_lines_81 = new ol.format.GeoJSON();
var features_lines_81 = format_lines_81.readFeatures(json_lines_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lines_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lines_81.addFeatures(features_lines_81);
var lyr_lines_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lines_81, 
                style: style_lines_81,
                popuplayertitle: 'lines',
                interactive: true,
                title: '<img src="styles/legend/lines_81.png" /> lines'
            });
var format_points_82 = new ol.format.GeoJSON();
var features_points_82 = format_points_82.readFeatures(json_points_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_points_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_82.addFeatures(features_points_82);
var lyr_points_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_82, 
                style: style_points_82,
                popuplayertitle: 'points',
                interactive: true,
                title: '<img src="styles/legend/points_82.png" /> points'
            });
var format_perimetro_new_83 = new ol.format.GeoJSON();
var features_perimetro_new_83 = format_perimetro_new_83.readFeatures(json_perimetro_new_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_perimetro_new_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perimetro_new_83.addFeatures(features_perimetro_new_83);
var lyr_perimetro_new_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perimetro_new_83, 
                style: style_perimetro_new_83,
                popuplayertitle: 'perimetro_new',
                interactive: true,
                title: '<img src="styles/legend/perimetro_new_83.png" /> perimetro_new'
            });
var lyr_interpolazione_bacino_temperatura_2024_84 = new ol.layer.Image({
        opacity: 1,
        
    title: 'interpolazione_bacino_temperatura_2024<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_0.png" /> 10,7003<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_1.png" /> 11,1113<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_2.png" /> 11,5224<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_3.png" /> 11,9334<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_4.png" /> 12,3445<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_5.png" /> 12,7555<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_6.png" /> 13,1666<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_7.png" /> 13,5776<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_8.png" /> 13,9887<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2024_84_9.png" /> 14,3997<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/interpolazione_bacino_temperatura_2024_84.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [9.440070, 44.374680, 10.176300, 44.790640]
        })
    });
var lyr_interpolazione_bacino_temperatura_2023_85 = new ol.layer.Image({
        opacity: 1,
        
    title: 'interpolazione_bacino_temperatura_2023<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_0.png" /> 10,9003<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_1.png" /> 11,3669<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_2.png" /> 11,8335<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_3.png" /> 12,3001<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_4.png" /> 12,7667<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_5.png" /> 13,2333<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_6.png" /> 13,6998<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_7.png" /> 14,1664<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_8.png" /> 14,6330<br />\
    <img src="styles/legend/interpolazione_bacino_temperatura_2023_85_9.png" /> 15,0996<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/interpolazione_bacino_temperatura_2023_85.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [9.440070, 44.374680, 10.176300, 44.790640]
        })
    });
var format_temperatura_86 = new ol.format.GeoJSON();
var features_temperatura_86 = format_temperatura_86.readFeatures(json_temperatura_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_temperatura_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temperatura_86.addFeatures(features_temperatura_86);
var lyr_temperatura_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temperatura_86, 
                style: style_temperatura_86,
                popuplayertitle: 'temperatura',
                interactive: true,
                title: '<img src="styles/legend/temperatura_86.png" /> temperatura'
            });
var lyr_interpolazione_bacino_precipitazioni_2024_87 = new ol.layer.Image({
        opacity: 1,
        
    title: 'interpolazione_bacino_precipitazioni_2024<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_0.png" /> 1400,8486<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_1.png" /> 1522,3675<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_2.png" /> 1643,8864<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_3.png" /> 1765,4054<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_4.png" /> 1886,9243<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_5.png" /> 2008,4432<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_6.png" /> 2129,9621<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_7.png" /> 2251,4810<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_8.png" /> 2372,9999<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2024_87_9.png" /> 2494,5188<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/interpolazione_bacino_precipitazioni_2024_87.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [9.440070, 44.374680, 10.176300, 44.790640]
        })
    });
var lyr_interpolazione_bacino_precipitazioni_2023_88 = new ol.layer.Image({
        opacity: 1,
        
    title: 'interpolazione_bacino_precipitazioni_2023<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_0.png" /> 785,3401<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_1.png" /> 950,2744<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_2.png" /> 1115,2086<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_3.png" /> 1280,1429<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_4.png" /> 1445,0771<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_5.png" /> 1610,0113<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_6.png" /> 1774,9456<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_7.png" /> 1939,8798<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_8.png" /> 2104,8141<br />\
    <img src="styles/legend/interpolazione_bacino_precipitazioni_2023_88_9.png" /> 2269,7483<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/interpolazione_bacino_precipitazioni_2023_88.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [9.440070, 44.374680, 10.176300, 44.790640]
        })
    });
var format_isoiete_2023_new_89 = new ol.format.GeoJSON();
var features_isoiete_2023_new_89 = format_isoiete_2023_new_89.readFeatures(json_isoiete_2023_new_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_isoiete_2023_new_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoiete_2023_new_89.addFeatures(features_isoiete_2023_new_89);
var lyr_isoiete_2023_new_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isoiete_2023_new_89, 
                style: style_isoiete_2023_new_89,
                popuplayertitle: 'isoiete_2023_new',
                interactive: true,
                title: '<img src="styles/legend/isoiete_2023_new_89.png" /> isoiete_2023_new'
            });
var format_isoiete_2024_new_90 = new ol.format.GeoJSON();
var features_isoiete_2024_new_90 = format_isoiete_2024_new_90.readFeatures(json_isoiete_2024_new_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_isoiete_2024_new_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoiete_2024_new_90.addFeatures(features_isoiete_2024_new_90);
var lyr_isoiete_2024_new_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isoiete_2024_new_90, 
                style: style_isoiete_2024_new_90,
                popuplayertitle: 'isoiete_2024_new',
                interactive: true,
                title: '<img src="styles/legend/isoiete_2024_new_90.png" /> isoiete_2024_new'
            });
var format_precipitazioni_91 = new ol.format.GeoJSON();
var features_precipitazioni_91 = format_precipitazioni_91.readFeatures(json_precipitazioni_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_precipitazioni_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_precipitazioni_91.addFeatures(features_precipitazioni_91);
var lyr_precipitazioni_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_precipitazioni_91, 
                style: style_precipitazioni_91,
                popuplayertitle: 'precipitazioni',
                interactive: true,
                title: '<img src="styles/legend/precipitazioni_91.png" /> precipitazioni'
            });
var format_Densita_Popolazione_92 = new ol.format.GeoJSON();
var features_Densita_Popolazione_92 = format_Densita_Popolazione_92.readFeatures(json_Densita_Popolazione_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Densita_Popolazione_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densita_Popolazione_92.addFeatures(features_Densita_Popolazione_92);
var lyr_Densita_Popolazione_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densita_Popolazione_92, 
                style: style_Densita_Popolazione_92,
                popuplayertitle: 'Densita_Popolazione',
                interactive: true,
    title: 'Densita_Popolazione<br />\
    <img src="styles/legend/Densita_Popolazione_92_0.png" /> 7,92 - 10,85<br />\
    <img src="styles/legend/Densita_Popolazione_92_1.png" /> 10,85 - 12,34<br />\
    <img src="styles/legend/Densita_Popolazione_92_2.png" /> 12,34 - 13,81<br />\
    <img src="styles/legend/Densita_Popolazione_92_3.png" /> 13,81 - 14,67<br />\
    <img src="styles/legend/Densita_Popolazione_92_4.png" /> 14,67 - 18,43<br />\
    <img src="styles/legend/Densita_Popolazione_92_5.png" /> 18,43 - 20,79<br />\
    <img src="styles/legend/Densita_Popolazione_92_6.png" /> 20,79 - 25,33<br />\
    <img src="styles/legend/Densita_Popolazione_92_7.png" /> 25,33 - 35,22<br />\
    <img src="styles/legend/Densita_Popolazione_92_8.png" /> 35,22 - 43,75<br />\
    <img src="styles/legend/Densita_Popolazione_92_9.png" /> 43,75 - 104,88<br />' });
var format_Totale_Popolazione_93 = new ol.format.GeoJSON();
var features_Totale_Popolazione_93 = format_Totale_Popolazione_93.readFeatures(json_Totale_Popolazione_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Totale_Popolazione_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totale_Popolazione_93.addFeatures(features_Totale_Popolazione_93);
var lyr_Totale_Popolazione_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Totale_Popolazione_93, 
                style: style_Totale_Popolazione_93,
                popuplayertitle: 'Totale_Popolazione',
                interactive: true,
    title: 'Totale_Popolazione<br />\
    <img src="styles/legend/Totale_Popolazione_93_0.png" /> 536 - 683<br />\
    <img src="styles/legend/Totale_Popolazione_93_1.png" /> 683 - 920<br />\
    <img src="styles/legend/Totale_Popolazione_93_2.png" /> 920 - 1015<br />\
    <img src="styles/legend/Totale_Popolazione_93_3.png" /> 1015 - 1114<br />\
    <img src="styles/legend/Totale_Popolazione_93_4.png" /> 1114 - 1681<br />\
    <img src="styles/legend/Totale_Popolazione_93_5.png" /> 1681 - 2001<br />\
    <img src="styles/legend/Totale_Popolazione_93_6.png" /> 2001 - 2274<br />\
    <img src="styles/legend/Totale_Popolazione_93_7.png" /> 2274 - 2900<br />\
    <img src="styles/legend/Totale_Popolazione_93_8.png" /> 2900 - 5409<br />\
    <img src="styles/legend/Totale_Popolazione_93_9.png" /> 5409 - 6748<br />' });
var format_Popolazione_Residente_94 = new ol.format.GeoJSON();
var features_Popolazione_Residente_94 = format_Popolazione_Residente_94.readFeatures(json_Popolazione_Residente_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Popolazione_Residente_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Popolazione_Residente_94.addFeatures(features_Popolazione_Residente_94);
var lyr_Popolazione_Residente_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Popolazione_Residente_94, 
                style: style_Popolazione_Residente_94,
                popuplayertitle: 'Popolazione_Residente',
                interactive: true,
                title: '<img src="styles/legend/Popolazione_Residente_94.png" /> Popolazione_Residente'
            });
var format_HeatMap_Popolaz_Residente_95 = new ol.format.GeoJSON();
var features_HeatMap_Popolaz_Residente_95 = format_HeatMap_Popolaz_Residente_95.readFeatures(json_HeatMap_Popolaz_Residente_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HeatMap_Popolaz_Residente_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeatMap_Popolaz_Residente_95.addFeatures(features_HeatMap_Popolaz_Residente_95);
var lyr_HeatMap_Popolaz_Residente_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeatMap_Popolaz_Residente_95, 
                style: style_HeatMap_Popolaz_Residente_95,
                popuplayertitle: 'HeatMap_Popolaz_Residente',
                interactive: true,
    title: 'HeatMap_Popolaz_Residente<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_0.png" /> 536 - 683<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_1.png" /> 683 - 920<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_2.png" /> 920 - 1015<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_3.png" /> 1015 - 1114<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_4.png" /> 1114 - 1681<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_5.png" /> 1681 - 2001<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_6.png" /> 2001 - 2274<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_7.png" /> 2274 - 2900<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_8.png" /> 2900 - 5409<br />\
    <img src="styles/legend/HeatMap_Popolaz_Residente_95_9.png" /> 5409 - 6748<br />' });
var format_HeatMap_Popolaz_Residente_MF_96 = new ol.format.GeoJSON();
var features_HeatMap_Popolaz_Residente_MF_96 = format_HeatMap_Popolaz_Residente_MF_96.readFeatures(json_HeatMap_Popolaz_Residente_MF_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HeatMap_Popolaz_Residente_MF_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeatMap_Popolaz_Residente_MF_96.addFeatures(features_HeatMap_Popolaz_Residente_MF_96);
var lyr_HeatMap_Popolaz_Residente_MF_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeatMap_Popolaz_Residente_MF_96, 
                style: style_HeatMap_Popolaz_Residente_MF_96,
                popuplayertitle: 'HeatMap_Popolaz_Residente_M-F',
                interactive: true,
                title: 'HeatMap_Popolaz_Residente_M-F'
            });
var group_Popolazione_Residente_ValTaro_ValCeno = new ol.layer.Group({
                                layers: [lyr_Densita_Popolazione_92,lyr_Totale_Popolazione_93,lyr_Popolazione_Residente_94,lyr_HeatMap_Popolaz_Residente_95,lyr_HeatMap_Popolaz_Residente_MF_96,],
                                fold: "open",
                                title: 'Popolazione_Residente_ValTaro_ValCeno'});
var group_Pioggia = new ol.layer.Group({
                                layers: [lyr_interpolazione_bacino_precipitazioni_2024_87,lyr_interpolazione_bacino_precipitazioni_2023_88,lyr_isoiete_2023_new_89,lyr_isoiete_2024_new_90,lyr_precipitazioni_91,],
                                fold: "open",
                                title: 'Pioggia'});
var group_Temperatura = new ol.layer.Group({
                                layers: [lyr_interpolazione_bacino_temperatura_2024_84,lyr_interpolazione_bacino_temperatura_2023_85,lyr_temperatura_86,],
                                fold: "open",
                                title: 'Temperatura'});
var group_Elementi_Comuni_ValTaro_ValCeno = new ol.layer.Group({
                                layers: [lyr_perimetro_new_83,],
                                fold: "open",
                                title: 'Elementi_Comuni_ValTaro_ValCeno'});
var group_Albareto = new ol.layer.Group({
                                layers: [lyr_multipolygons_79,lyr_multilinestrings_80,lyr_lines_81,lyr_points_82,],
                                fold: "open",
                                title: 'Albareto'});
var group_Bardi = new ol.layer.Group({
                                layers: [lyr_034002_Bardi20241112T08Zmultipolygons_75,lyr_034002_Bardi20241112T08Zlines_76,lyr_034002_Bardi20241112T08Zmultilinestrings_77,lyr_034002_Bardi20241112T08Zpoints_78,],
                                fold: "open",
                                title: 'Bardi'});
var group_Bedonia = new ol.layer.Group({
                                layers: [lyr_bedonia_other_70,lyr_034003_Bedonia20241112T08Zmultipolygons_71,lyr_034003_Bedonia20241112T08Zlines_72,lyr_034003_Bedonia20241112T08Zmultilinestrings_73,lyr_034003_Bedonia20241112T08Zpoints_74,],
                                fold: "open",
                                title: 'Bedonia'});
var group_Bore = new ol.layer.Group({
                                layers: [lyr_bore_other_65,lyr_034005_Bore20241112T08Zmultipolygons_66,lyr_034005_Bore20241112T08Zlines_67,lyr_034005_Bore20241112T08Zmultilinestrings_68,lyr_034005_Bore20241112T08Zpoints_69,],
                                fold: "open",
                                title: 'Bore'});
var group_BorgoValDiTaro = new ol.layer.Group({
                                layers: [lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61,lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62,lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63,lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64,],
                                fold: "open",
                                title: 'Borgo Val Di Taro'});
var group_Compiano = new ol.layer.Group({
                                layers: [lyr_compiano_other_56,lyr_034011_Compiano20241112T08Zmultipolygons_57,lyr_034011_Compiano20241112T08Zlines_58,lyr_034011_Compiano20241112T08Zmultilinestrings_59,lyr_034011_Compiano20241112T08Zpoints_60,],
                                fold: "open",
                                title: 'Compiano'});
var group_FornovodiTaro = new ol.layer.Group({
                                layers: [lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52,lyr_034017_Fornovo_di_Taro20241112T08Zlines_53,lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54,lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55,],
                                fold: "open",
                                title: 'Fornovo di Taro'});
var group_PellegrinoParmense = new ol.layer.Group({
                                layers: [lyr_pellegrino_other_47,lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48,lyr_034028_Pellegrino_Parmense20241112T08Zlines_49,lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50,lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51,],
                                fold: "open",
                                title: 'Pellegrino Parmense'});
var group_Solignano = new ol.layer.Group({
                                layers: [lyr_034035_Solignano20241112T08Zmultipolygons_43,lyr_034035_Solignano20241112T08Zlines_44,lyr_034035_Solignano20241112T08Zmultilinestrings_45,lyr_034035_Solignano20241112T08Zpoints_46,],
                                fold: "open",
                                title: 'Solignano'});
var group_Tornolo = new ol.layer.Group({
                                layers: [lyr_tornolo_other_38,lyr_034040_Tornolo20241112T08Zmultipolygons_39,lyr_034040_Tornolo20241112T08Zlines_40,lyr_034040_Tornolo20241112T08Zmultilinestrings_41,lyr_034040_Tornolo20241112T08Zpoints_42,],
                                fold: "open",
                                title: 'Tornolo'});
var group_Valmozzola = new ol.layer.Group({
                                layers: [lyr_034044_Valmozzola20241112T08Zmultipolygons_34,lyr_034044_Valmozzola20241112T08Zlines_35,lyr_034044_Valmozzola20241112T08Zmultilinestrings_36,lyr_034044_Valmozzola20241112T08Zpoints_37,],
                                fold: "open",
                                title: 'Valmozzola'});
var group_VaranodeMelegari = new ol.layer.Group({
                                layers: [lyr_varano_other_29,lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30,lyr_034045_Varano_de_Melegari20250114T14Zlines_31,lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32,lyr_034045_Varano_de_Melegari20250114T14Zpoints_33,],
                                fold: "open",
                                title: 'Varano de\' Melegari'});
var group_Varsi = new ol.layer.Group({
                                layers: [lyr_varsi_other_24,lyr_034046_Varsi20241112T08Zmultipolygons_25,lyr_034046_Varsi20241112T08Zlines_26,lyr_034046_Varsi20241112T08Zmultilinestrings_27,lyr_034046_Varsi20241112T08Zpoints_28,],
                                fold: "open",
                                title: 'Varsi'});
var group_PatrimonioCulturaleRegionale = new ol.layer.Group({
                                layers: [lyr_am_v_alberi_pt_ValTaro_ValCeno_1,lyr_a_v_scavi_pl_ValTaro_ValCeno_2,lyr_a_v_scavi_ln_ValTaro_ValCeno_3,lyr_a_v_scavi_pt_ValTaro_ValCeno_4,lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5,lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6,lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7,lyr_bt_v_complessi_pt_ValTaro_ValCeno_8,lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9,lyr_rer_bp_fiumi150_ValTaro_ValCeno_10,lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11,lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12,lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13,lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14,lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15,lyr_rer_bp_usc_pt_ValTaro_ValCeno_16,lyr_rer_bp_usc_pl_ValTaro_ValCeno_17,lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18,lyr_rer_bp_imm_pl_ValTaro_ValCeno_19,lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20,lyr_tourer_pt_ValTaro_ValCeno_21,lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22,],
                                fold: "open",
                                title: 'Patrimonio Culturale Regionale'});

lyr_GoogleSatellite_0.setVisible(true);lyr_am_v_alberi_pt_ValTaro_ValCeno_1.setVisible(true);lyr_a_v_scavi_pl_ValTaro_ValCeno_2.setVisible(true);lyr_a_v_scavi_ln_ValTaro_ValCeno_3.setVisible(true);lyr_a_v_scavi_pt_ValTaro_ValCeno_4.setVisible(true);lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5.setVisible(true);lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6.setVisible(true);lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7.setVisible(true);lyr_bt_v_complessi_pt_ValTaro_ValCeno_8.setVisible(true);lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9.setVisible(true);lyr_rer_bp_fiumi150_ValTaro_ValCeno_10.setVisible(true);lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11.setVisible(true);lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12.setVisible(true);lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13.setVisible(true);lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.setVisible(true);lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15.setVisible(true);lyr_rer_bp_usc_pt_ValTaro_ValCeno_16.setVisible(true);lyr_rer_bp_usc_pl_ValTaro_ValCeno_17.setVisible(true);lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18.setVisible(true);lyr_rer_bp_imm_pl_ValTaro_ValCeno_19.setVisible(true);lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.setVisible(true);lyr_tourer_pt_ValTaro_ValCeno_21.setVisible(true);lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22.setVisible(true);lyr_ValTaro_ValCeno_23.setVisible(true);lyr_varsi_other_24.setVisible(true);lyr_034046_Varsi20241112T08Zmultipolygons_25.setVisible(true);lyr_034046_Varsi20241112T08Zlines_26.setVisible(true);lyr_034046_Varsi20241112T08Zmultilinestrings_27.setVisible(true);lyr_034046_Varsi20241112T08Zpoints_28.setVisible(true);lyr_varano_other_29.setVisible(true);lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.setVisible(true);lyr_034045_Varano_de_Melegari20250114T14Zlines_31.setVisible(true);lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.setVisible(true);lyr_034045_Varano_de_Melegari20250114T14Zpoints_33.setVisible(true);lyr_034044_Valmozzola20241112T08Zmultipolygons_34.setVisible(true);lyr_034044_Valmozzola20241112T08Zlines_35.setVisible(true);lyr_034044_Valmozzola20241112T08Zmultilinestrings_36.setVisible(true);lyr_034044_Valmozzola20241112T08Zpoints_37.setVisible(true);lyr_tornolo_other_38.setVisible(true);lyr_034040_Tornolo20241112T08Zmultipolygons_39.setVisible(true);lyr_034040_Tornolo20241112T08Zlines_40.setVisible(true);lyr_034040_Tornolo20241112T08Zmultilinestrings_41.setVisible(true);lyr_034040_Tornolo20241112T08Zpoints_42.setVisible(true);lyr_034035_Solignano20241112T08Zmultipolygons_43.setVisible(true);lyr_034035_Solignano20241112T08Zlines_44.setVisible(true);lyr_034035_Solignano20241112T08Zmultilinestrings_45.setVisible(true);lyr_034035_Solignano20241112T08Zpoints_46.setVisible(true);lyr_pellegrino_other_47.setVisible(true);lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.setVisible(true);lyr_034028_Pellegrino_Parmense20241112T08Zlines_49.setVisible(true);lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.setVisible(true);lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51.setVisible(true);lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.setVisible(true);lyr_034017_Fornovo_di_Taro20241112T08Zlines_53.setVisible(true);lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.setVisible(true);lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55.setVisible(true);lyr_compiano_other_56.setVisible(true);lyr_034011_Compiano20241112T08Zmultipolygons_57.setVisible(true);lyr_034011_Compiano20241112T08Zlines_58.setVisible(true);lyr_034011_Compiano20241112T08Zmultilinestrings_59.setVisible(true);lyr_034011_Compiano20241112T08Zpoints_60.setVisible(true);lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.setVisible(true);lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62.setVisible(true);lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.setVisible(true);lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.setVisible(true);lyr_bore_other_65.setVisible(true);lyr_034005_Bore20241112T08Zmultipolygons_66.setVisible(true);lyr_034005_Bore20241112T08Zlines_67.setVisible(true);lyr_034005_Bore20241112T08Zmultilinestrings_68.setVisible(true);lyr_034005_Bore20241112T08Zpoints_69.setVisible(true);lyr_bedonia_other_70.setVisible(true);lyr_034003_Bedonia20241112T08Zmultipolygons_71.setVisible(true);lyr_034003_Bedonia20241112T08Zlines_72.setVisible(true);lyr_034003_Bedonia20241112T08Zmultilinestrings_73.setVisible(true);lyr_034003_Bedonia20241112T08Zpoints_74.setVisible(true);lyr_034002_Bardi20241112T08Zmultipolygons_75.setVisible(true);lyr_034002_Bardi20241112T08Zlines_76.setVisible(true);lyr_034002_Bardi20241112T08Zmultilinestrings_77.setVisible(true);lyr_034002_Bardi20241112T08Zpoints_78.setVisible(true);lyr_multipolygons_79.setVisible(true);lyr_multilinestrings_80.setVisible(true);lyr_lines_81.setVisible(true);lyr_points_82.setVisible(true);lyr_perimetro_new_83.setVisible(true);lyr_interpolazione_bacino_temperatura_2024_84.setVisible(true);lyr_interpolazione_bacino_temperatura_2023_85.setVisible(true);lyr_temperatura_86.setVisible(true);lyr_interpolazione_bacino_precipitazioni_2024_87.setVisible(true);lyr_interpolazione_bacino_precipitazioni_2023_88.setVisible(true);lyr_isoiete_2023_new_89.setVisible(true);lyr_isoiete_2024_new_90.setVisible(true);lyr_precipitazioni_91.setVisible(true);lyr_Densita_Popolazione_92.setVisible(true);lyr_Totale_Popolazione_93.setVisible(true);lyr_Popolazione_Residente_94.setVisible(true);lyr_HeatMap_Popolaz_Residente_95.setVisible(true);lyr_HeatMap_Popolaz_Residente_MF_96.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_PatrimonioCulturaleRegionale,lyr_ValTaro_ValCeno_23,group_Varsi,group_VaranodeMelegari,group_Valmozzola,group_Tornolo,group_Solignano,group_PellegrinoParmense,group_FornovodiTaro,group_Compiano,group_BorgoValDiTaro,group_Bore,group_Bedonia,group_Bardi,group_Albareto,group_Elementi_Comuni_ValTaro_ValCeno,group_Temperatura,group_Pioggia,group_Popolazione_Residente_ValTaro_ValCeno];
lyr_am_v_alberi_pt_ValTaro_ValCeno_1.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'descrizion': 'descrizion', 'specie': 'specie', 'nome_scien': 'nome_scien', 'comune': 'comune', 'sigla_pro': 'sigla_pro', 'localita': 'localita', 'lon': 'lon', 'lat': 'lat', 'altitudine': 'altitudine', 'contesto_u': 'contesto_u', 'dichiarazi': 'dichiarazi', 'circonfere': 'circonfere', 'altezza': 'altezza', 'criteri': 'criteri', 'foto_princ': 'foto_princ', 'valutazion': 'valutazion', 'tot_foto': 'tot_foto', 'autore': 'autore', 'indirizzo': 'indirizzo', 'istat_prov': 'istat_prov', 'provincia': 'provincia', 'frazione': 'frazione', });
lyr_a_v_scavi_pl_ValTaro_ValCeno_2.set('fieldAliases', {'gid': 'gid', 'id_scavo': 'id_scavo', 'nome': 'nome', 'indirizzo': 'indirizzo', 'localita': 'localita', 'comune': 'comune', 'provincia': 'provincia', 'descrizion': 'descrizion', 'quota_zero': 'quota_zero', 'quota_ze_1': 'quota_ze_1', 'prof_max': 'prof_max', 'anno_inizi': 'anno_inizi', 'anno_fine': 'anno_fine', 'funzionari': 'funzionari', 'ditta_prof': 'ditta_prof', 'collocazio': 'collocazio', 'bibliograf': 'bibliograf', 'osservazio': 'osservazio', 'funziona_1': 'funziona_1', 'ente_respo': 'ente_respo', 'compilator': 'compilator', 'metodologi': 'metodologi', 'qualita_po': 'qualita_po', 'note_posiz': 'note_posiz', 'tipiindagi': 'tipiindagi', 'origine_in': 'origine_in', 'num_protoc': 'num_protoc', 'anno_proto': 'anno_proto', 'ambito_app': 'ambito_app', 'stato_sche': 'stato_sche', 'prof_min_r': 'prof_min_r', 'prof_max_r': 'prof_max_r', 'min_epocad': 'min_epocad', 'max_epocaa': 'max_epocaa', 'min_secolo': 'min_secolo', 'max_secolo': 'max_secolo', 'tipologie': 'tipologie', 'fasi': 'fasi', 'tutelato': 'tutelato', });
lyr_a_v_scavi_ln_ValTaro_ValCeno_3.set('fieldAliases', {'gid': 'gid', 'id_scavo': 'id_scavo', 'nome': 'nome', 'indirizzo': 'indirizzo', 'localita': 'localita', 'comune': 'comune', 'provincia': 'provincia', 'descrizion': 'descrizion', 'quota_zero': 'quota_zero', 'quota_ze_1': 'quota_ze_1', 'prof_max': 'prof_max', 'anno_inizi': 'anno_inizi', 'anno_fine': 'anno_fine', 'funzionari': 'funzionari', 'ditta_prof': 'ditta_prof', 'collocazio': 'collocazio', 'bibliograf': 'bibliograf', 'osservazio': 'osservazio', 'funziona_1': 'funziona_1', 'ente_respo': 'ente_respo', 'compilator': 'compilator', 'metodologi': 'metodologi', 'qualita_po': 'qualita_po', 'note_posiz': 'note_posiz', 'tipiindagi': 'tipiindagi', 'origine_in': 'origine_in', 'num_protoc': 'num_protoc', 'anno_proto': 'anno_proto', 'ambito_app': 'ambito_app', 'stato_sche': 'stato_sche', 'prof_min_r': 'prof_min_r', 'prof_max_r': 'prof_max_r', 'min_epocad': 'min_epocad', 'max_epocaa': 'max_epocaa', 'min_secolo': 'min_secolo', 'max_secolo': 'max_secolo', 'tipologie': 'tipologie', 'fasi': 'fasi', 'tutelato': 'tutelato', });
lyr_a_v_scavi_pt_ValTaro_ValCeno_4.set('fieldAliases', {'gid': 'gid', 'id_scavo': 'id_scavo', 'nome': 'nome', 'indirizzo': 'indirizzo', 'localita': 'localita', 'comune': 'comune', 'provincia': 'provincia', 'descrizion': 'descrizion', 'quota_zero': 'quota_zero', 'quota_ze_1': 'quota_ze_1', 'prof_max': 'prof_max', 'anno_inizi': 'anno_inizi', 'anno_fine': 'anno_fine', 'funzionari': 'funzionari', 'ditta_prof': 'ditta_prof', 'collocazio': 'collocazio', 'bibliograf': 'bibliograf', 'osservazio': 'osservazio', 'funziona_1': 'funziona_1', 'ente_respo': 'ente_respo', 'compilator': 'compilator', 'metodologi': 'metodologi', 'qualita_po': 'qualita_po', 'note_posiz': 'note_posiz', 'tipiindagi': 'tipiindagi', 'origine_in': 'origine_in', 'num_protoc': 'num_protoc', 'anno_proto': 'anno_proto', 'ambito_app': 'ambito_app', 'stato_sche': 'stato_sche', 'prof_min_r': 'prof_min_r', 'prof_max_r': 'prof_max_r', 'min_epocad': 'min_epocad', 'max_epocaa': 'max_epocaa', 'min_secolo': 'min_secolo', 'max_secolo': 'max_secolo', 'tipologie': 'tipologie', 'fasi': 'fasi', 'tutelato': 'tutelato', });
lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5.set('fieldAliases', {'gid': 'gid', 'id_archeo': 'id_archeo', 'codice': 'codice', 'nome': 'nome', 'titolo': 'titolo', 'tipo_propr': 'tipo_propr', 'comuni': 'comuni', 'sigla_pro': 'sigla_pro', 'localita': 'localita', 'tipologie': 'tipologie', 'provvedime': 'provvedime', 'data_ultim': 'data_ultim', 'ultimo_pro': 'ultimo_pro', 'rif_legge_': 'rif_legge_', 'tutela': 'tutela', 'vincolo': 'vincolo', });
lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6.set('fieldAliases', {'gid': 'gid', 'id_archeo': 'id_archeo', 'codice': 'codice', 'nome': 'nome', 'titolo': 'titolo', 'tipo_propr': 'tipo_propr', 'comuni': 'comuni', 'sigla_pro': 'sigla_pro', 'localita': 'localita', 'tipologie': 'tipologie', 'provvedime': 'provvedime', 'data_ultim': 'data_ultim', 'ultimo_pro': 'ultimo_pro', 'rif_legge_': 'rif_legge_', 'tutela': 'tutela', 'vincolo': 'vincolo', });
lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'descrizion': 'descrizion', 'titolo': 'titolo', 'tipo_propr': 'tipo_propr', 'comuni': 'comuni', 'sigla_pro': 'sigla_pro', 'localita': 'localita', 'indirizzo': 'indirizzo', 'tipologie': 'tipologie', 'provvedime': 'provvedime', 'data_ultim': 'data_ultim', 'ultimo_pro': 'ultimo_pro', 'rif_legge_': 'rif_legge_', 'tutela': 'tutela', 'vincolo': 'vincolo', 'lon': 'lon', 'lat': 'lat', 'id_categor': 'id_categor', 'categoria': 'categoria', 'categoria_': 'categoria_', 'id_valutaz': 'id_valutaz', 'valutazion': 'valutazion', 'sito_web': 'sito_web', 'link': 'link', 'avvisi_fru': 'avvisi_fru', 'foto_princ': 'foto_princ', 'tot_foto': 'tot_foto', 'autore': 'autore', });
lyr_bt_v_complessi_pt_ValTaro_ValCeno_8.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'proprietar': 'proprietar', 'provincia': 'provincia', 'comune': 'comune', 'diocesi': 'diocesi', 'frazione': 'frazione', 'indirizzo': 'indirizzo', 'tipo_tutel': 'tipo_tutel', 'tipo_propr': 'tipo_propr', 'categoria': 'categoria', 'eta': 'eta', 'eta_attest': 'eta_attest', 'stato': 'stato', 'data_cambi': 'data_cambi', 'data_upd': 'data_upd', 'lon': 'lon', 'lat': 'lat', 'x': 'x', 'y': 'y', 'guidarossa': 'guidarossa', 'link_fai': 'link_fai', 'foto_princ': 'foto_princ', 'autore_fot': 'autore_fot', 'estense': 'estense', 'id_regione': 'id_regione', 'in_tourer': 'in_tourer', 'etichetta': 'etichetta', });
lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9.set('fieldAliases', {'gid': 'gid', 'id_e': 'id_e', 'nm_sda': 'nm_sda', 'tipo_lago': 'tipo_lago', 'perimetro': 'perimetro', 'data_cts': 'data_cts', });
lyr_rer_bp_fiumi150_ValTaro_ValCeno_10.set('fieldAliases', {'gid': 'gid', 'data_agg': 'data_agg', });
lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11.set('fieldAliases', {'gid': 'gid', 'id_provinc': 'id_provinc', 'num': 'num', 'denominazi': 'denominazi', 'norma': 'norma', 'ctr': 'ctr', 'foce_sbocc': 'foce_sbocc', 'limiti': 'limiti', 'escluso': 'escluso', 'tratto_esc': 'tratto_esc', 'motivo_esc': 'motivo_esc', 'data_agg': 'data_agg', 'id_cac': 'id_cac', });
lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12.set('fieldAliases', {'gid': 'gid', 'id_provinc': 'id_provinc', 'num': 'num', 'denominazi': 'denominazi', 'norma': 'norma', 'ctr': 'ctr', 'foce_sbocc': 'foce_sbocc', 'limiti': 'limiti', 'escluso': 'escluso', 'tratto_esc': 'tratto_esc', 'motivo_esc': 'motivo_esc', 'data_agg': 'data_agg', 'id_cac': 'id_cac', });
lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13.set('fieldAliases', {'gid': 'gid', 'quota': 'quota', 'data_cts': 'data_cts', });
lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.set('fieldAliases', {'gid': 'gid', 'province': 'province', 'comuni': 'comuni', 'localita': 'localita', 'nome': 'nome', 'didascalia': 'didascalia', });
lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'aapp': 'aapp', 'tipologia': 'tipologia', 'nome': 'nome', 'nome_lungo': 'nome_lungo', 'link_web': 'link_web', 'fuori_rer': 'fuori_rer', 'sup_ha': 'sup_ha', });
lyr_rer_bp_usc_pt_ValTaro_ValCeno_16.set('fieldAliases', {'gid': 'gid', 'id_usu': 'id_usu', 'nome_usu': 'nome_usu', 'tipo_acc': 'tipo_acc', 'id_usc': 'id_usc', 'nome_usc': 'nome_usc', 'ente_perim': 'ente_perim', 'doc_perim': 'doc_perim', 'link': 'link', 'dt_ch_oper': 'dt_ch_oper', 'cod_arc': 'cod_arc', 'data_agg': 'data_agg', });
lyr_rer_bp_usc_pl_ValTaro_ValCeno_17.set('fieldAliases', {'gid': 'gid', 'id_usu': 'id_usu', 'nome_usu': 'nome_usu', 'tipo_acc': 'tipo_acc', 'id_usc': 'id_usc', 'nome_usc': 'nome_usc', 'ente_perim': 'ente_perim', 'doc_perim': 'doc_perim', 'link': 'link', 'dt_ch_oper': 'dt_ch_oper', 'cod_arc': 'cod_arc', 'data_agg': 'data_agg', });
lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18.set('fieldAliases', {'gid': 'gid', 'istat': 'istat', 'nome_c': 'nome_c', 'usc_presen': 'usc_presen', 'data_agg': 'data_agg', });
lyr_rer_bp_imm_pl_ValTaro_ValCeno_19.set('fieldAliases', {'gid': 'gid', 'id_imm': 'id_imm', 'titolo': 'titolo', 'descrizion': 'descrizion', 'foto_princ': 'foto_princ', 'link': 'link', 'stato': 'stato', });
lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'proprietar': 'proprietar', 'provincia': 'provincia', 'comune': 'comune', 'diocesi': 'diocesi', 'frazione': 'frazione', 'indirizzo': 'indirizzo', 'tipo_tutel': 'tipo_tutel', 'tipo_propr': 'tipo_propr', 'provvedime': 'provvedime', 'stato': 'stato', 'albero_mon': 'albero_mon', 'id_comune_': 'id_comune_', 'link_fai': 'link_fai', 'estense': 'estense', 'id_regione': 'id_regione', 'id_comune2': 'id_comune2', });
lyr_tourer_pt_ValTaro_ValCeno_21.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'denominazi': 'denominazi', 'sigla_pro': 'sigla_pro', 'provincia': 'provincia', 'comune': 'comune', 'diocesi': 'diocesi', 'frazione': 'frazione', 'indirizzo': 'indirizzo', 'tipo_tutel': 'tipo_tutel', 'tipologia': 'tipologia', 'cronologia': 'cronologia', 'id_valutaz': 'id_valutaz', 'foto': 'foto', 'autore': 'autore', 'fonte': 'fonte', 'thumb': 'thumb', 'tipologie_': 'tipologie_', 'tutela': 'tutela', 'descrizion': 'descrizion', 'categoria': 'categoria', 'icona_mapp': 'icona_mapp', 'icona_sche': 'icona_sche', 'localita': 'localita', 'link': 'link', 'categoria_': 'categoria_', 'tipologia_': 'tipologia_', 'tipologi_1': 'tipologi_1', 'cronolog_1': 'cronolog_1', 'tipo_tut_1': 'tipo_tut_1', 'sito_web': 'sito_web', 'avvisi_fru': 'avvisi_fru', 'codice_web': 'codice_web', 'data_upd': 'data_upd', 'link_sched': 'link_sched', 'valutazion': 'valutazion', 'lon': 'lon', 'lat': 'lat', 'comune_alt': 'comune_alt', 'descrizi_1': 'descrizi_1', 'id_eta': 'id_eta', 'eta': 'eta', 'eta_en': 'eta_en', 'fai': 'fai', 'viv': 'viv', 'comune2': 'comune2', 'id_wikidat': 'id_wikidat', });
lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'provincia': 'provincia', 'comune': 'comune', 'indirizzo': 'indirizzo', 'tipo': 'tipo', 'servizi': 'servizi', 'orari': 'orari', 'archivi': 'archivi', 'codice_com': 'codice_com', 'complesso': 'complesso', 'url': 'url', 'link_sa': 'link_sa', 'id_regione': 'id_regione', });
lyr_ValTaro_ValCeno_23.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Popolazione_Residente_COD_COM': 'Popolazione_Residente_COD_COM', 'Popolazione_Residente_PROV': 'Popolazione_Residente_PROV', 'Popolazione_Residente_LONGIT': 'Popolazione_Residente_LONGIT', 'Popolazione_Residente_LATITUD': 'Popolazione_Residente_LATITUD', 'Popolazione_Residente_VAL': 'Popolazione_Residente_VAL', 'Popolazione_Residente_0-2M': 'Popolazione_Residente_0-2M', 'Popolazione_Residente_3-5M': 'Popolazione_Residente_3-5M', 'Popolazione_Residente_6-11M': 'Popolazione_Residente_6-11M', 'Popolazione_Residente_12-17M': 'Popolazione_Residente_12-17M', 'Popolazione_Residente_18-24M': 'Popolazione_Residente_18-24M', 'Popolazione_Residente_25-34M': 'Popolazione_Residente_25-34M', 'Popolazione_Residente_35-44M': 'Popolazione_Residente_35-44M', 'Popolazione_Residente_45-54M': 'Popolazione_Residente_45-54M', 'Popolazione_Residente_55-64M': 'Popolazione_Residente_55-64M', 'Popolazione_Residente_65-74M': 'Popolazione_Residente_65-74M', 'Popolazione_Residente_75-84M': 'Popolazione_Residente_75-84M', 'Popolazione_Residente_O84M': 'Popolazione_Residente_O84M', 'Popolazione_Residente_TOTM': 'Popolazione_Residente_TOTM', 'Popolazione_Residente_0-2F': 'Popolazione_Residente_0-2F', 'Popolazione_Residente_3-5F': 'Popolazione_Residente_3-5F', 'Popolazione_Residente_6-11F': 'Popolazione_Residente_6-11F', 'Popolazione_Residente_12-17F': 'Popolazione_Residente_12-17F', 'Popolazione_Residente_18-24F': 'Popolazione_Residente_18-24F', 'Popolazione_Residente_25-34F': 'Popolazione_Residente_25-34F', 'Popolazione_Residente_35-44F': 'Popolazione_Residente_35-44F', 'Popolazione_Residente_45-54F': 'Popolazione_Residente_45-54F', 'Popolazione_Residente_55-64F': 'Popolazione_Residente_55-64F', 'Popolazione_Residente_65-74F': 'Popolazione_Residente_65-74F', 'Popolazione_Residente_75-84F': 'Popolazione_Residente_75-84F', 'Popolazione_Residente_O84F': 'Popolazione_Residente_O84F', 'Popolazione_Residente_TOTF': 'Popolazione_Residente_TOTF', 'Popolazione_Residente_TOT': 'Popolazione_Residente_TOT', });
lyr_varsi_other_24.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034046_Varsi20241112T08Zmultipolygons_25.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034046_Varsi20241112T08Zlines_26.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034046_Varsi20241112T08Zmultilinestrings_27.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034046_Varsi20241112T08Zpoints_28.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_varano_other_29.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034045_Varano_de_Melegari20250114T14Zlines_31.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034045_Varano_de_Melegari20250114T14Zpoints_33.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_034044_Valmozzola20241112T08Zmultipolygons_34.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034044_Valmozzola20241112T08Zlines_35.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034044_Valmozzola20241112T08Zmultilinestrings_36.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034044_Valmozzola20241112T08Zpoints_37.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_tornolo_other_38.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034040_Tornolo20241112T08Zmultipolygons_39.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034040_Tornolo20241112T08Zlines_40.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034040_Tornolo20241112T08Zmultilinestrings_41.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034040_Tornolo20241112T08Zpoints_42.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_034035_Solignano20241112T08Zmultipolygons_43.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034035_Solignano20241112T08Zlines_44.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034035_Solignano20241112T08Zmultilinestrings_45.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034035_Solignano20241112T08Zpoints_46.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_pellegrino_other_47.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034028_Pellegrino_Parmense20241112T08Zlines_49.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034017_Fornovo_di_Taro20241112T08Zlines_53.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_compiano_other_56.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034011_Compiano20241112T08Zmultipolygons_57.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034011_Compiano20241112T08Zlines_58.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034011_Compiano20241112T08Zmultilinestrings_59.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034011_Compiano20241112T08Zpoints_60.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_bore_other_65.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034005_Bore20241112T08Zmultipolygons_66.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034005_Bore20241112T08Zlines_67.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034005_Bore20241112T08Zmultilinestrings_68.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034005_Bore20241112T08Zpoints_69.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_bedonia_other_70.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034003_Bedonia20241112T08Zmultipolygons_71.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034003_Bedonia20241112T08Zlines_72.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034003_Bedonia20241112T08Zmultilinestrings_73.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034003_Bedonia20241112T08Zpoints_74.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_034002_Bardi20241112T08Zmultipolygons_75.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_034002_Bardi20241112T08Zlines_76.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_034002_Bardi20241112T08Zmultilinestrings_77.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_034002_Bardi20241112T08Zpoints_78.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_multipolygons_79.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_multilinestrings_80.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_lines_81.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_points_82.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_perimetro_new_83.set('fieldAliases', {'id': 'id', });
lyr_temperatura_86.set('fieldAliases', {'ISTAT': 'ISTAT', 'PROV': 'PROV', 'LATITUD': 'LATITUD', 'LONGIT': 'LONGIT', 'VAL': 'VAL', '2023_MEDIA': '2023_MEDIA', 'GEN24_TEMP': 'GEN24_TEMP', 'FEB24_TEMP': 'FEB24_TEMP', 'MAR24_TEMP': 'MAR24_TEMP', 'APR24_TEMP': 'APR24_TEMP', 'MAG24_TEMP': 'MAG24_TEMP', 'GIU24_TEMP': 'GIU24_TEMP', 'LUG24_TEMP': 'LUG24_TEMP', 'AGO24_TEMP': 'AGO24_TEMP', 'SET24_TEMP': 'SET24_TEMP', 'OTT24_TEMP': 'OTT24_TEMP', 'NOV24_TEMP': 'NOV24_TEMP', 'DIC24_TEMP': 'DIC24_TEMP', '2024_MEDIA': '2024_MEDIA', });
lyr_isoiete_2023_new_89.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_isoiete_2024_new_90.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_precipitazioni_91.set('fieldAliases', {'ISTAT': 'ISTAT', 'PROV': 'PROV', 'LATITUD': 'LATITUD', 'LONGIT': 'LONGIT', 'VAL': 'VAL', 'GEN23_TOT': 'GEN23_TOT', 'GEN23_MEDI': 'GEN23_MEDI', 'FEB23_TOT': 'FEB23_TOT', 'FEB23_MEDI': 'FEB23_MEDI', 'MAR23_TOT': 'MAR23_TOT', 'MAR23_MEDI': 'MAR23_MEDI', 'APR23_TOT': 'APR23_TOT', 'APR23_MEDI': 'APR23_MEDI', 'MAG23_TOT': 'MAG23_TOT', 'MAG23_MEDI': 'MAG23_MEDI', 'GIU23_TOT': 'GIU23_TOT', 'GIU23_MEDI': 'GIU23_MEDI', 'LUG23_TOT': 'LUG23_TOT', 'LUG23_MEDI': 'LUG23_MEDI', 'AGO23_TOT': 'AGO23_TOT', 'AGO23_MEDI': 'AGO23_MEDI', 'SET23_TOT': 'SET23_TOT', 'SET23_MEDI': 'SET23_MEDI', 'OTT23_TOT': 'OTT23_TOT', 'OTT23_MEDI': 'OTT23_MEDI', 'NOV23_TOT': 'NOV23_TOT', 'NOV23_MEDI': 'NOV23_MEDI', 'DIC23_TOT': 'DIC23_TOT', 'DIC23_MEDI': 'DIC23_MEDI', '2023_TOT': '2023_TOT', '2023_MEDIA': '2023_MEDIA', 'GEN24_TOT': 'GEN24_TOT', 'GEN24_MEDI': 'GEN24_MEDI', 'FEB24_TOT': 'FEB24_TOT', 'FEB24_MEDI': 'FEB24_MEDI', 'MAR24_TOT': 'MAR24_TOT', 'MAR24_MEDI': 'MAR24_MEDI', 'APR24_TOT': 'APR24_TOT', 'APR24_MEDI': 'APR24_MEDI', 'MAG24_TOT': 'MAG24_TOT', 'MAG24_MEDI': 'MAG24_MEDI', 'GIU24_TOT': 'GIU24_TOT', 'GIU24_MEDI': 'GIU24_MEDI', 'LUG24_TOT': 'LUG24_TOT', 'LUG24_MEDI': 'LUG24_MEDI', 'AGO24_TOT': 'AGO24_TOT', 'AGO24_MEDI': 'AGO24_MEDI', 'SET24_TOT': 'SET24_TOT', 'SET24_MEDI': 'SET24_MEDI', 'OTT24_TOT': 'OTT24_TOT', 'OTT24_MEDI': 'OTT24_MEDI', 'NOV24_TOT': 'NOV24_TOT', 'NOV24_MEDI': 'NOV24_MEDI', 'DIC24_TOT': 'DIC24_TOT', 'DIC24_MEDI': 'DIC24_MEDI', '2024_TOT': '2024_TOT', '2024_MEDIA': '2024_MEDIA', });
lyr_Densita_Popolazione_92.set('fieldAliases', {'COD_COM': 'COD_COM', 'PROV': 'PROV', 'LONGIT': 'LONGIT', 'LATITUD': 'LATITUD', 'VAL': 'VAL', '0-2M': '0-2M', '3-5M': '3-5M', '6-11M': '6-11M', '12-17M': '12-17M', '18-24M': '18-24M', '25-34M': '25-34M', '35-44M': '35-44M', '45-54M': '45-54M', '55-64M': '55-64M', '65-74M': '65-74M', '75-84M': '75-84M', 'O84M': 'O84M', 'TOTM': 'TOTM', '0-2F': '0-2F', '3-5F': '3-5F', '6-11F': '6-11F', '12-17F': '12-17F', '18-24F': '18-24F', '25-34F': '25-34F', '35-44F': '35-44F', '45-54F': '45-54F', '55-64F': '55-64F', '65-74F': '65-74F', '75-84F': '75-84F', 'O84F': 'O84F', 'TOTF': 'TOTF', 'TOT': 'TOT', 'DENSITA': 'DENSITA', });
lyr_Totale_Popolazione_93.set('fieldAliases', {'COD_COM': 'COD_COM', 'PROV': 'PROV', 'LONGIT': 'LONGIT', 'LATITUD': 'LATITUD', 'VAL': 'VAL', '0-2M': '0-2M', '3-5M': '3-5M', '6-11M': '6-11M', '12-17M': '12-17M', '18-24M': '18-24M', '25-34M': '25-34M', '35-44M': '35-44M', '45-54M': '45-54M', '55-64M': '55-64M', '65-74M': '65-74M', '75-84M': '75-84M', 'O84M': 'O84M', 'TOTM': 'TOTM', '0-2F': '0-2F', '3-5F': '3-5F', '6-11F': '6-11F', '12-17F': '12-17F', '18-24F': '18-24F', '25-34F': '25-34F', '35-44F': '35-44F', '45-54F': '45-54F', '55-64F': '55-64F', '65-74F': '65-74F', '75-84F': '75-84F', 'O84F': 'O84F', 'TOTF': 'TOTF', 'TOT': 'TOT', 'DENSITA': 'DENSITA', });
lyr_Popolazione_Residente_94.set('fieldAliases', {'COD_COM': 'COD_COM', 'PROV': 'PROV', 'LONGIT': 'LONGIT', 'LATITUD': 'LATITUD', 'VAL': 'VAL', '0-2M': '0-2M', '3-5M': '3-5M', '6-11M': '6-11M', '12-17M': '12-17M', '18-24M': '18-24M', '25-34M': '25-34M', '35-44M': '35-44M', '45-54M': '45-54M', '55-64M': '55-64M', '65-74M': '65-74M', '75-84M': '75-84M', 'O84M': 'O84M', 'TOTM': 'TOTM', '0-2F': '0-2F', '3-5F': '3-5F', '6-11F': '6-11F', '12-17F': '12-17F', '18-24F': '18-24F', '25-34F': '25-34F', '35-44F': '35-44F', '45-54F': '45-54F', '55-64F': '55-64F', '65-74F': '65-74F', '75-84F': '75-84F', 'O84F': 'O84F', 'TOTF': 'TOTF', 'TOT': 'TOT', 'DENSITA': 'DENSITA', });
lyr_HeatMap_Popolaz_Residente_95.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Popolazione_Residente_COD_COM': 'Popolazione_Residente_COD_COM', 'Popolazione_Residente_PROV': 'Popolazione_Residente_PROV', 'Popolazione_Residente_LONGIT': 'Popolazione_Residente_LONGIT', 'Popolazione_Residente_LATITUD': 'Popolazione_Residente_LATITUD', 'Popolazione_Residente_VAL': 'Popolazione_Residente_VAL', 'Popolazione_Residente_0-2M': 'Popolazione_Residente_0-2M', 'Popolazione_Residente_3-5M': 'Popolazione_Residente_3-5M', 'Popolazione_Residente_6-11M': 'Popolazione_Residente_6-11M', 'Popolazione_Residente_12-17M': 'Popolazione_Residente_12-17M', 'Popolazione_Residente_18-24M': 'Popolazione_Residente_18-24M', 'Popolazione_Residente_25-34M': 'Popolazione_Residente_25-34M', 'Popolazione_Residente_35-44M': 'Popolazione_Residente_35-44M', 'Popolazione_Residente_45-54M': 'Popolazione_Residente_45-54M', 'Popolazione_Residente_55-64M': 'Popolazione_Residente_55-64M', 'Popolazione_Residente_65-74M': 'Popolazione_Residente_65-74M', 'Popolazione_Residente_75-84M': 'Popolazione_Residente_75-84M', 'Popolazione_Residente_O84M': 'Popolazione_Residente_O84M', 'Popolazione_Residente_TOTM': 'Popolazione_Residente_TOTM', 'Popolazione_Residente_0-2F': 'Popolazione_Residente_0-2F', 'Popolazione_Residente_3-5F': 'Popolazione_Residente_3-5F', 'Popolazione_Residente_6-11F': 'Popolazione_Residente_6-11F', 'Popolazione_Residente_12-17F': 'Popolazione_Residente_12-17F', 'Popolazione_Residente_18-24F': 'Popolazione_Residente_18-24F', 'Popolazione_Residente_25-34F': 'Popolazione_Residente_25-34F', 'Popolazione_Residente_35-44F': 'Popolazione_Residente_35-44F', 'Popolazione_Residente_45-54F': 'Popolazione_Residente_45-54F', 'Popolazione_Residente_55-64F': 'Popolazione_Residente_55-64F', 'Popolazione_Residente_65-74F': 'Popolazione_Residente_65-74F', 'Popolazione_Residente_75-84F': 'Popolazione_Residente_75-84F', 'Popolazione_Residente_O84F': 'Popolazione_Residente_O84F', 'Popolazione_Residente_TOTF': 'Popolazione_Residente_TOTF', 'Popolazione_Residente_TOT': 'Popolazione_Residente_TOT', });
lyr_HeatMap_Popolaz_Residente_MF_96.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Popolazione_Residente_COD_COM': 'Popolazione_Residente_COD_COM', 'Popolazione_Residente_PROV': 'Popolazione_Residente_PROV', 'Popolazione_Residente_LONGIT': 'Popolazione_Residente_LONGIT', 'Popolazione_Residente_LATITUD': 'Popolazione_Residente_LATITUD', 'Popolazione_Residente_VAL': 'Popolazione_Residente_VAL', 'Popolazione_Residente_0-2M': 'Popolazione_Residente_0-2M', 'Popolazione_Residente_3-5M': 'Popolazione_Residente_3-5M', 'Popolazione_Residente_6-11M': 'Popolazione_Residente_6-11M', 'Popolazione_Residente_12-17M': 'Popolazione_Residente_12-17M', 'Popolazione_Residente_18-24M': 'Popolazione_Residente_18-24M', 'Popolazione_Residente_25-34M': 'Popolazione_Residente_25-34M', 'Popolazione_Residente_35-44M': 'Popolazione_Residente_35-44M', 'Popolazione_Residente_45-54M': 'Popolazione_Residente_45-54M', 'Popolazione_Residente_55-64M': 'Popolazione_Residente_55-64M', 'Popolazione_Residente_65-74M': 'Popolazione_Residente_65-74M', 'Popolazione_Residente_75-84M': 'Popolazione_Residente_75-84M', 'Popolazione_Residente_O84M': 'Popolazione_Residente_O84M', 'Popolazione_Residente_TOTM': 'Popolazione_Residente_TOTM', 'Popolazione_Residente_0-2F': 'Popolazione_Residente_0-2F', 'Popolazione_Residente_3-5F': 'Popolazione_Residente_3-5F', 'Popolazione_Residente_6-11F': 'Popolazione_Residente_6-11F', 'Popolazione_Residente_12-17F': 'Popolazione_Residente_12-17F', 'Popolazione_Residente_18-24F': 'Popolazione_Residente_18-24F', 'Popolazione_Residente_25-34F': 'Popolazione_Residente_25-34F', 'Popolazione_Residente_35-44F': 'Popolazione_Residente_35-44F', 'Popolazione_Residente_45-54F': 'Popolazione_Residente_45-54F', 'Popolazione_Residente_55-64F': 'Popolazione_Residente_55-64F', 'Popolazione_Residente_65-74F': 'Popolazione_Residente_65-74F', 'Popolazione_Residente_75-84F': 'Popolazione_Residente_75-84F', 'Popolazione_Residente_O84F': 'Popolazione_Residente_O84F', 'Popolazione_Residente_TOTF': 'Popolazione_Residente_TOTF', 'Popolazione_Residente_TOT': 'Popolazione_Residente_TOT', });
lyr_am_v_alberi_pt_ValTaro_ValCeno_1.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'descrizion': '', 'specie': '', 'nome_scien': '', 'comune': '', 'sigla_pro': '', 'localita': '', 'lon': '', 'lat': '', 'altitudine': '', 'contesto_u': '', 'dichiarazi': '', 'circonfere': '', 'altezza': '', 'criteri': '', 'foto_princ': '', 'valutazion': '', 'tot_foto': '', 'autore': '', 'indirizzo': '', 'istat_prov': '', 'provincia': '', 'frazione': '', });
lyr_a_v_scavi_pl_ValTaro_ValCeno_2.set('fieldImages', {'gid': '', 'id_scavo': '', 'nome': '', 'indirizzo': '', 'localita': '', 'comune': '', 'provincia': '', 'descrizion': '', 'quota_zero': '', 'quota_ze_1': '', 'prof_max': '', 'anno_inizi': '', 'anno_fine': '', 'funzionari': '', 'ditta_prof': '', 'collocazio': '', 'bibliograf': '', 'osservazio': '', 'funziona_1': '', 'ente_respo': '', 'compilator': '', 'metodologi': '', 'qualita_po': '', 'note_posiz': '', 'tipiindagi': '', 'origine_in': '', 'num_protoc': '', 'anno_proto': '', 'ambito_app': '', 'stato_sche': '', 'prof_min_r': '', 'prof_max_r': '', 'min_epocad': '', 'max_epocaa': '', 'min_secolo': '', 'max_secolo': '', 'tipologie': '', 'fasi': '', 'tutelato': '', });
lyr_a_v_scavi_ln_ValTaro_ValCeno_3.set('fieldImages', {'gid': '', 'id_scavo': '', 'nome': '', 'indirizzo': '', 'localita': '', 'comune': '', 'provincia': '', 'descrizion': '', 'quota_zero': '', 'quota_ze_1': '', 'prof_max': '', 'anno_inizi': '', 'anno_fine': '', 'funzionari': '', 'ditta_prof': '', 'collocazio': '', 'bibliograf': '', 'osservazio': '', 'funziona_1': '', 'ente_respo': '', 'compilator': '', 'metodologi': '', 'qualita_po': '', 'note_posiz': '', 'tipiindagi': '', 'origine_in': '', 'num_protoc': '', 'anno_proto': '', 'ambito_app': '', 'stato_sche': '', 'prof_min_r': '', 'prof_max_r': '', 'min_epocad': '', 'max_epocaa': '', 'min_secolo': '', 'max_secolo': '', 'tipologie': '', 'fasi': '', 'tutelato': '', });
lyr_a_v_scavi_pt_ValTaro_ValCeno_4.set('fieldImages', {'gid': '', 'id_scavo': '', 'nome': '', 'indirizzo': '', 'localita': '', 'comune': '', 'provincia': '', 'descrizion': '', 'quota_zero': '', 'quota_ze_1': '', 'prof_max': '', 'anno_inizi': '', 'anno_fine': '', 'funzionari': '', 'ditta_prof': '', 'collocazio': '', 'bibliograf': '', 'osservazio': '', 'funziona_1': '', 'ente_respo': '', 'compilator': '', 'metodologi': '', 'qualita_po': '', 'note_posiz': '', 'tipiindagi': '', 'origine_in': '', 'num_protoc': '', 'anno_proto': '', 'ambito_app': '', 'stato_sche': '', 'prof_min_r': '', 'prof_max_r': '', 'min_epocad': '', 'max_epocaa': '', 'min_secolo': '', 'max_secolo': '', 'tipologie': '', 'fasi': '', 'tutelato': '', });
lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5.set('fieldImages', {'gid': '', 'id_archeo': '', 'codice': '', 'nome': '', 'titolo': '', 'tipo_propr': '', 'comuni': '', 'sigla_pro': '', 'localita': '', 'tipologie': '', 'provvedime': '', 'data_ultim': '', 'ultimo_pro': '', 'rif_legge_': '', 'tutela': '', 'vincolo': '', });
lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6.set('fieldImages', {'gid': '', 'id_archeo': '', 'codice': '', 'nome': '', 'titolo': '', 'tipo_propr': '', 'comuni': '', 'sigla_pro': '', 'localita': '', 'tipologie': '', 'provvedime': '', 'data_ultim': '', 'ultimo_pro': '', 'rif_legge_': '', 'tutela': '', 'vincolo': '', });
lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'descrizion': '', 'titolo': '', 'tipo_propr': '', 'comuni': '', 'sigla_pro': '', 'localita': '', 'indirizzo': '', 'tipologie': '', 'provvedime': '', 'data_ultim': '', 'ultimo_pro': '', 'rif_legge_': '', 'tutela': '', 'vincolo': '', 'lon': '', 'lat': '', 'id_categor': '', 'categoria': '', 'categoria_': '', 'id_valutaz': '', 'valutazion': '', 'sito_web': '', 'link': '', 'avvisi_fru': '', 'foto_princ': '', 'tot_foto': '', 'autore': '', });
lyr_bt_v_complessi_pt_ValTaro_ValCeno_8.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'proprietar': '', 'provincia': '', 'comune': '', 'diocesi': '', 'frazione': '', 'indirizzo': '', 'tipo_tutel': '', 'tipo_propr': '', 'categoria': '', 'eta': '', 'eta_attest': '', 'stato': '', 'data_cambi': '', 'data_upd': '', 'lon': '', 'lat': '', 'x': '', 'y': '', 'guidarossa': '', 'link_fai': '', 'foto_princ': '', 'autore_fot': '', 'estense': '', 'id_regione': '', 'in_tourer': '', 'etichetta': '', });
lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9.set('fieldImages', {'gid': '', 'id_e': '', 'nm_sda': '', 'tipo_lago': '', 'perimetro': '', 'data_cts': '', });
lyr_rer_bp_fiumi150_ValTaro_ValCeno_10.set('fieldImages', {'gid': '', 'data_agg': '', });
lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11.set('fieldImages', {'gid': '', 'id_provinc': '', 'num': '', 'denominazi': '', 'norma': '', 'ctr': '', 'foce_sbocc': '', 'limiti': '', 'escluso': '', 'tratto_esc': '', 'motivo_esc': '', 'data_agg': '', 'id_cac': '', });
lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12.set('fieldImages', {'gid': '', 'id_provinc': '', 'num': '', 'denominazi': '', 'norma': '', 'ctr': '', 'foce_sbocc': '', 'limiti': '', 'escluso': '', 'tratto_esc': '', 'motivo_esc': '', 'data_agg': '', 'id_cac': '', });
lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13.set('fieldImages', {'gid': '', 'quota': '', 'data_cts': '', });
lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.set('fieldImages', {'gid': '', 'province': '', 'comuni': '', 'localita': '', 'nome': '', 'didascalia': '', });
lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15.set('fieldImages', {'gid': '', 'objectid': '', 'aapp': '', 'tipologia': '', 'nome': '', 'nome_lungo': '', 'link_web': '', 'fuori_rer': '', 'sup_ha': '', });
lyr_rer_bp_usc_pt_ValTaro_ValCeno_16.set('fieldImages', {'gid': '', 'id_usu': '', 'nome_usu': '', 'tipo_acc': '', 'id_usc': '', 'nome_usc': '', 'ente_perim': '', 'doc_perim': '', 'link': '', 'dt_ch_oper': '', 'cod_arc': '', 'data_agg': '', });
lyr_rer_bp_usc_pl_ValTaro_ValCeno_17.set('fieldImages', {'gid': '', 'id_usu': '', 'nome_usu': '', 'tipo_acc': '', 'id_usc': '', 'nome_usc': '', 'ente_perim': '', 'doc_perim': '', 'link': '', 'dt_ch_oper': '', 'cod_arc': '', 'data_agg': '', });
lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18.set('fieldImages', {'gid': '', 'istat': '', 'nome_c': '', 'usc_presen': '', 'data_agg': '', });
lyr_rer_bp_imm_pl_ValTaro_ValCeno_19.set('fieldImages', {'gid': '', 'id_imm': '', 'titolo': '', 'descrizion': '', 'foto_princ': '', 'link': '', 'stato': '', });
lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'proprietar': '', 'provincia': '', 'comune': '', 'diocesi': '', 'frazione': '', 'indirizzo': '', 'tipo_tutel': '', 'tipo_propr': '', 'provvedime': '', 'stato': '', 'albero_mon': '', 'id_comune_': '', 'link_fai': '', 'estense': '', 'id_regione': '', 'id_comune2': '', });
lyr_tourer_pt_ValTaro_ValCeno_21.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'denominazi': '', 'sigla_pro': '', 'provincia': '', 'comune': '', 'diocesi': '', 'frazione': '', 'indirizzo': '', 'tipo_tutel': '', 'tipologia': '', 'cronologia': '', 'id_valutaz': '', 'foto': '', 'autore': '', 'fonte': '', 'thumb': '', 'tipologie_': '', 'tutela': '', 'descrizion': '', 'categoria': '', 'icona_mapp': '', 'icona_sche': '', 'localita': '', 'link': '', 'categoria_': '', 'tipologia_': '', 'tipologi_1': '', 'cronolog_1': '', 'tipo_tut_1': '', 'sito_web': '', 'avvisi_fru': '', 'codice_web': '', 'data_upd': '', 'link_sched': '', 'valutazion': '', 'lon': '', 'lat': '', 'comune_alt': '', 'descrizi_1': '', 'id_eta': '', 'eta': '', 'eta_en': '', 'fai': '', 'viv': '', 'comune2': '', 'id_wikidat': '', });
lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22.set('fieldImages', {'gid': '', 'codice': '', 'nome': '', 'provincia': '', 'comune': '', 'indirizzo': '', 'tipo': '', 'servizi': '', 'orari': '', 'archivi': '', 'codice_com': '', 'complesso': '', 'url': '', 'link_sa': '', 'id_regione': '', });
lyr_ValTaro_ValCeno_23.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Popolazione_Residente_COD_COM': '', 'Popolazione_Residente_PROV': '', 'Popolazione_Residente_LONGIT': '', 'Popolazione_Residente_LATITUD': '', 'Popolazione_Residente_VAL': '', 'Popolazione_Residente_0-2M': '', 'Popolazione_Residente_3-5M': '', 'Popolazione_Residente_6-11M': '', 'Popolazione_Residente_12-17M': '', 'Popolazione_Residente_18-24M': '', 'Popolazione_Residente_25-34M': '', 'Popolazione_Residente_35-44M': '', 'Popolazione_Residente_45-54M': '', 'Popolazione_Residente_55-64M': '', 'Popolazione_Residente_65-74M': '', 'Popolazione_Residente_75-84M': '', 'Popolazione_Residente_O84M': '', 'Popolazione_Residente_TOTM': '', 'Popolazione_Residente_0-2F': '', 'Popolazione_Residente_3-5F': '', 'Popolazione_Residente_6-11F': '', 'Popolazione_Residente_12-17F': '', 'Popolazione_Residente_18-24F': '', 'Popolazione_Residente_25-34F': '', 'Popolazione_Residente_35-44F': '', 'Popolazione_Residente_45-54F': '', 'Popolazione_Residente_55-64F': '', 'Popolazione_Residente_65-74F': '', 'Popolazione_Residente_75-84F': '', 'Popolazione_Residente_O84F': '', 'Popolazione_Residente_TOTF': '', 'Popolazione_Residente_TOT': '', });
lyr_varsi_other_24.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034046_Varsi20241112T08Zmultipolygons_25.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034046_Varsi20241112T08Zlines_26.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034046_Varsi20241112T08Zmultilinestrings_27.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034046_Varsi20241112T08Zpoints_28.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_varano_other_29.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034045_Varano_de_Melegari20250114T14Zlines_31.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034045_Varano_de_Melegari20250114T14Zpoints_33.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_034044_Valmozzola20241112T08Zmultipolygons_34.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034044_Valmozzola20241112T08Zlines_35.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034044_Valmozzola20241112T08Zmultilinestrings_36.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034044_Valmozzola20241112T08Zpoints_37.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_tornolo_other_38.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034040_Tornolo20241112T08Zmultipolygons_39.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034040_Tornolo20241112T08Zlines_40.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034040_Tornolo20241112T08Zmultilinestrings_41.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034040_Tornolo20241112T08Zpoints_42.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_034035_Solignano20241112T08Zmultipolygons_43.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034035_Solignano20241112T08Zlines_44.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034035_Solignano20241112T08Zmultilinestrings_45.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034035_Solignano20241112T08Zpoints_46.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_pellegrino_other_47.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034028_Pellegrino_Parmense20241112T08Zlines_49.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034017_Fornovo_di_Taro20241112T08Zlines_53.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_compiano_other_56.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034011_Compiano20241112T08Zmultipolygons_57.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034011_Compiano20241112T08Zlines_58.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034011_Compiano20241112T08Zmultilinestrings_59.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034011_Compiano20241112T08Zpoints_60.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_bore_other_65.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034005_Bore20241112T08Zmultipolygons_66.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034005_Bore20241112T08Zlines_67.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034005_Bore20241112T08Zmultilinestrings_68.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034005_Bore20241112T08Zpoints_69.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_bedonia_other_70.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034003_Bedonia20241112T08Zmultipolygons_71.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034003_Bedonia20241112T08Zlines_72.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034003_Bedonia20241112T08Zmultilinestrings_73.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034003_Bedonia20241112T08Zpoints_74.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_034002_Bardi20241112T08Zmultipolygons_75.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_034002_Bardi20241112T08Zlines_76.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_034002_Bardi20241112T08Zmultilinestrings_77.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_034002_Bardi20241112T08Zpoints_78.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_multipolygons_79.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_level': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_multilinestrings_80.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_lines_81.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_points_82.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_perimetro_new_83.set('fieldImages', {'id': 'TextEdit', });
lyr_temperatura_86.set('fieldImages', {'ISTAT': 'TextEdit', 'PROV': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGIT': 'TextEdit', 'VAL': 'TextEdit', '2023_MEDIA': 'TextEdit', 'GEN24_TEMP': 'TextEdit', 'FEB24_TEMP': 'TextEdit', 'MAR24_TEMP': 'TextEdit', 'APR24_TEMP': 'TextEdit', 'MAG24_TEMP': 'TextEdit', 'GIU24_TEMP': 'TextEdit', 'LUG24_TEMP': 'TextEdit', 'AGO24_TEMP': 'TextEdit', 'SET24_TEMP': 'TextEdit', 'OTT24_TEMP': 'TextEdit', 'NOV24_TEMP': 'TextEdit', 'DIC24_TEMP': 'TextEdit', '2024_MEDIA': 'TextEdit', });
lyr_isoiete_2023_new_89.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_isoiete_2024_new_90.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_precipitazioni_91.set('fieldImages', {'ISTAT': 'TextEdit', 'PROV': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGIT': 'TextEdit', 'VAL': 'TextEdit', 'GEN23_TOT': 'TextEdit', 'GEN23_MEDI': 'TextEdit', 'FEB23_TOT': 'TextEdit', 'FEB23_MEDI': 'TextEdit', 'MAR23_TOT': 'TextEdit', 'MAR23_MEDI': 'TextEdit', 'APR23_TOT': 'TextEdit', 'APR23_MEDI': 'TextEdit', 'MAG23_TOT': 'TextEdit', 'MAG23_MEDI': 'TextEdit', 'GIU23_TOT': 'TextEdit', 'GIU23_MEDI': 'TextEdit', 'LUG23_TOT': 'TextEdit', 'LUG23_MEDI': 'TextEdit', 'AGO23_TOT': 'TextEdit', 'AGO23_MEDI': 'TextEdit', 'SET23_TOT': 'TextEdit', 'SET23_MEDI': 'TextEdit', 'OTT23_TOT': 'TextEdit', 'OTT23_MEDI': 'TextEdit', 'NOV23_TOT': 'TextEdit', 'NOV23_MEDI': 'TextEdit', 'DIC23_TOT': 'TextEdit', 'DIC23_MEDI': 'TextEdit', '2023_TOT': 'TextEdit', '2023_MEDIA': 'TextEdit', 'GEN24_TOT': 'TextEdit', 'GEN24_MEDI': 'TextEdit', 'FEB24_TOT': 'TextEdit', 'FEB24_MEDI': 'TextEdit', 'MAR24_TOT': 'TextEdit', 'MAR24_MEDI': 'TextEdit', 'APR24_TOT': 'TextEdit', 'APR24_MEDI': 'TextEdit', 'MAG24_TOT': 'TextEdit', 'MAG24_MEDI': 'TextEdit', 'GIU24_TOT': 'TextEdit', 'GIU24_MEDI': 'TextEdit', 'LUG24_TOT': 'TextEdit', 'LUG24_MEDI': 'TextEdit', 'AGO24_TOT': 'TextEdit', 'AGO24_MEDI': 'TextEdit', 'SET24_TOT': 'TextEdit', 'SET24_MEDI': 'TextEdit', 'OTT24_TOT': 'TextEdit', 'OTT24_MEDI': 'TextEdit', 'NOV24_TOT': 'TextEdit', 'NOV24_MEDI': 'TextEdit', 'DIC24_TOT': 'TextEdit', 'DIC24_MEDI': 'TextEdit', '2024_TOT': 'TextEdit', '2024_MEDIA': 'TextEdit', });
lyr_Densita_Popolazione_92.set('fieldImages', {'COD_COM': 'TextEdit', 'PROV': 'TextEdit', 'LONGIT': 'TextEdit', 'LATITUD': 'TextEdit', 'VAL': 'TextEdit', '0-2M': 'TextEdit', '3-5M': 'TextEdit', '6-11M': 'TextEdit', '12-17M': 'TextEdit', '18-24M': 'TextEdit', '25-34M': 'TextEdit', '35-44M': 'TextEdit', '45-54M': 'TextEdit', '55-64M': 'TextEdit', '65-74M': 'TextEdit', '75-84M': 'TextEdit', 'O84M': 'TextEdit', 'TOTM': 'TextEdit', '0-2F': 'TextEdit', '3-5F': 'TextEdit', '6-11F': 'TextEdit', '12-17F': 'TextEdit', '18-24F': 'TextEdit', '25-34F': 'TextEdit', '35-44F': 'TextEdit', '45-54F': 'TextEdit', '55-64F': 'TextEdit', '65-74F': 'TextEdit', '75-84F': 'TextEdit', 'O84F': 'TextEdit', 'TOTF': 'TextEdit', 'TOT': 'TextEdit', 'DENSITA': 'TextEdit', });
lyr_Totale_Popolazione_93.set('fieldImages', {'COD_COM': 'TextEdit', 'PROV': 'TextEdit', 'LONGIT': 'TextEdit', 'LATITUD': 'TextEdit', 'VAL': 'TextEdit', '0-2M': 'TextEdit', '3-5M': 'TextEdit', '6-11M': 'TextEdit', '12-17M': 'TextEdit', '18-24M': 'TextEdit', '25-34M': 'TextEdit', '35-44M': 'TextEdit', '45-54M': 'TextEdit', '55-64M': 'TextEdit', '65-74M': 'TextEdit', '75-84M': 'TextEdit', 'O84M': 'TextEdit', 'TOTM': 'TextEdit', '0-2F': 'TextEdit', '3-5F': 'TextEdit', '6-11F': 'TextEdit', '12-17F': 'TextEdit', '18-24F': 'TextEdit', '25-34F': 'TextEdit', '35-44F': 'TextEdit', '45-54F': 'TextEdit', '55-64F': 'TextEdit', '65-74F': 'TextEdit', '75-84F': 'TextEdit', 'O84F': 'TextEdit', 'TOTF': 'TextEdit', 'TOT': 'TextEdit', 'DENSITA': 'TextEdit', });
lyr_Popolazione_Residente_94.set('fieldImages', {'COD_COM': '', 'PROV': '', 'LONGIT': '', 'LATITUD': '', 'VAL': '', '0-2M': '', '3-5M': '', '6-11M': '', '12-17M': '', '18-24M': '', '25-34M': '', '35-44M': '', '45-54M': '', '55-64M': '', '65-74M': '', '75-84M': '', 'O84M': '', 'TOTM': '', '0-2F': '', '3-5F': '', '6-11F': '', '12-17F': '', '18-24F': '', '25-34F': '', '35-44F': '', '45-54F': '', '55-64F': '', '65-74F': '', '75-84F': '', 'O84F': '', 'TOTF': '', 'TOT': '', 'DENSITA': '', });
lyr_HeatMap_Popolaz_Residente_95.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Popolazione_Residente_COD_COM': 'TextEdit', 'Popolazione_Residente_PROV': 'TextEdit', 'Popolazione_Residente_LONGIT': 'TextEdit', 'Popolazione_Residente_LATITUD': 'TextEdit', 'Popolazione_Residente_VAL': 'TextEdit', 'Popolazione_Residente_0-2M': 'TextEdit', 'Popolazione_Residente_3-5M': 'TextEdit', 'Popolazione_Residente_6-11M': 'TextEdit', 'Popolazione_Residente_12-17M': 'TextEdit', 'Popolazione_Residente_18-24M': 'TextEdit', 'Popolazione_Residente_25-34M': 'TextEdit', 'Popolazione_Residente_35-44M': 'TextEdit', 'Popolazione_Residente_45-54M': 'TextEdit', 'Popolazione_Residente_55-64M': 'TextEdit', 'Popolazione_Residente_65-74M': 'TextEdit', 'Popolazione_Residente_75-84M': 'TextEdit', 'Popolazione_Residente_O84M': 'TextEdit', 'Popolazione_Residente_TOTM': 'TextEdit', 'Popolazione_Residente_0-2F': 'TextEdit', 'Popolazione_Residente_3-5F': 'TextEdit', 'Popolazione_Residente_6-11F': 'TextEdit', 'Popolazione_Residente_12-17F': 'TextEdit', 'Popolazione_Residente_18-24F': 'TextEdit', 'Popolazione_Residente_25-34F': 'TextEdit', 'Popolazione_Residente_35-44F': 'TextEdit', 'Popolazione_Residente_45-54F': 'TextEdit', 'Popolazione_Residente_55-64F': 'TextEdit', 'Popolazione_Residente_65-74F': 'TextEdit', 'Popolazione_Residente_75-84F': 'TextEdit', 'Popolazione_Residente_O84F': 'TextEdit', 'Popolazione_Residente_TOTF': 'TextEdit', 'Popolazione_Residente_TOT': 'TextEdit', });
lyr_HeatMap_Popolaz_Residente_MF_96.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Popolazione_Residente_COD_COM': 'TextEdit', 'Popolazione_Residente_PROV': 'TextEdit', 'Popolazione_Residente_LONGIT': 'TextEdit', 'Popolazione_Residente_LATITUD': 'TextEdit', 'Popolazione_Residente_VAL': 'TextEdit', 'Popolazione_Residente_0-2M': 'TextEdit', 'Popolazione_Residente_3-5M': 'TextEdit', 'Popolazione_Residente_6-11M': 'TextEdit', 'Popolazione_Residente_12-17M': 'TextEdit', 'Popolazione_Residente_18-24M': 'TextEdit', 'Popolazione_Residente_25-34M': 'TextEdit', 'Popolazione_Residente_35-44M': 'TextEdit', 'Popolazione_Residente_45-54M': 'TextEdit', 'Popolazione_Residente_55-64M': 'TextEdit', 'Popolazione_Residente_65-74M': 'TextEdit', 'Popolazione_Residente_75-84M': 'TextEdit', 'Popolazione_Residente_O84M': 'TextEdit', 'Popolazione_Residente_TOTM': 'TextEdit', 'Popolazione_Residente_0-2F': 'TextEdit', 'Popolazione_Residente_3-5F': 'TextEdit', 'Popolazione_Residente_6-11F': 'TextEdit', 'Popolazione_Residente_12-17F': 'TextEdit', 'Popolazione_Residente_18-24F': 'TextEdit', 'Popolazione_Residente_25-34F': 'TextEdit', 'Popolazione_Residente_35-44F': 'TextEdit', 'Popolazione_Residente_45-54F': 'TextEdit', 'Popolazione_Residente_55-64F': 'TextEdit', 'Popolazione_Residente_65-74F': 'TextEdit', 'Popolazione_Residente_75-84F': 'TextEdit', 'Popolazione_Residente_O84F': 'TextEdit', 'Popolazione_Residente_TOTF': 'TextEdit', 'Popolazione_Residente_TOT': 'TextEdit', });
lyr_am_v_alberi_pt_ValTaro_ValCeno_1.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'specie': 'inline label - always visible', 'nome_scien': 'inline label - always visible', 'comune': 'inline label - always visible', 'sigla_pro': 'inline label - always visible', 'localita': 'inline label - always visible', 'lon': 'inline label - always visible', 'lat': 'inline label - always visible', 'altitudine': 'inline label - always visible', 'contesto_u': 'inline label - always visible', 'dichiarazi': 'inline label - always visible', 'circonfere': 'inline label - always visible', 'altezza': 'inline label - always visible', 'criteri': 'inline label - always visible', 'foto_princ': 'inline label - always visible', 'valutazion': 'inline label - always visible', 'tot_foto': 'inline label - always visible', 'autore': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'istat_prov': 'inline label - always visible', 'provincia': 'inline label - always visible', 'frazione': 'inline label - always visible', });
lyr_a_v_scavi_pl_ValTaro_ValCeno_2.set('fieldLabels', {'gid': 'inline label - always visible', 'id_scavo': 'inline label - always visible', 'nome': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'localita': 'inline label - always visible', 'comune': 'inline label - always visible', 'provincia': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'quota_zero': 'inline label - always visible', 'quota_ze_1': 'inline label - always visible', 'prof_max': 'inline label - always visible', 'anno_inizi': 'inline label - always visible', 'anno_fine': 'inline label - always visible', 'funzionari': 'inline label - always visible', 'ditta_prof': 'inline label - always visible', 'collocazio': 'inline label - always visible', 'bibliograf': 'inline label - always visible', 'osservazio': 'inline label - always visible', 'funziona_1': 'inline label - always visible', 'ente_respo': 'inline label - always visible', 'compilator': 'inline label - always visible', 'metodologi': 'inline label - always visible', 'qualita_po': 'inline label - always visible', 'note_posiz': 'inline label - always visible', 'tipiindagi': 'inline label - always visible', 'origine_in': 'inline label - always visible', 'num_protoc': 'inline label - always visible', 'anno_proto': 'inline label - always visible', 'ambito_app': 'inline label - always visible', 'stato_sche': 'inline label - always visible', 'prof_min_r': 'inline label - always visible', 'prof_max_r': 'inline label - always visible', 'min_epocad': 'inline label - always visible', 'max_epocaa': 'inline label - always visible', 'min_secolo': 'inline label - always visible', 'max_secolo': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'fasi': 'inline label - always visible', 'tutelato': 'inline label - always visible', });
lyr_a_v_scavi_ln_ValTaro_ValCeno_3.set('fieldLabels', {'gid': 'inline label - always visible', 'id_scavo': 'inline label - always visible', 'nome': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'localita': 'inline label - always visible', 'comune': 'inline label - always visible', 'provincia': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'quota_zero': 'inline label - always visible', 'quota_ze_1': 'inline label - always visible', 'prof_max': 'inline label - always visible', 'anno_inizi': 'inline label - always visible', 'anno_fine': 'inline label - always visible', 'funzionari': 'inline label - always visible', 'ditta_prof': 'inline label - always visible', 'collocazio': 'inline label - always visible', 'bibliograf': 'inline label - always visible', 'osservazio': 'inline label - always visible', 'funziona_1': 'inline label - always visible', 'ente_respo': 'inline label - always visible', 'compilator': 'inline label - always visible', 'metodologi': 'inline label - always visible', 'qualita_po': 'inline label - always visible', 'note_posiz': 'inline label - always visible', 'tipiindagi': 'inline label - always visible', 'origine_in': 'inline label - always visible', 'num_protoc': 'inline label - always visible', 'anno_proto': 'inline label - always visible', 'ambito_app': 'inline label - always visible', 'stato_sche': 'inline label - always visible', 'prof_min_r': 'inline label - always visible', 'prof_max_r': 'inline label - always visible', 'min_epocad': 'inline label - always visible', 'max_epocaa': 'inline label - always visible', 'min_secolo': 'inline label - always visible', 'max_secolo': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'fasi': 'inline label - always visible', 'tutelato': 'inline label - always visible', });
lyr_a_v_scavi_pt_ValTaro_ValCeno_4.set('fieldLabels', {'gid': 'inline label - always visible', 'id_scavo': 'inline label - always visible', 'nome': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'localita': 'inline label - always visible', 'comune': 'inline label - always visible', 'provincia': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'quota_zero': 'inline label - always visible', 'quota_ze_1': 'inline label - always visible', 'prof_max': 'inline label - always visible', 'anno_inizi': 'inline label - always visible', 'anno_fine': 'inline label - always visible', 'funzionari': 'inline label - always visible', 'ditta_prof': 'inline label - always visible', 'collocazio': 'inline label - always visible', 'bibliograf': 'inline label - always visible', 'osservazio': 'inline label - always visible', 'funziona_1': 'inline label - always visible', 'ente_respo': 'inline label - always visible', 'compilator': 'inline label - always visible', 'metodologi': 'inline label - always visible', 'qualita_po': 'inline label - always visible', 'note_posiz': 'inline label - always visible', 'tipiindagi': 'inline label - always visible', 'origine_in': 'inline label - always visible', 'num_protoc': 'inline label - always visible', 'anno_proto': 'inline label - always visible', 'ambito_app': 'inline label - always visible', 'stato_sche': 'inline label - always visible', 'prof_min_r': 'inline label - always visible', 'prof_max_r': 'inline label - always visible', 'min_epocad': 'inline label - always visible', 'max_epocaa': 'inline label - always visible', 'min_secolo': 'inline label - always visible', 'max_secolo': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'fasi': 'inline label - always visible', 'tutelato': 'inline label - always visible', });
lyr_ba_v_vincoli_pl_ValTaro_ValCeno_5.set('fieldLabels', {'gid': 'inline label - always visible', 'id_archeo': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'titolo': 'inline label - always visible', 'tipo_propr': 'inline label - always visible', 'comuni': 'inline label - always visible', 'sigla_pro': 'inline label - always visible', 'localita': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'provvedime': 'inline label - always visible', 'data_ultim': 'inline label - always visible', 'ultimo_pro': 'inline label - always visible', 'rif_legge_': 'inline label - always visible', 'tutela': 'inline label - always visible', 'vincolo': 'inline label - always visible', });
lyr_ba_v_vincoli_pt_ValTaro_ValCeno_6.set('fieldLabels', {'gid': 'inline label - always visible', 'id_archeo': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'titolo': 'inline label - always visible', 'tipo_propr': 'inline label - always visible', 'comuni': 'inline label - always visible', 'sigla_pro': 'inline label - always visible', 'localita': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'provvedime': 'inline label - always visible', 'data_ultim': 'inline label - always visible', 'ultimo_pro': 'inline label - always visible', 'rif_legge_': 'inline label - always visible', 'tutela': 'inline label - always visible', 'vincolo': 'inline label - always visible', });
lyr_ba_v_vincoli_tur_ValTaro_ValCeno_7.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'titolo': 'inline label - always visible', 'tipo_propr': 'inline label - always visible', 'comuni': 'inline label - always visible', 'sigla_pro': 'inline label - always visible', 'localita': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'tipologie': 'inline label - always visible', 'provvedime': 'inline label - always visible', 'data_ultim': 'inline label - always visible', 'ultimo_pro': 'inline label - always visible', 'rif_legge_': 'inline label - always visible', 'tutela': 'inline label - always visible', 'vincolo': 'inline label - always visible', 'lon': 'inline label - always visible', 'lat': 'inline label - always visible', 'id_categor': 'inline label - always visible', 'categoria': 'inline label - always visible', 'categoria_': 'inline label - always visible', 'id_valutaz': 'inline label - always visible', 'valutazion': 'inline label - always visible', 'sito_web': 'inline label - always visible', 'link': 'inline label - always visible', 'avvisi_fru': 'inline label - always visible', 'foto_princ': 'inline label - always visible', 'tot_foto': 'inline label - always visible', 'autore': 'inline label - always visible', });
lyr_bt_v_complessi_pt_ValTaro_ValCeno_8.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'proprietar': 'inline label - always visible', 'provincia': 'inline label - always visible', 'comune': 'inline label - always visible', 'diocesi': 'inline label - always visible', 'frazione': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'tipo_tutel': 'inline label - always visible', 'tipo_propr': 'inline label - always visible', 'categoria': 'inline label - always visible', 'eta': 'inline label - always visible', 'eta_attest': 'inline label - always visible', 'stato': 'inline label - always visible', 'data_cambi': 'inline label - always visible', 'data_upd': 'inline label - always visible', 'lon': 'inline label - always visible', 'lat': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'guidarossa': 'inline label - always visible', 'link_fai': 'inline label - always visible', 'foto_princ': 'inline label - always visible', 'autore_fot': 'inline label - always visible', 'estense': 'inline label - always visible', 'id_regione': 'inline label - always visible', 'in_tourer': 'inline label - always visible', 'etichetta': 'inline label - always visible', });
lyr_rer_bp_laghi_pl_ValTaro_ValCeno_9.set('fieldLabels', {'gid': 'inline label - always visible', 'id_e': 'inline label - always visible', 'nm_sda': 'inline label - always visible', 'tipo_lago': 'inline label - always visible', 'perimetro': 'inline label - always visible', 'data_cts': 'inline label - always visible', });
lyr_rer_bp_fiumi150_ValTaro_ValCeno_10.set('fieldLabels', {'gid': 'inline label - always visible', 'data_agg': 'inline label - always visible', });
lyr_rer_bp_fiumi_ln_ValTaro_ValCeno_11.set('fieldLabels', {'gid': 'inline label - always visible', 'id_provinc': 'inline label - always visible', 'num': 'inline label - always visible', 'denominazi': 'inline label - always visible', 'norma': 'inline label - always visible', 'ctr': 'inline label - always visible', 'foce_sbocc': 'inline label - always visible', 'limiti': 'inline label - always visible', 'escluso': 'inline label - always visible', 'tratto_esc': 'inline label - always visible', 'motivo_esc': 'inline label - always visible', 'data_agg': 'inline label - always visible', 'id_cac': 'inline label - always visible', });
lyr_rer_bp_fiumi_pl_ValTaro_ValCeno_12.set('fieldLabels', {'gid': 'inline label - always visible', 'id_provinc': 'inline label - always visible', 'num': 'inline label - always visible', 'denominazi': 'inline label - always visible', 'norma': 'inline label - always visible', 'ctr': 'inline label - always visible', 'foce_sbocc': 'inline label - always visible', 'limiti': 'inline label - always visible', 'escluso': 'inline label - always visible', 'tratto_esc': 'inline label - always visible', 'motivo_esc': 'inline label - always visible', 'data_agg': 'inline label - always visible', 'id_cac': 'inline label - always visible', });
lyr_rer_bp_montagna_pl_ValTaro_ValCeno_13.set('fieldLabels', {'gid': 'inline label - always visible', 'quota': 'inline label - always visible', 'data_cts': 'inline label - always visible', });
lyr_rer_bp_circhiglaciali_pl_ValTaro_ValCeno_14.set('fieldLabels', {'gid': 'inline label - always visible', 'province': 'inline label - always visible', 'comuni': 'inline label - always visible', 'localita': 'inline label - always visible', 'nome': 'inline label - always visible', 'didascalia': 'inline label - always visible', });
lyr_rer_parchi_riserve_pl_ValTaro_ValCeno_15.set('fieldLabels', {'gid': 'inline label - always visible', 'objectid': 'inline label - always visible', 'aapp': 'inline label - always visible', 'tipologia': 'inline label - always visible', 'nome': 'inline label - always visible', 'nome_lungo': 'inline label - always visible', 'link_web': 'inline label - always visible', 'fuori_rer': 'inline label - always visible', 'sup_ha': 'inline label - always visible', });
lyr_rer_bp_usc_pt_ValTaro_ValCeno_16.set('fieldLabels', {'gid': 'inline label - always visible', 'id_usu': 'inline label - always visible', 'nome_usu': 'inline label - always visible', 'tipo_acc': 'inline label - always visible', 'id_usc': 'inline label - always visible', 'nome_usc': 'inline label - always visible', 'ente_perim': 'inline label - always visible', 'doc_perim': 'inline label - always visible', 'link': 'inline label - always visible', 'dt_ch_oper': 'inline label - always visible', 'cod_arc': 'inline label - always visible', 'data_agg': 'inline label - always visible', });
lyr_rer_bp_usc_pl_ValTaro_ValCeno_17.set('fieldLabels', {'gid': 'inline label - always visible', 'id_usu': 'inline label - always visible', 'nome_usu': 'inline label - always visible', 'tipo_acc': 'inline label - always visible', 'id_usc': 'inline label - always visible', 'nome_usc': 'inline label - always visible', 'ente_perim': 'inline label - always visible', 'doc_perim': 'inline label - always visible', 'link': 'inline label - always visible', 'dt_ch_oper': 'inline label - always visible', 'cod_arc': 'inline label - always visible', 'data_agg': 'inline label - always visible', });
lyr_rer_bp_usccom_pl_ValTaro_ValCeno_18.set('fieldLabels', {'gid': 'inline label - always visible', 'istat': 'inline label - always visible', 'nome_c': 'inline label - always visible', 'usc_presen': 'inline label - always visible', 'data_agg': 'inline label - always visible', });
lyr_rer_bp_imm_pl_ValTaro_ValCeno_19.set('fieldLabels', {'gid': 'inline label - always visible', 'id_imm': 'inline label - always visible', 'titolo': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'foto_princ': 'inline label - always visible', 'link': 'inline label - always visible', 'stato': 'inline label - always visible', });
lyr_bt_v_complessi_notutela_pt_ValTaro_ValCeno_20.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'proprietar': 'inline label - always visible', 'provincia': 'inline label - always visible', 'comune': 'inline label - always visible', 'diocesi': 'inline label - always visible', 'frazione': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'tipo_tutel': 'inline label - always visible', 'tipo_propr': 'inline label - always visible', 'provvedime': 'inline label - always visible', 'stato': 'inline label - always visible', 'albero_mon': 'inline label - always visible', 'id_comune_': 'inline label - always visible', 'link_fai': 'inline label - always visible', 'estense': 'inline label - always visible', 'id_regione': 'inline label - always visible', 'id_comune2': 'inline label - always visible', });
lyr_tourer_pt_ValTaro_ValCeno_21.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'denominazi': 'inline label - always visible', 'sigla_pro': 'inline label - always visible', 'provincia': 'inline label - always visible', 'comune': 'inline label - always visible', 'diocesi': 'inline label - always visible', 'frazione': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'tipo_tutel': 'inline label - always visible', 'tipologia': 'inline label - always visible', 'cronologia': 'inline label - always visible', 'id_valutaz': 'inline label - always visible', 'foto': 'inline label - always visible', 'autore': 'inline label - always visible', 'fonte': 'inline label - always visible', 'thumb': 'inline label - always visible', 'tipologie_': 'inline label - always visible', 'tutela': 'inline label - always visible', 'descrizion': 'inline label - always visible', 'categoria': 'inline label - always visible', 'icona_mapp': 'inline label - always visible', 'icona_sche': 'inline label - always visible', 'localita': 'inline label - always visible', 'link': 'inline label - always visible', 'categoria_': 'inline label - always visible', 'tipologia_': 'inline label - always visible', 'tipologi_1': 'inline label - always visible', 'cronolog_1': 'inline label - always visible', 'tipo_tut_1': 'inline label - always visible', 'sito_web': 'inline label - always visible', 'avvisi_fru': 'inline label - always visible', 'codice_web': 'inline label - always visible', 'data_upd': 'inline label - always visible', 'link_sched': 'inline label - always visible', 'valutazion': 'inline label - always visible', 'lon': 'inline label - always visible', 'lat': 'inline label - always visible', 'comune_alt': 'inline label - always visible', 'descrizi_1': 'inline label - always visible', 'id_eta': 'inline label - always visible', 'eta': 'inline label - always visible', 'eta_en': 'inline label - always visible', 'fai': 'inline label - always visible', 'viv': 'inline label - always visible', 'comune2': 'inline label - always visible', 'id_wikidat': 'inline label - always visible', });
lyr_ar_v_conservatori_pt_ValTaro_ValCeno_22.set('fieldLabels', {'gid': 'inline label - always visible', 'codice': 'inline label - always visible', 'nome': 'inline label - always visible', 'provincia': 'inline label - always visible', 'comune': 'inline label - always visible', 'indirizzo': 'inline label - always visible', 'tipo': 'inline label - always visible', 'servizi': 'inline label - always visible', 'orari': 'inline label - always visible', 'archivi': 'inline label - always visible', 'codice_com': 'inline label - always visible', 'complesso': 'inline label - always visible', 'url': 'inline label - always visible', 'link_sa': 'inline label - always visible', 'id_regione': 'inline label - always visible', });
lyr_ValTaro_ValCeno_23.set('fieldLabels', {'COD_RIP': 'inline label - always visible', 'COD_REG': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'COD_CM': 'inline label - always visible', 'COD_UTS': 'inline label - always visible', 'PRO_COM': 'inline label - always visible', 'PRO_COM_T': 'inline label - always visible', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'inline label - always visible', 'CC_UTS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Popolazione_Residente_COD_COM': 'no label', 'Popolazione_Residente_PROV': 'no label', 'Popolazione_Residente_LONGIT': 'no label', 'Popolazione_Residente_LATITUD': 'no label', 'Popolazione_Residente_VAL': 'no label', 'Popolazione_Residente_0-2M': 'no label', 'Popolazione_Residente_3-5M': 'no label', 'Popolazione_Residente_6-11M': 'no label', 'Popolazione_Residente_12-17M': 'no label', 'Popolazione_Residente_18-24M': 'no label', 'Popolazione_Residente_25-34M': 'no label', 'Popolazione_Residente_35-44M': 'no label', 'Popolazione_Residente_45-54M': 'no label', 'Popolazione_Residente_55-64M': 'no label', 'Popolazione_Residente_65-74M': 'no label', 'Popolazione_Residente_75-84M': 'no label', 'Popolazione_Residente_O84M': 'no label', 'Popolazione_Residente_TOTM': 'no label', 'Popolazione_Residente_0-2F': 'no label', 'Popolazione_Residente_3-5F': 'no label', 'Popolazione_Residente_6-11F': 'no label', 'Popolazione_Residente_12-17F': 'no label', 'Popolazione_Residente_18-24F': 'no label', 'Popolazione_Residente_25-34F': 'no label', 'Popolazione_Residente_35-44F': 'no label', 'Popolazione_Residente_45-54F': 'no label', 'Popolazione_Residente_55-64F': 'no label', 'Popolazione_Residente_65-74F': 'no label', 'Popolazione_Residente_75-84F': 'no label', 'Popolazione_Residente_O84F': 'no label', 'Popolazione_Residente_TOTF': 'no label', 'Popolazione_Residente_TOT': 'no label', });
lyr_varsi_other_24.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034046_Varsi20241112T08Zmultipolygons_25.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034046_Varsi20241112T08Zlines_26.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034046_Varsi20241112T08Zmultilinestrings_27.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034046_Varsi20241112T08Zpoints_28.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_varano_other_29.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034045_Varano_de_Melegari20250114T14Zmultipolygons_30.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034045_Varano_de_Melegari20250114T14Zlines_31.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034045_Varano_de_Melegari20250114T14Zmultilinestrings_32.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034045_Varano_de_Melegari20250114T14Zpoints_33.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034044_Valmozzola20241112T08Zmultipolygons_34.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034044_Valmozzola20241112T08Zlines_35.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034044_Valmozzola20241112T08Zmultilinestrings_36.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034044_Valmozzola20241112T08Zpoints_37.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_tornolo_other_38.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034040_Tornolo20241112T08Zmultipolygons_39.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034040_Tornolo20241112T08Zlines_40.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034040_Tornolo20241112T08Zmultilinestrings_41.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034040_Tornolo20241112T08Zpoints_42.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034035_Solignano20241112T08Zmultipolygons_43.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034035_Solignano20241112T08Zlines_44.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034035_Solignano20241112T08Zmultilinestrings_45.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034035_Solignano20241112T08Zpoints_46.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_pellegrino_other_47.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultipolygons_48.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034028_Pellegrino_Parmense20241112T08Zlines_49.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034028_Pellegrino_Parmense20241112T08Zmultilinestrings_50.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034028_Pellegrino_Parmense20241112T08Zpoints_51.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultipolygons_52.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034017_Fornovo_di_Taro20241112T08Zlines_53.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034017_Fornovo_di_Taro20241112T08Zmultilinestrings_54.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034017_Fornovo_di_Taro20241112T08Zpoints_55.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_compiano_other_56.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034011_Compiano20241112T08Zmultipolygons_57.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034011_Compiano20241112T08Zlines_58.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034011_Compiano20241112T08Zmultilinestrings_59.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034011_Compiano20241112T08Zpoints_60.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultipolygons_61.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zlines_62.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zmultilinestrings_63.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034006_Borgo_Val_di_Taro20241112T08Zpoints_64.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_bore_other_65.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034005_Bore20241112T08Zmultipolygons_66.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034005_Bore20241112T08Zlines_67.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034005_Bore20241112T08Zmultilinestrings_68.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034005_Bore20241112T08Zpoints_69.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_bedonia_other_70.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034003_Bedonia20241112T08Zmultipolygons_71.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034003_Bedonia20241112T08Zlines_72.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034003_Bedonia20241112T08Zmultilinestrings_73.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034003_Bedonia20241112T08Zpoints_74.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034002_Bardi20241112T08Zmultipolygons_75.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034002_Bardi20241112T08Zlines_76.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034002_Bardi20241112T08Zmultilinestrings_77.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_034002_Bardi20241112T08Zpoints_78.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_multipolygons_79.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_way_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'aeroway': 'inline label - always visible', 'amenity': 'inline label - always visible', 'admin_level': 'inline label - always visible', 'barrier': 'inline label - always visible', 'boundary': 'inline label - always visible', 'building': 'inline label - always visible', 'craft': 'inline label - always visible', 'geological': 'inline label - always visible', 'historic': 'inline label - always visible', 'land_area': 'inline label - always visible', 'landuse': 'inline label - always visible', 'leisure': 'inline label - always visible', 'man_made': 'inline label - always visible', 'military': 'inline label - always visible', 'natural': 'inline label - always visible', 'office': 'inline label - always visible', 'place': 'inline label - always visible', 'shop': 'inline label - always visible', 'sport': 'inline label - always visible', 'tourism': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_multilinestrings_80.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_lines_81.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_points_82.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_perimetro_new_83.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_temperatura_86.set('fieldLabels', {'ISTAT': 'inline label - always visible', 'PROV': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'LONGIT': 'inline label - always visible', 'VAL': 'inline label - always visible', '2023_MEDIA': 'inline label - always visible', 'GEN24_TEMP': 'inline label - always visible', 'FEB24_TEMP': 'inline label - always visible', 'MAR24_TEMP': 'inline label - always visible', 'APR24_TEMP': 'inline label - always visible', 'MAG24_TEMP': 'inline label - always visible', 'GIU24_TEMP': 'inline label - always visible', 'LUG24_TEMP': 'inline label - always visible', 'AGO24_TEMP': 'inline label - always visible', 'SET24_TEMP': 'inline label - always visible', 'OTT24_TEMP': 'inline label - always visible', 'NOV24_TEMP': 'inline label - always visible', 'DIC24_TEMP': 'inline label - always visible', '2024_MEDIA': 'inline label - always visible', });
lyr_isoiete_2023_new_89.set('fieldLabels', {'ID': 'inline label - always visible', 'ELEV': 'inline label - always visible', });
lyr_isoiete_2024_new_90.set('fieldLabels', {'ID': 'inline label - always visible', 'ELEV': 'inline label - always visible', });
lyr_precipitazioni_91.set('fieldLabels', {'ISTAT': 'inline label - always visible', 'PROV': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'LONGIT': 'inline label - always visible', 'VAL': 'inline label - always visible', 'GEN23_TOT': 'inline label - always visible', 'GEN23_MEDI': 'inline label - always visible', 'FEB23_TOT': 'inline label - always visible', 'FEB23_MEDI': 'inline label - always visible', 'MAR23_TOT': 'inline label - always visible', 'MAR23_MEDI': 'inline label - always visible', 'APR23_TOT': 'inline label - always visible', 'APR23_MEDI': 'inline label - always visible', 'MAG23_TOT': 'inline label - always visible', 'MAG23_MEDI': 'inline label - always visible', 'GIU23_TOT': 'inline label - always visible', 'GIU23_MEDI': 'inline label - always visible', 'LUG23_TOT': 'inline label - always visible', 'LUG23_MEDI': 'inline label - always visible', 'AGO23_TOT': 'inline label - always visible', 'AGO23_MEDI': 'inline label - always visible', 'SET23_TOT': 'inline label - always visible', 'SET23_MEDI': 'inline label - always visible', 'OTT23_TOT': 'inline label - always visible', 'OTT23_MEDI': 'inline label - always visible', 'NOV23_TOT': 'inline label - always visible', 'NOV23_MEDI': 'inline label - always visible', 'DIC23_TOT': 'inline label - always visible', 'DIC23_MEDI': 'inline label - always visible', '2023_TOT': 'inline label - always visible', '2023_MEDIA': 'inline label - always visible', 'GEN24_TOT': 'inline label - always visible', 'GEN24_MEDI': 'inline label - always visible', 'FEB24_TOT': 'inline label - always visible', 'FEB24_MEDI': 'inline label - always visible', 'MAR24_TOT': 'inline label - always visible', 'MAR24_MEDI': 'inline label - always visible', 'APR24_TOT': 'inline label - always visible', 'APR24_MEDI': 'inline label - always visible', 'MAG24_TOT': 'inline label - always visible', 'MAG24_MEDI': 'inline label - always visible', 'GIU24_TOT': 'inline label - always visible', 'GIU24_MEDI': 'inline label - always visible', 'LUG24_TOT': 'inline label - always visible', 'LUG24_MEDI': 'inline label - always visible', 'AGO24_TOT': 'inline label - always visible', 'AGO24_MEDI': 'inline label - always visible', 'SET24_TOT': 'inline label - always visible', 'SET24_MEDI': 'inline label - always visible', 'OTT24_TOT': 'inline label - always visible', 'OTT24_MEDI': 'inline label - always visible', 'NOV24_TOT': 'inline label - always visible', 'NOV24_MEDI': 'inline label - always visible', 'DIC24_TOT': 'inline label - always visible', 'DIC24_MEDI': 'inline label - always visible', '2024_TOT': 'inline label - always visible', '2024_MEDIA': 'inline label - always visible', });
lyr_Densita_Popolazione_92.set('fieldLabels', {'COD_COM': 'inline label - always visible', 'PROV': 'inline label - always visible', 'LONGIT': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'VAL': 'inline label - always visible', '0-2M': 'inline label - always visible', '3-5M': 'inline label - always visible', '6-11M': 'inline label - always visible', '12-17M': 'inline label - always visible', '18-24M': 'inline label - always visible', '25-34M': 'inline label - always visible', '35-44M': 'inline label - always visible', '45-54M': 'inline label - always visible', '55-64M': 'inline label - always visible', '65-74M': 'inline label - always visible', '75-84M': 'inline label - always visible', 'O84M': 'inline label - always visible', 'TOTM': 'inline label - always visible', '0-2F': 'inline label - always visible', '3-5F': 'inline label - always visible', '6-11F': 'inline label - always visible', '12-17F': 'inline label - always visible', '18-24F': 'inline label - always visible', '25-34F': 'inline label - always visible', '35-44F': 'inline label - always visible', '45-54F': 'inline label - always visible', '55-64F': 'inline label - always visible', '65-74F': 'inline label - always visible', '75-84F': 'inline label - always visible', 'O84F': 'inline label - always visible', 'TOTF': 'inline label - always visible', 'TOT': 'inline label - always visible', 'DENSITA': 'inline label - always visible', });
lyr_Totale_Popolazione_93.set('fieldLabels', {'COD_COM': 'inline label - always visible', 'PROV': 'inline label - always visible', 'LONGIT': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'VAL': 'inline label - always visible', '0-2M': 'inline label - always visible', '3-5M': 'inline label - always visible', '6-11M': 'inline label - always visible', '12-17M': 'inline label - always visible', '18-24M': 'inline label - always visible', '25-34M': 'inline label - always visible', '35-44M': 'inline label - always visible', '45-54M': 'inline label - always visible', '55-64M': 'inline label - always visible', '65-74M': 'inline label - always visible', '75-84M': 'inline label - always visible', 'O84M': 'inline label - always visible', 'TOTM': 'inline label - always visible', '0-2F': 'inline label - always visible', '3-5F': 'inline label - always visible', '6-11F': 'inline label - always visible', '12-17F': 'inline label - always visible', '18-24F': 'inline label - always visible', '25-34F': 'inline label - always visible', '35-44F': 'inline label - always visible', '45-54F': 'inline label - always visible', '55-64F': 'inline label - always visible', '65-74F': 'inline label - always visible', '75-84F': 'inline label - always visible', 'O84F': 'inline label - always visible', 'TOTF': 'inline label - always visible', 'TOT': 'inline label - always visible', 'DENSITA': 'inline label - always visible', });
lyr_Popolazione_Residente_94.set('fieldLabels', {'COD_COM': 'inline label - always visible', 'PROV': 'inline label - always visible', 'LONGIT': 'inline label - always visible', 'LATITUD': 'inline label - always visible', 'VAL': 'inline label - always visible', '0-2M': 'inline label - always visible', '3-5M': 'inline label - always visible', '6-11M': 'inline label - always visible', '12-17M': 'inline label - always visible', '18-24M': 'inline label - always visible', '25-34M': 'inline label - always visible', '35-44M': 'inline label - always visible', '45-54M': 'inline label - always visible', '55-64M': 'inline label - always visible', '65-74M': 'inline label - always visible', '75-84M': 'inline label - always visible', 'O84M': 'inline label - always visible', 'TOTM': 'inline label - always visible', '0-2F': 'inline label - always visible', '3-5F': 'inline label - always visible', '6-11F': 'inline label - always visible', '12-17F': 'inline label - always visible', '18-24F': 'inline label - always visible', '25-34F': 'inline label - always visible', '35-44F': 'inline label - always visible', '45-54F': 'inline label - always visible', '55-64F': 'inline label - always visible', '65-74F': 'inline label - always visible', '75-84F': 'inline label - always visible', 'O84F': 'inline label - always visible', 'TOTF': 'inline label - always visible', 'TOT': 'inline label - always visible', 'DENSITA': 'inline label - always visible', });
lyr_HeatMap_Popolaz_Residente_95.set('fieldLabels', {'COD_RIP': 'inline label - always visible', 'COD_REG': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'COD_CM': 'inline label - always visible', 'COD_UTS': 'inline label - always visible', 'PRO_COM': 'inline label - always visible', 'PRO_COM_T': 'inline label - always visible', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'inline label - always visible', 'CC_UTS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Popolazione_Residente_COD_COM': 'inline label - always visible', 'Popolazione_Residente_PROV': 'inline label - always visible', 'Popolazione_Residente_LONGIT': 'inline label - always visible', 'Popolazione_Residente_LATITUD': 'inline label - always visible', 'Popolazione_Residente_VAL': 'inline label - always visible', 'Popolazione_Residente_0-2M': 'inline label - always visible', 'Popolazione_Residente_3-5M': 'inline label - always visible', 'Popolazione_Residente_6-11M': 'inline label - always visible', 'Popolazione_Residente_12-17M': 'inline label - always visible', 'Popolazione_Residente_18-24M': 'inline label - always visible', 'Popolazione_Residente_25-34M': 'inline label - always visible', 'Popolazione_Residente_35-44M': 'inline label - always visible', 'Popolazione_Residente_45-54M': 'inline label - always visible', 'Popolazione_Residente_55-64M': 'inline label - always visible', 'Popolazione_Residente_65-74M': 'inline label - always visible', 'Popolazione_Residente_75-84M': 'inline label - always visible', 'Popolazione_Residente_O84M': 'inline label - always visible', 'Popolazione_Residente_TOTM': 'inline label - always visible', 'Popolazione_Residente_0-2F': 'inline label - always visible', 'Popolazione_Residente_3-5F': 'inline label - always visible', 'Popolazione_Residente_6-11F': 'inline label - always visible', 'Popolazione_Residente_12-17F': 'inline label - always visible', 'Popolazione_Residente_18-24F': 'inline label - always visible', 'Popolazione_Residente_25-34F': 'inline label - always visible', 'Popolazione_Residente_35-44F': 'inline label - always visible', 'Popolazione_Residente_45-54F': 'inline label - always visible', 'Popolazione_Residente_55-64F': 'inline label - always visible', 'Popolazione_Residente_65-74F': 'inline label - always visible', 'Popolazione_Residente_75-84F': 'inline label - always visible', 'Popolazione_Residente_O84F': 'inline label - always visible', 'Popolazione_Residente_TOTF': 'inline label - always visible', 'Popolazione_Residente_TOT': 'inline label - always visible', });
lyr_HeatMap_Popolaz_Residente_MF_96.set('fieldLabels', {'COD_RIP': 'inline label - always visible', 'COD_REG': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'COD_CM': 'inline label - always visible', 'COD_UTS': 'inline label - always visible', 'PRO_COM': 'inline label - always visible', 'PRO_COM_T': 'inline label - always visible', 'COMUNE': 'inline label - always visible', 'COMUNE_A': 'inline label - always visible', 'CC_UTS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Popolazione_Residente_COD_COM': 'inline label - always visible', 'Popolazione_Residente_PROV': 'inline label - always visible', 'Popolazione_Residente_LONGIT': 'inline label - always visible', 'Popolazione_Residente_LATITUD': 'inline label - always visible', 'Popolazione_Residente_VAL': 'inline label - always visible', 'Popolazione_Residente_0-2M': 'inline label - always visible', 'Popolazione_Residente_3-5M': 'inline label - always visible', 'Popolazione_Residente_6-11M': 'inline label - always visible', 'Popolazione_Residente_12-17M': 'inline label - always visible', 'Popolazione_Residente_18-24M': 'inline label - always visible', 'Popolazione_Residente_25-34M': 'inline label - always visible', 'Popolazione_Residente_35-44M': 'inline label - always visible', 'Popolazione_Residente_45-54M': 'inline label - always visible', 'Popolazione_Residente_55-64M': 'inline label - always visible', 'Popolazione_Residente_65-74M': 'inline label - always visible', 'Popolazione_Residente_75-84M': 'inline label - always visible', 'Popolazione_Residente_O84M': 'inline label - always visible', 'Popolazione_Residente_TOTM': 'inline label - always visible', 'Popolazione_Residente_0-2F': 'inline label - always visible', 'Popolazione_Residente_3-5F': 'inline label - always visible', 'Popolazione_Residente_6-11F': 'inline label - always visible', 'Popolazione_Residente_12-17F': 'inline label - always visible', 'Popolazione_Residente_18-24F': 'inline label - always visible', 'Popolazione_Residente_25-34F': 'inline label - always visible', 'Popolazione_Residente_35-44F': 'inline label - always visible', 'Popolazione_Residente_45-54F': 'inline label - always visible', 'Popolazione_Residente_55-64F': 'inline label - always visible', 'Popolazione_Residente_65-74F': 'inline label - always visible', 'Popolazione_Residente_75-84F': 'inline label - always visible', 'Popolazione_Residente_O84F': 'inline label - always visible', 'Popolazione_Residente_TOTF': 'inline label - always visible', 'Popolazione_Residente_TOT': 'inline label - always visible', });
lyr_HeatMap_Popolaz_Residente_MF_96.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});