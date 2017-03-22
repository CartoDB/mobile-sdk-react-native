//
//  MCFileWriterUtil.m
//  CustomComponent
//
//  Created by Jesus Garcia on 3/30/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MCFileWriterUtil.h"

@implementation MCFileWriterUtil

RCT_EXPORT_MODULE()

// Persist data
RCT_EXPORT_METHOD(writeFile:(NSString *)fileName
                    withContents:(NSString *)contents
                    errorCallback:(RCTResponseSenderBlock)failureCallback
                    callback:(RCTResponseSenderBlock)successCallback) {
    
    // #Step 1
    NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));

    successCallback(@[@"Write method called"]);
}

            
// Load data from disk and return the String.
RCT_EXPORT_METHOD(readFile:(NSString *)fileName
                    errorCallback:(RCTResponseSenderBlock)failureCallback
                    callback:(RCTResponseSenderBlock)successCallback) {

    // #Step 1
    NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
    
    successCallback(@[@"Read method called"]);
}

@end
