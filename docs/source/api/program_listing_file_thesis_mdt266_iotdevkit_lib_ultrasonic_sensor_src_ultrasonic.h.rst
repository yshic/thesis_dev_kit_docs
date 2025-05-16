
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ultrasonic_sensor_src_ultrasonic.h:

Program Listing for File ultrasonic.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ultrasonic_sensor_src_ultrasonic.h>` (``thesis_mdt266_iotdevkit\lib\ultrasonic_sensor\src\ultrasonic.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef ULTRASONIC_H
     #define ULTRASONIC_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define ULTRASONIC_LIB_VERSION (F("0.1.0"))
   
     #define CM_DIVISOR             58
     #define MM_DIVISOR             5.8
     #define IN_DIVISOR             148
   
     #define CM_INDEX               0
     #define MM_INDEX               1
     #define IN_INDEX               2
   /* Public enumerate/structure ----------------------------------------- */
   typedef enum
   {
     ULTRASONIC_OK,        /* No error */
     ULTRASONIC_ERR,       /* Generic error */
     ULTRASONIC_INIT_ERR,  /* Initialization error */
     ULTRASONIC_RESET_ERR, /* Reset error */
     ULTRASONIC_TIMEOUT,   /* Timeout error*/
   } ultrasonic_error_t;
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class Ultrasonic
   {
   private:
     uint8_t       triggerPin;
     uint8_t       echoPin;
     unsigned int  distance[3];
     unsigned long timeout;
   
     unsigned int duration();
   
   public:
     Ultrasonic(uint8_t _triggerPin, uint8_t _echoPin, unsigned long timeOut = 20000UL);
   
     void read(char unit);
   
     unsigned int getDistance(char unit);
   
     inline void setTimeout(unsigned long timeOut) { timeout = timeOut; }
   };
   
   #endif // ULTRASONIC_H
   
   /* End of file -------------------------------------------------------- */
