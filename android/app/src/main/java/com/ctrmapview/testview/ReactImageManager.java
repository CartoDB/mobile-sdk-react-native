package com.ctrmapview.testview;

import android.content.Context;

import com.carto.ui.MapView;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.image.ReactImageView;

/**
 * Created by aareundo on 23/03/2017.
 */

public class ReactImageManager extends SimpleViewManager<ReactImageView> {

    public static final String REACT_CLASS = "CTRImageView";

    ReactApplicationContext mCallerContext;

    public ReactImageManager(ReactApplicationContext context) {
        mCallerContext = context;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public ReactImageView createViewInstance(ThemedReactContext context) {

        return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), mCallerContext);
    }
}
