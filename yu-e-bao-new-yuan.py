import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()

print "begin"

for i in range(0,1420):
  print "time : %s" % i
  time.sleep(2)
  device.touch(870,933,'DOWN_AND_UP')
  time.sleep(2.5)
  device.press('KEYCODE_BACK', 'DOWN_AND_UP');


print "end"