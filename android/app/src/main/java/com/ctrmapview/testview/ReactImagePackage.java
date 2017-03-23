package com.ctrmapview.testview;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.image.*;
import com.facebook.react.views.image.ReactImageManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by aareundo on 23/03/2017.
 */

public class ReactImagePackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//        return Collections.emptyList();
        return Arrays.<ViewManager>asList(
                new TestView()
        );
    }
}
