
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_soil_moisture_sensor_src_soil_moisture.h:

Program Listing for File soil_moisture.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_soil_moisture_sensor_src_soil_moisture.h>` (``thesis_mdt266_iotdevkit\lib\soil_moisture_sensor\src\soil_moisture.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef SOIL_MOISTURE_H
     #define SOIL_MOISTURE_H
   
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
   class SoilMoisture
   {
   public:
     SoilMoisture(int pin);
   
     void read();
   
     uint32_t readAndMap(int minValue, int maxValue);
   
     bool isAboveThreshold(int threshold);
   
     int getMoisture();
   
     int getMoisturePercentage();
   
     int getAverageReading(int samples = 10);
   
     void onThresholdCross(int threshold, void (*callback)());
   
   private:
     int      _pin;                 
     uint32_t sensorValue[2];       
     void (*_callback)() = nullptr; 
   };
   
   #endif // SOIL_MOISTURE_H
   
   /* End of file -------------------------------------------------------- */
