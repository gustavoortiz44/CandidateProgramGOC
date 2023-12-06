package com.candidateprogramgoc;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;

public class CustomModule extends ReactContextBaseJavaModule {
   CustomModule(ReactApplicationContext context) {
       super(context);
   }

   // add to CalendarModule.java
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void customEvent(String name, Promise promise) {
        try {        
        promise.resolve(name);
    } catch(Exception e) {
        promise.reject("Create Event Error", e);
    }
    }
}