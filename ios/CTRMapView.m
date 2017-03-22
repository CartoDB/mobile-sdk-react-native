//
//  CTRMapView.m
//  CustomComponent
//
//  Created by Aare Undo on 20/03/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CTRMapView.h"

@implementation CTRMapView

RCT_EXPORT_MODULE()

- (UIView *)view
{
  NTMapView *mapView = [[NTMapView alloc]init];
  // TODO Set some default values
  return mapView;
}

RCT_EXPORT_VIEW_PROPERTY(alpha, CGFloat)

RCT_CUSTOM_VIEW_PROPERTY(license, NSString*, NTMapView)
{
  NSString *license = @"";
  
  if (json != nil) {
    license = [RCTConvert NSString:json];
  }

  [NTMapView registerLicense:license];
}

RCT_CUSTOM_VIEW_PROPERTY(zoom, CGFloat, NTMapView)
{
  [view setZoom:json ? [RCTConvert CGFloat:json] : 0 durationSeconds:0];
}

RCT_CUSTOM_VIEW_PROPERTY(addBaseLayer, BOOL, NTMapView)
{
  BOOL add = [self getBool: json];
  
  if (add) {
    NTCartoOnlineVectorTileLayer* layer = [[NTCartoOnlineVectorTileLayer alloc] initWithStyle:NT_CARTO_BASEMAP_STYLE_DEFAULT];
    
    [[view getLayers] add:layer];
  }
}

/* 
 * REGION: UTILS
 */

- (BOOL)getBool:(NSString *)json {
  return json ? [RCTConvert CGFloat:json] : NO;
}

@end













