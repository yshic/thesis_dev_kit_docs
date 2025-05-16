
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_sht4x_src_sht4x.h:

Program Listing for File sht4x.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_sht4x_src_sht4x.h>` (``thesis_mdt266_iotdevkit\lib\sht4x\src\sht4x.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef SHT4X_H
     #define SHT4X_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define SHT4X_LIB_VERSION              (F("0.1.0"))
   
     #define SHT40_I2C_ADDR_44              0x44
     #define SHT40_I2C_ADDR_45              0x45
     #define SHT41_I2C_ADDR_44              0x44
     #define SHT41_I2C_ADDR_45              0x45
     #define SHT45_I2C_ADDR_44              0x44
     #define SHT45_I2C_ADDR_45              0x45
   
     #define SHT4X_HUMIDITY_INDEX           0
     #define SHT4X_TEMPERATURE_INDEX        1
   
     #define SHT4x_CMD_NOHEAT_HIGHPRECISION 0xFD 
     #define SHT4x_CMD_NOHEAT_MEDPRECISION  0xF6 
     #define SHT4x_CMD_NOHEAT_LOWPRECISION  0xE0 
   
     #define SHT4x_CMD_HIGHHEAT_1S          0x39 
     #define SHT4x_CMD_HIGHHEAT_100MS       0x32 
     #define SHT4x_CMD_MEDHEAT_1S           0x2F 
     #define SHT4x_CMD_MEDHEAT_100MS        0x24 
     #define SHT4x_CMD_LOWHEAT_1S           0x1E 
     #define SHT4x_CMD_LOWHEAT_100MS        0x15 
   
     #define SHT4x_READSERIAL               0x89 
     #define SHT4x_SOFTRESET                0x94 
   
   /* Public enumerate/structure ----------------------------------------- */
   
   typedef enum
   {
     SHT4X_OK = 0,      /* No error */
     SHT4X_ERR,         /* Generic error */
     SHT4X_ERR_INIT,    /* Initialization error */
     SHT4X_ERR_RESET,   /* Reset error */
     SHT4X_TIMEOUT,     /* Timeout error*/
     SHT4X_ERR_I2C,     /* I2C error */
     SHT4X_ERR_CHECKSUM /* Checksum error */
   } sht4x_error_t;
   
   typedef enum
   {
     SHT4X_HIGH_PRECISION,
     SHT4X_MED_PRECISION,
     SHT4X_LOW_PRECISION,
   } sht4x_precision_t;
   
   typedef enum
   {
     SHT4X_NO_HEATER,
     SHT4X_HIGH_HEATER_1S,
     SHT4X_HIGH_HEATER_100MS,
     SHT4X_MED_HEATER_1S,
     SHT4X_MED_HEATER_100MS,
     SHT4X_LOW_HEATER_1S,
     SHT4X_LOW_HEATER_100MS,
   } sht4x_heater_t;
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class SHT4X
   {
   public:
     sht4x_error_t begin();
   
     sht4x_error_t update(void);
   
     void setPrecision(sht4x_precision_t prec);
   
     sht4x_precision_t getPrecision(void);
   
     void setHeater(sht4x_heater_t heat);
   
     sht4x_heater_t getHeater(void);
   
     float getTemperature();
   
     float getHumidity();
   
   private:
     float sensorValue[2] = {0.f}; // Humidity: index 0
                                   // Temperature: index 1
     sht4x_precision_t _precision = SHT4X_HIGH_PRECISION;
     sht4x_heater_t    _heater    = SHT4X_NO_HEATER;
   };
   
   #endif // SHT40_h
   
   /* End of file -------------------------------------------------------- */
