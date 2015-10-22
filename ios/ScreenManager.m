//
//  ScreenManager.m
//  SanitoBonito
//
//  Created by Jose Vildosola on 15-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ScreenManager.h"


@implementation ScreenManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDimensions:(RCTResponseSenderBlock)callback){
  CGRect screenRect = [[UIScreen mainScreen] bounds];
  NSNumber* screenWidth = [NSNumber numberWithDouble:screenRect.size.width];
  NSNumber* screenHeight = [NSNumber numberWithDouble:screenRect.size.height];
  callback(@[screenWidth,screenHeight]);  
}

@end
