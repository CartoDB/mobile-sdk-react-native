package com.ctrmapview.testview;

import android.content.Context;
import android.graphics.Color;
import android.widget.RelativeLayout;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by aareundo on 23/03/2017.
 */

public class TestView extends SimpleViewManager<RelativeLayout> {

    public static final String REACT_CLASS = "CTRMapManager";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected RelativeLayout createViewInstance(ThemedReactContext reactContext) {
        return new RelativeLayout(reactContext);
    }
}
