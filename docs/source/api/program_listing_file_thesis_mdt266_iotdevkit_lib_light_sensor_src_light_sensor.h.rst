
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_light_sensor_src_light_sensor.h:

Program Listing for File light_sensor.h
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_light_sensor_src_light_sensor.h>` (``thesis_mdt266_iotdevkit\lib\light_sensor\src\light_sensor.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef LIGHT_SENSOR_H
     #define LIGHT_SENSOR_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
   /* Public defines ----------------------------------------------------- */
   typedef enum
   {
     LIGHT_SENSOR_OK = 0,   /* No error */
     LIGHT_SENSOR_ERR,      /* Generic error */
     LIGHT_SENSOR_ERR_INIT, /* Initialization error */
     LIGHT_SENSOR_TIMEOUT,  /* Timeout error*/
   } light_sensor_error_t;
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class LightSensor
   {
   public:
     LightSensor(int pin);
   
     light_sensor_error_t read();
   
     int readAndMap(int minValue, int maxValue);
   
     bool isAboveThreshold(int threshold);
   
     int getLightValue();
   
     int getLightValuePercentage();
   
     int getAverageReading(int samples = 10);
   
     light_sensor_error_t onThresholdCross(int threshold, void (*callback)());
   
   private:
     int      _pin;                 
     uint32_t sensorValue[2];       
     void (*_callback)() = nullptr; 
   };
   
   #endif // LIGHT_SENSOR_H
   
   /* End of file -------------------------------------------------------- */
