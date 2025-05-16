
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_bmp280_src_bmp280.h:

Program Listing for File bmp280.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_bmp280_src_bmp280.h>` (``thesis_mdt266_iotdevkit\lib\bmp280\src\bmp280.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef BMP280_H
     #define BMP280_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define BMP280_LIB_VERSION (F("0.1.0"))
   
     #define BMP280_I2C_ADDR    0x76
   /* Public enumerate/structure ----------------------------------------- */
   typedef enum
   {
     BMP280_OK = 0,       /* No error */
     BMP280_ERR,          /* Generic error */
     BMP280_ERR_INIT,     /* Initialization error */
     BMP280_ERR_RESET,    /* Reset error */
     BMP280_TIMEOUT,      /* Timeout error*/
     BMP280_ERR_I2C,      /* I2C error */
     BMP280_ERR_DIV_ZERO, /* Divide by 0 error */
     BMP280_ERR_CHECKSUM  /* Checksum error */
   } bmp280_error_t;
   
   typedef enum
   {
     SAMPLING_NONE = 0x00, 
     SAMPLING_X1   = 0x01, 
     SAMPLING_X2   = 0x02, 
     SAMPLING_X4   = 0x03, 
     SAMPLING_X8   = 0x04, 
     SAMPLING_X16  = 0x05  
   } bmp280_sampling_t;
   
   typedef enum
   {
     MODE_SLEEP           = 0x00, 
     MODE_FORCED          = 0x01, 
     MODE_NORMAL          = 0x03, 
     MODE_SOFT_RESET_CODE = 0xB6  
   } bmp280_mode_t;
   
   typedef enum
   {
     FILTER_OFF = 0x00, 
     FILTER_X2  = 0x01, 
     FILTER_X4  = 0x02, 
     FILTER_X8  = 0x03, 
     FILTER_X16 = 0x04  
   } bmp280_filter_t;
   
   typedef enum
   {
     STANDBY_MS_1    = 0x00, 
     STANDBY_MS_63   = 0x01, 
     STANDBY_MS_125  = 0x02, 
     STANDBY_MS_250  = 0x03, 
     STANDBY_MS_500  = 0x04, 
     STANDBY_MS_1000 = 0x05, 
     STANDBY_MS_2000 = 0x06, 
     STANDBY_MS_4000 = 0x07  
   } bmp280_standby_duration_t;
   
   enum
   {
     BMP280_REGISTER_DIG_T1       = 0x88,
     BMP280_REGISTER_DIG_T2       = 0x8A,
     BMP280_REGISTER_DIG_T3       = 0x8C,
     BMP280_REGISTER_DIG_P1       = 0x8E,
     BMP280_REGISTER_DIG_P2       = 0x90,
     BMP280_REGISTER_DIG_P3       = 0x92,
     BMP280_REGISTER_DIG_P4       = 0x94,
     BMP280_REGISTER_DIG_P5       = 0x96,
     BMP280_REGISTER_DIG_P6       = 0x98,
     BMP280_REGISTER_DIG_P7       = 0x9A,
     BMP280_REGISTER_DIG_P8       = 0x9C,
     BMP280_REGISTER_DIG_P9       = 0x9E,
     BMP280_REGISTER_CHIPID       = 0xD0,
     BMP280_REGISTER_VERSION      = 0xD1,
     BMP280_REGISTER_SOFTRESET    = 0xE0,
     BMP280_REGISTER_CAL26        = 0xE1, 
     BMP280_REGISTER_STATUS       = 0xF3,
     BMP280_REGISTER_CONTROL      = 0xF4,
     BMP280_REGISTER_CONFIG       = 0xF5,
     BMP280_REGISTER_PRESSUREDATA = 0xF7,
     BMP280_REGISTER_TEMPDATA     = 0xFA,
   };
   
   typedef struct
   {
     uint16_t dig_T1; 
     int16_t  dig_T2; 
     int16_t  dig_T3; 
     uint16_t dig_P1; 
     int16_t  dig_P2; 
     int16_t  dig_P3; 
     int16_t  dig_P4; 
     int16_t  dig_P5; 
     int16_t  dig_P6; 
     int16_t  dig_P7; 
     int16_t  dig_P8; 
     int16_t  dig_P9; 
   } bmp280_calib_data;
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class BMP280
   {
   public:
     bmp280_error_t begin();
   
     bmp280_error_t update();
   
     bmp280_error_t reset(void);
   
     uint8_t getStatus(void);
   
     bmp280_error_t readPressure();
   
     bmp280_error_t readTemperature();
   
     bmp280_error_t readAltitude();
   
     float getPressure();
   
     float getTemperature();
   
     float getAltitude();
   
     float seaLevelForAltitude(float altitude, float atmospheric);
   
     void setSeaLevelPressure(float pressure);
   
     float waterBoilingPoint(float pressure);
   
     bool takeForcedMeasurement();
   
     bmp280_error_t setSampling(bmp280_mode_t mode = MODE_NORMAL, bmp280_sampling_t tempSampling = SAMPLING_X16,
                                bmp280_sampling_t         pressSampling = SAMPLING_X16,
                                bmp280_filter_t           filter        = FILTER_OFF,
                                bmp280_standby_duration_t duration      = STANDBY_MS_1);
   
   private:
     float sensorValue[3] = {0.f}; // Index 0: Pressure
                                   // Index 1: Temperature
                                   // Index 2: Altitude
   
     float _seaLevelhPa = 1013.25f;
   
     struct config
     {
       config() : t_sb(STANDBY_MS_1), filter(FILTER_OFF), none(0), spi3w_en(0) {}
       unsigned int t_sb     : 3;
       unsigned int filter   : 3;
       unsigned int none     : 1;
       unsigned int spi3w_en : 1;
       unsigned int get() { return (t_sb << 5) | (filter << 2) | spi3w_en; }
     };
   
     struct ctrl_meas
     {
       ctrl_meas() : osrs_t(SAMPLING_NONE), osrs_p(SAMPLING_NONE), mode(MODE_SLEEP) {}
       unsigned int osrs_t : 3;
       unsigned int osrs_p : 3;
       unsigned int mode   : 2;
       unsigned int get() { return (osrs_t << 5) | (osrs_p << 2) | mode; }
     };
   
     bmp280_error_t readCoefficients(void);
     uint16_t       read16(byte reg);
     uint32_t       read24(byte reg);
     int16_t        readS16(byte reg);
     uint16_t       read16_LE(byte reg);
     int16_t        readS16_LE(byte reg);
   
     int32_t           t_fine;
     bmp280_calib_data _bmp280_calib;
     config            _configReg;
     ctrl_meas         _measReg;
   };
   
   #endif // BMP280_H
   
   /* End of file -------------------------------------------------------- */
