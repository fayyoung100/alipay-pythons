import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()


for i in range(1,1000):
  print "time : %s" % i
  time.sleep(1.5)
  device.touch(1225,2153,'DOWN_AND_UP')
  print "user money"
  time.sleep(0.5)
  device.touch(328,2787,'DOWN_AND_UP')
print "user complete"