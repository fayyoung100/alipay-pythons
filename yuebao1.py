import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()


for i in range(1,1100):
  print "time : %s" % i
  time.sleep(2.5)
  device.touch(600,1117,'DOWN_AND_UP')
  print "user money"
  time.sleep(1.5)
  device.press('KEYCODE_BACK','DOWN_AND_UP')
print "user complete"