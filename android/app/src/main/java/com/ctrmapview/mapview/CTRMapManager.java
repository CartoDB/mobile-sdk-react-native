package com.ctrmapview.mapview;

import android.content.Context;
import android.support.annotation.Nullable;

import com.carto.layers.CartoBaseMapStyle;
import com.carto.layers.CartoOnlineVectorTileLayer;
import com.carto.ui.MapView;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by aareundo on 23/03/2017.
 */

@ReactModule(name = CTRMapManager.REACT_CLASS)
public class CTRMapManager extends SimpleViewManager<CTRMapView> {

    public static final String REACT_CLASS = "CTRMapView";

    Context context;

    @Override
    protected CTRMapView createViewInstance(ThemedReactContext reactContext) {
        this.context = reactContext;
        return new CTRMapView(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "alpha")
    public void setAlpha(CTRMapView view, float alpha) {
        view.setAlpha(alpha);
    }

    @ReactProp(name = "license")
    public void setLicense(CTRMapView view, @Nullable String license) {
        MapView.registerLicense(license, context);
    }

    @ReactProp(name = "zoom")
    public void setZoom(MapView view, float zoom) {
        view.setZoom(zoom, 0);
    }

    @ReactProp(name = "addBaseLayer")
    public void addBaseLayer(CTRMapView view, boolean add) {

        if (add) {
            CartoOnlineVectorTileLayer layer = new CartoOnlineVectorTileLayer(CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DEFAULT);
            view.getLayers().add(layer);
        }
    }
}

