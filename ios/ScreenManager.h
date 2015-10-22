//
//  ScreenManager.h
//  SanitoBonito
//
//  Created by Jose Vildosola on 15-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface ScreenManager : NSObject<RCTBridgeModule>

@property(nonatomic, strong) NSNumber *width;

@end
