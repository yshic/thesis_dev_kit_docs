
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_relay_src_relay.cpp:

Program Listing for File relay.cpp
==================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_relay_src_relay.cpp>` (``thesis_mdt266_iotdevkit\lib\relay\src\relay.cpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Includes ----------------------------------------------------------- */
   #include "relay.h"
   #include "bsp_gpio.h"
   
   /* Private defines ---------------------------------------------------- */
   
   /* Private enumerate/structure ---------------------------------------- */
   
   /* Private macros ----------------------------------------------------- */
   
   /* Public variables --------------------------------------------------- */
   
   /* Private variables -------------------------------------------------- */
   
   /* Class method Definitions ---------------------------------- */
   
   // Constructor
   Relay::Relay(int pin) : _pin(pin), status(false) { bspGpioPinMode(_pin, OUTPUT); }
   
   void Relay::on()
   {
     status = true;
     bspGpioDigitalWrite(_pin, HIGH);
   }
   
   void Relay::off()
   {
     status = false;
     bspGpioDigitalWrite(_pin, LOW);
   }
   
   void Relay::toggle()
   {
     if (status)
     {
       off();
     }
     else
     {
       on();
     }
   }
   
   bool Relay::getStatus() { return status; }
   /* Private function definitions --------------------------------------- */
   
   /* End of file -------------------------------------------------------- */
