import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()

print "begin"

for i in range(0,1482):
  print "time : %s" % i
  time.sleep(2.5)
  device.touch(584,631,'DOWN_AND_UP')
  time.sleep(1.5)
  device.press('KEYCODE_BACK', 'DOWN_AND_UP');


print "end"