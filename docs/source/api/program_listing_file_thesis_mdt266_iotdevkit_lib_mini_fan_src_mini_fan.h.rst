
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_mini_fan_src_mini_fan.h:

Program Listing for File mini_fan.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_mini_fan_src_mini_fan.h>` (``thesis_mdt266_iotdevkit\lib\mini_fan\src\mini_fan.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef MINI_FAN_H
     #define MINI_FAN_H
   
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
   
   class MiniFan
   {
   public:
     MiniFan(int pin);
   
     void setFanSpeed(int speed);
   
     void setFanSpeedPercentage(int percentage);
   
     int getFanSpeed();
   
     int getFanSpeedPercentage();
   
     void toggleFan();
   
     bool isFanRunning();
   
   private:
     int  _pin;      
     int  _speed[2]; 
     bool status;    
   };
   
   #endif // MINI_FAN_H
   
   /* End of file -------------------------------------------------------- */
