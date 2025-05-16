
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_unit_4relay_src_unit_4relay.h:

Program Listing for File unit_4relay.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_unit_4relay_src_unit_4relay.h>` (``thesis_mdt266_iotdevkit\lib\unit_4relay\src\unit_4relay.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef UNIT_4RELAY_H
     #define UNIT_4RELAY_H
   
     /* Includes ----------------------------------------------------------- */
     #if ARDUINO >= 100
       #include "Arduino.h"
     #else
       #include "WProgram.h"
     #endif
   
     /* Public defines ----------------------------------------------------- */
     #define UNIT_4RELAY_LIB_VERSION (F("0.1.0"))
   
     #define UNIT_4RELAY_I2C_ADDR    0x26
     #define UNIT_4RELAY_REG         0x10
     #define UNIT_4RELAY_RELAY_REG   0x11
   
     #define UNIT_4RELAY_MAX_RELAYS  4
   /* Public enumerate/structure ----------------------------------------- */
   typedef enum
   {
     UNIT_4RELAY_OK = 0x2010, /* No error */
     UNIT_4RELAY_ERR,         /* Generic error */
     UNIT_4RELAY_ERR_INIT,    /* Initialization error */
     UNIT_4RELAY_ERR_INDEX,   /* Index error */
     UNIT_4RELAY_ERR_I2C,     /* I2C error */
   } unit_4relay_error_t;
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Class Declaration -------------------------------------------------- */
   class Unit4Relay
   {
   public:
     unit_4relay_error_t begin();
   
     unit_4relay_error_t init(bool mode);
   
     unit_4relay_error_t relayWrite(uint8_t number, bool state);
   
     unit_4relay_error_t relayAll(bool state);
   
     unit_4relay_error_t ledWrite(uint8_t number, bool state);
   
     unit_4relay_error_t ledAll(bool state);
   
     unit_4relay_error_t switchMode(bool mode);
   
     int getRelayState(uint8_t number);
   
     int getLedState(uint8_t number);
   
     void setRelayState(bool state[4]);
   
   private:
     bool relayState[4] = {false};
     bool ledState[4]   = {false};
   };
   
   #endif // UNIT_4RELAY_H
   
   /* End of file -------------------------------------------------------- */
