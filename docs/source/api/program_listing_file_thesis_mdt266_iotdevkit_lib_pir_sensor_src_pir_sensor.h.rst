
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_pir_sensor_src_pir_sensor.h:

Program Listing for File pir_sensor.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_pir_sensor_src_pir_sensor.h>` (``thesis_mdt266_iotdevkit\lib\pir_sensor\src\pir_sensor.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef PIR_SENSOR_H
     #define PIR_SENSOR_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
   /* Public defines ----------------------------------------------------- */
   
   /* Public enumerate/structure ----------------------------------------- */
   
   typedef enum
   {
     PIR_SENSOR_OK = 0,   /* No error */
     PIR_SENSOR_ERR,      /* Generic error */
     PIR_SENSOR_ERR_INIT, /* Initialization error */
     PIR_SENSOR_TIMEOUT   /* Timeout error */
   } pir_sensor_error_t;
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class PIRSensor
   {
   public:
     PIRSensor(uint8_t pin);
   
     void read();
   
     uint8_t getStatus();
   
     pir_sensor_error_t setDebounceTime(unsigned long debounceTime);
   
     int isMotionContinuous(unsigned long duration);
   
     unsigned long getLastMotionTime();
   
     pir_sensor_error_t setMotionCallback(void (*callback)());
   
     pir_sensor_error_t disableMotionCallback();
   
     pir_sensor_error_t setSensitivity(int level);
   
     int reset();
   
   private:
     uint8_t       _pin;            
     uint8_t       status;          
     unsigned long _lastMotionTime; 
     unsigned long _debounceTime;   
     void (*_motionCallback)();     
   };
   
   #endif // PIR_SENSOR_H
   
   /* End of file -------------------------------------------------------- */
