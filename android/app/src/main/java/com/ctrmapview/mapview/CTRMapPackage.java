package com.ctrmapview.mapview;

import com.ctrmapview.testview.TestManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by aareundo on 23/03/2017.
 */

public class CTRMapPackage implements ReactPackage {

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

        List<ViewManager> managers = new ArrayList<>();

        // TODO
        // If the following line is commented out:
        // 'Warning: Native component for "CTRMapView" does not exist' (obviously)

        // But if it's uncommented:
        // com.facebook.react.bridge.UnexpectedNativeTypeException:
        // TypeError: expected dynamic type `int64', but had type `null'

//        managers.add(new CTRMapManager());
        return managers;
    }
}
