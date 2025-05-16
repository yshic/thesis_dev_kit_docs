
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_relay_src_relay.h:

Program Listing for File relay.h
================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_relay_src_relay.h>` (``thesis_mdt266_iotdevkit\lib\relay\src\relay.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef RELAY_H
     #define RELAY_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
   /* Public defines ----------------------------------------------------- */
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   class Relay
   {
   public:
     Relay(int pin);
   
     void on();
   
     void off();
   
     void toggle();
   
     bool getStatus();
   
   private:
     uint8_t _pin;
     bool    status;
   };
   
   #endif // RELAY_H
   
   /* End of file -------------------------------------------------------- */
