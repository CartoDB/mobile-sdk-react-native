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

- (NTMapView *)view
{
  NSString *license = @"XTUN3Q0ZDWWdPKysrNHY2bDBJbndORDNHakZTMHNoTFRBaFFmZklNZ1l5b1hmcTBhQUtSeURHMWtSWVF1bWc9PQoKYXBwVG9rZW49NmI1ZGMxZTItMTFkMy00MjY1LTg2MjQtZTFhMWU4ZTY5ZWQ5CmJ1bmRsZUlkZW50aWZpZXI9Y29tLmNhcnRvLmN0cm1hcHZpZXcKb25saW5lTGljZW5zZT0xCnByb2R1Y3RzPXNkay1pb3MtNC4qCndhdGVybWFyaz1jdXN0b20K";
  [NTMapView registerLicense:license];
  
  NTMapView *mapView = [[NTMapView alloc]init];
  
  NTCartoOnlineVectorTileLayer* layer = [[NTCartoOnlineVectorTileLayer alloc] initWithStyle:NT_CARTO_BASEMAP_STYLE_DEFAULT];
  
  [[mapView getLayers] add:layer];
  
  return mapView;
}

RCT_EXPORT_VIEW_PROPERTY(license, NSString)

@end
