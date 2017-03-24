package com.ctrmapview.testview;

import android.content.Context;
import android.graphics.Color;
import android.widget.RelativeLayout;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by aareundo on 23/03/2017.
 */

public class TestManager extends SimpleViewManager<YellowLayout> {

    public static final String REACT_CLASS = "TestView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected YellowLayout createViewInstance(ThemedReactContext reactContext) {
        return new YellowLayout(reactContext);
    }
}
