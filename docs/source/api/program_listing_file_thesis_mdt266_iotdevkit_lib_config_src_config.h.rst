
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_config_src_config.h:

Program Listing for File config.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_config_src_config.h>` (``thesis_mdt266_iotdevkit\lib\config\src\config.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef CONFIG_H
     #define CONFIG_H
   
   /* Includes ----------------------------------------------------------- */
   
   /* Private defines ---------------------------------------------------- */
     #define USE_FREERTOS
   
     #ifndef DELAY
       #ifdef USE_FREERTOS
         #define DELAY(ms) vTaskDelay(ms / portTICK_PERIOD_MS)
       #else
         #define DELAY(ms) delay(ms)
       #endif
     #endif
   
     #ifndef DEBUG_PRINT
       #define DEBUG_PRINT
     #endif // DEBUG_PRINT
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Public function prototypes ----------------------------------------- */
   
   #endif // CONFIG_H
   
   /* End of file -------------------------------------------------------- */
