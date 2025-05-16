
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_bsp_bsp_pwm.h:

Program Listing for File bsp_pwm.h
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_bsp_bsp_pwm.h>` (``thesis_mdt266_iotdevkit\lib\bsp\bsp_pwm.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef BSP_PWM_H
   #define BSP_PWM_H
   
   /* Includes ----------------------------------------------------------- */
   #if ARDUINO >= 100
     #include "Arduino.h"
   #else
     #include "WProgram.h"
   #endif
   
   #include "esp32-hal-ledc.h"
   /* Public defines ----------------------------------------------------- */
   #define BSP_PWM_LIB_VERSION (F("0.1.0"))
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   class BspPwm {
     public:
     private:
   };
   
   #endif // BSP_PWM_H
   
   /* End of file -------------------------------------------------------- */
