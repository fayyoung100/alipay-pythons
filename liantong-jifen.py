import time
from com.android.monkeyrunner import MonkeyRunner,MonkeyDevice,MonkeyImage
device=MonkeyRunner.waitForConnection()

for i in range(0,30):
  print "time : %s" % i

  device.touch(561,536,device.DOWN_AND_UP)
  print "begin pay!"
  time.sleep(2)

  device.touch(620,799,device.DOWN_AND_UP)
  time.sleep(1)

  device.touch(264,720,device.DOWN_AND_UP)
  print "input money!"
  time.sleep(3)

   

  device.touch(641,897,device.DOWN_AND_UP)
  time.sleep(0.6)
  device.touch(641,897,device.DOWN_AND_UP)
  time.sleep(0.6)
  device.touch(641,897,device.DOWN_AND_UP)
  time.sleep(0.6)
  device.touch(641,897,device.DOWN_AND_UP)
  time.sleep(0.6)
  device.touch(641,897,device.DOWN_AND_UP)
  time.sleep(1)

  device.touch(378,903,device.DOWN_AND_UP)
  time.sleep(2)
  
  device.touch(620,700,device.DOWN_AND_UP)
  print "requesting alipay...."
  time.sleep(6)

  device.touch(392,1206,device.DOWN_AND_UP)
  print "confirm pay !!!"
  time.sleep(3)

  device.touch(385,1030,device.DOWN_AND_UP)
  time.sleep(1)
  device.touch(378,903,device.DOWN_AND_UP)
  time.sleep(1)
  device.touch(386,1111,device.DOWN_AND_UP)
  time.sleep(1)
  device.touch(608,1004,device.DOWN_AND_UP)
  time.sleep(1)
  device.touch(148,1111,device.DOWN_AND_UP)
  time.sleep(1)
  device.touch(385,1030,device.DOWN_AND_UP)
  time.sleep(1)
  print "input password over !!!"

  time.sleep(6)
  print "requesting alipay over...."

  device.touch(600,360,device.DOWN_AND_UP)
  print "close share dialog!"
  time.sleep(2)

  device.touch(537,753,device.DOWN_AND_UP)
  print "pay again!"
  time.sleep(3)