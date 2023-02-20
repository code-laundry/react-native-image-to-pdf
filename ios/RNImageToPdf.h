
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNImageToPdfSpec.h"

@interface RNImageToPdf : NSObject <NativeImageToPdfSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RNImageToPdf : NSObject <RCTBridgeModule>
#endif

@end
