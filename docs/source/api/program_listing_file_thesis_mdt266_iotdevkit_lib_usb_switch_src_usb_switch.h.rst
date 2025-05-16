
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_usb_switch_src_usb_switch.h:

Program Listing for File usb_switch.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_usb_switch_src_usb_switch.h>` (``thesis_mdt266_iotdevkit\lib\usb_switch\src\usb_switch.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef USB_SWITCH_H
     #define USB_SWITCH_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
   /* Public defines ----------------------------------------------------- */
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class UsbSwitch
   {
   public:
     UsbSwitch(uint8_t pin1, uint8_t pin2);
   
     void setOutputValue(uint8_t outputNo, int value);
   
     void setOutputValuePercentage(uint8_t outputNo, int percentage);
   
     int getOutputValue(uint8_t outputNo);
   
     int getOutputValuePercentage(uint8_t outputNo);
   
     void toggleOutput(uint8_t outputNo);
   
     bool getStatus(uint8_t outputNo);
   
   private:
     int  _pin1;     
     int  _pin2;     
     int  _value;    
     bool status[2]; 
   };
   
   #endif // USB_SWITCH_H
   
   /* End of file -------------------------------------------------------- */
