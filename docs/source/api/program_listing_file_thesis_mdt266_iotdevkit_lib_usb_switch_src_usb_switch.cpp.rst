
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_usb_switch_src_usb_switch.cpp:

Program Listing for File usb_switch.cpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_usb_switch_src_usb_switch.cpp>` (``thesis_mdt266_iotdevkit\lib\usb_switch\src\usb_switch.cpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Includes ----------------------------------------------------------- */
   #include "usb_switch.h"
   #include "bsp_gpio.h"
   
   /* Private defines ---------------------------------------------------- */
   
   /* Private enumerate/structure ---------------------------------------- */
   
   /* Private macros ----------------------------------------------------- */
   
   /* Public variables --------------------------------------------------- */
   
   /* Private variables -------------------------------------------------- */
   
   /* Class method Definitions ---------------------------------- */
   
   UsbSwitch::UsbSwitch(uint8_t pin1, uint8_t pin2) : _pin1(pin1), _pin2(pin2)
   {
     bspGpioPinMode(_pin1, OUTPUT);
     bspGpioPinMode(_pin2, OUTPUT);
     status[0] = false;
     status[1] = false;
     bspGpioAnalogWrite(_pin1, 0);
     bspGpioAnalogWrite(_pin2, 0);
   }
   
   void UsbSwitch::setOutputValue(uint8_t outputNo, int value)
   {
     value = constrain(value, 0, 255);
   
     if (outputNo == 1 || outputNo == 0)
     {
       bspGpioAnalogWrite(_pin1, value);
       status[0] = (value > 0);
     }
     if (outputNo == 2 || outputNo == 0)
     {
       bspGpioAnalogWrite(_pin2, value);
       status[1] = (value > 0);
     }
   }
   
   void UsbSwitch::setOutputValuePercentage(uint8_t outputNo, int percentage)
   {
     percentage   = constrain(percentage, 0, 100);
     int pwmValue = map(percentage, 0, 100, 0, 255);
     setOutputValue(outputNo, pwmValue);
   }
   
   int UsbSwitch::getOutputValue(uint8_t outputNo)
   {
     if (outputNo == 1)
       return bspGpioAnalogRead(_pin1);
     else if (outputNo == 2)
       return bspGpioAnalogRead(_pin2);
   
     return 0;
   }
   
   int UsbSwitch::getOutputValuePercentage(uint8_t outputNo)
   {
     int pwmValue = getOutputValue(outputNo);
     return map(pwmValue, 0, 255, 0, 100);
   }
   
   void UsbSwitch::toggleOutput(uint8_t outputNo)
   {
     if (outputNo == 1 || outputNo == 0)
     {
       status[0] = !status[0];
       bspGpioAnalogWrite(_pin1, status[0] ? 255 : 0);
     }
     if (outputNo == 2 || outputNo == 0)
     {
       status[1] = !status[1];
       bspGpioAnalogWrite(_pin2, status[1] ? 255 : 0);
     }
   }
   
   bool UsbSwitch::getStatus(uint8_t outputNo)
   {
     if (outputNo == 1)
       return status[0];
     else if (outputNo == 2)
       return status[1];
   
     return false;
   }
   
   /* Private function definitions --------------------------------------- */
   
   /* End of file -------------------------------------------------------- */
