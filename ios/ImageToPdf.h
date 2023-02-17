
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNImageToPdfSpec.h"

@interface ImageToPdf : NSObject <NativeImageToPdfSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ImageToPdf : NSObject <RCTBridgeModule>
#endif

@end
