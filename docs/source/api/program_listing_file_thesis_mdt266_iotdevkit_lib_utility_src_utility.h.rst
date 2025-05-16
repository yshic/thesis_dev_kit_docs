
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_utility_src_utility.h:

Program Listing for File utility.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_utility_src_utility.h>` (``thesis_mdt266_iotdevkit\lib\utility\src\utility.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef UTILITY_H
     #define UTILITY_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     #include "Wire.h"
   
   /* Public defines ----------------------------------------------------- */
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   
   /* Public function prototypes ----------------------------------------- */
   
   void scanI2CDevices(void);
   
   uint8_t crc8(const uint8_t *data, int len);
   
   int compareVersion(String v1, String v2);
   
   #endif // UTILITY_H
   
   /* End of file -------------------------------------------------------- */
