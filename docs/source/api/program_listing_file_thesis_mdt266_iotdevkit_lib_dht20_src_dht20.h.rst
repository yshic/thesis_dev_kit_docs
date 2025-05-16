
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_dht20_src_dht20.h:

Program Listing for File dht20.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_dht20_src_dht20.h>` (``thesis_mdt266_iotdevkit\lib\dht20\src\dht20.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef DHT20_H
     #define DHT20_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define DHT20_LIB_VERSION       (F("0.1.0"))
   
     #define DHT20_I2C_ADDR          0x38
     #define DHT20_HUMIDITY_INDEX    0
     #define DHT20_TEMPERATURE_INDEX 1
   
   /* Public enumerate/structure ----------------------------------------- */
   typedef enum
   {
     DHT20_OK = 0,       /* No error */
     DHT20_ERR,          /* Generic error */
     DHT20_ERR_INIT,     /* Initialization error */
     DHT20_ERR_RESET,    /* Reset error */
     DHT20_TIMEOUT,      /* Timeout error*/
     DHT20_ERR_I2C_READ, /* I2C Read error */
     DHT20_ERR_I2C_WRITE /* I2C Write error */
   } dht20_error_t;
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class DHT20
   {
   public:
     DHT20();
   
     dht20_error_t begin();
   
     dht20_error_t readTempAndHumidity();
   
     float getHumidity();
   
     float getTemperature();
   
   private:
     float sensorValue[2];
   
     dht20_error_t readTargetData(uint32_t *data);
   
     int readStatus();
   
     int reset();
   
     bool _resetRegister(uint8_t reg);
   };
   
   #endif // DHT20_H
   
   /* End of file -------------------------------------------------------- */
