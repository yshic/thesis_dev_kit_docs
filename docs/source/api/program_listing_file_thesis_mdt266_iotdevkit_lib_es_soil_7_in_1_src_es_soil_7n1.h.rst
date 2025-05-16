
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_es_soil_7_in_1_src_es_soil_7n1.h:

Program Listing for File es_soil_7n1.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_es_soil_7_in_1_src_es_soil_7n1.h>` (``thesis_mdt266_iotdevkit\lib\es_soil_7_in_1\src\es_soil_7n1.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef ES_SOIL_7N1_H
     #define ES_SOIL_7N1_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define ES_SOIL_7N1_LIB_VERSION (F("0.1.0"))
   
   // #define DEBUG_PRINT_ES_SOIL_RAW_RESPONSE
   
   /* Public enumerate/structure ----------------------------------------- */
   
   // Error code for ES Soil 7 in 1
   typedef enum
   {
     ES_SOIL_7N1_OK = 0,
     ES_SOIL_7N1_ERR,
     ES_SOIL_7N1_ERR_READ,
     ES_SOIL_7N1_ERR_WRITE,
     ES_SOIL_7N1_TIMEOUT
   } es_soil_7n1_error_t;
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   class EsSoil7n1
   {
   public:
     /* Read methods ------------------------------------------------------ */
   
     es_soil_7n1_error_t readSoilPh();
   
     es_soil_7n1_error_t readSoilMoisture();
   
     es_soil_7n1_error_t readSoilTemperature();
   
     es_soil_7n1_error_t readSoilConductivity();
   
     es_soil_7n1_error_t readSoilNitrogen();
   
     es_soil_7n1_error_t readSoilPhosphorus();
   
     es_soil_7n1_error_t readSoilPotassium();
   
     es_soil_7n1_error_t readSoilTempAndMoisture();
   
     es_soil_7n1_error_t readSoilNPK();
   
     /* Getter methods ------------------------------------------------------ */
   
     float getSoilPh();
   
     float getSoilMoisture();
   
     float getSoilTemperature();
   
     float getSoilConductivity();
   
     float getSoilNitrogen();
   
     float getSoilPhosphorus();
   
     float getSoilPotassium();
   
   private:
     uint8_t address         = 0x01;
     float   sensorValues[7] = {0.0}; // index 0 - pH
                                      // index 1 - Moisture
                                      // index 2 - Temperature
                                      // index 3 - Conductivity
                                      // index 4 - Nitrogen
                                      // index 5 - Phosphorus
                                      // index 6 - Potassium
   };
   
   #endif // ES_SOIL_7N1_H
   
   /* End of file -------------------------------------------------------- */
