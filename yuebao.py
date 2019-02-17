import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()
print 3

time.sleep(1)
for i in range(0,500):
  print "time : %s" % i
  time.sleep(2)
  device.touch(576,1115,'DOWN_AND_UP')
  print "user money"
  time.sleep(2)
  device.press('KEYCODE_BACK', 'DOWN_AND_UP');
print "user complete"