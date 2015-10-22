//
//  RCTDateTextInput.m
//  SanitoBonito
//
//  Created by Jose Vildosola on 15-10-15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTDateTextInput.h"

@implementation RCTDateTextInput

RCT_EXPORT_MODULE();

-(UIView *)view{
  _datePicker = [[UIDatePicker alloc] init];
  NSDate *now = [NSDate date];
  NSDateComponents *minusHundredYears = [NSDateComponents new];
  minusHundredYears.year = -18;
  NSDate *hundredYearsAgo = [[NSCalendar currentCalendar] dateByAddingComponents:minusHundredYears
                                                                          toDate:now
                                                                         options:0];
  [_datePicker setDate:hundredYearsAgo];
  [_datePicker setDatePickerMode:UIDatePickerModeDate];
  UITextField *txtField = [[UITextField alloc] init];
  
  txtField.inputView = _datePicker;
  return txtField;
}

@end
