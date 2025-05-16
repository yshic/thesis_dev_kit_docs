
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_soil_moisture_sensor_src_soil_moisture.cpp:

Program Listing for File soil_moisture.cpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_soil_moisture_sensor_src_soil_moisture.cpp>` (``thesis_mdt266_iotdevkit\lib\soil_moisture_sensor\src\soil_moisture.cpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Includes ----------------------------------------------------------- */
   #include "soil_moisture.h"
   #include "bsp_gpio.h"
   
   /* Private defines ---------------------------------------------------- */
   
   /* Private enumerate/structure ---------------------------------------- */
   
   /* Private macros ----------------------------------------------------- */
   
   /* Public variables --------------------------------------------------- */
   
   /* Private variables -------------------------------------------------- */
   
   /* Class method Definitions ---------------------------------- */
   
   // Constructor
   SoilMoisture::SoilMoisture(int pin) : _pin(pin)
   {
     pinMode(_pin, INPUT);
     sensorValue[0] = 0;
     sensorValue[1] = 0;
   }
   
   void SoilMoisture::read()
   {
     sensorValue[0] = analogRead(_pin);
     sensorValue[1] = map(sensorValue[0], 0, 1023, 0, 100);
     sensorValue[1] = constrain(sensorValue[1], 0, 100);
   }
   
   uint32_t SoilMoisture::readAndMap(int minValue, int maxValue)
   {
     // Read the raw sensor value
     read();
   
     // Map the sensor value from 0-1023 to a range of minValue - maxValue
     uint32_t mappedValue = map(sensorValue[0], 0, 1023, minValue, maxValue);
     mappedValue          = constrain(mappedValue, minValue, maxValue);
     return mappedValue;
   }
   
   int SoilMoisture::getMoisture() { return sensorValue[0]; }
   
   int SoilMoisture::getMoisturePercentage() { return sensorValue[1]; }
   
   bool SoilMoisture::isAboveThreshold(int threshold) { return sensorValue[0] > threshold; }
   
   int SoilMoisture::getAverageReading(int samples)
   {
     long total = 0;
     for (int i = 0; i < samples; i++)
     {
       read();
       total += sensorValue[0];
       delay(10); // Small delay between readings
     }
     return total / samples;
   }
   
   void SoilMoisture::onThresholdCross(int threshold, void (*callback)())
   {
     _callback = callback;
     if (isAboveThreshold(threshold) && _callback != nullptr)
     {
       _callback();
     }
   }
   
   /* Private function definitions --------------------------------------- */
   
   /* End of file -------------------------------------------------------- */
