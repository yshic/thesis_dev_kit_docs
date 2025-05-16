
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_bsp_bsp_gpio.h:

Program Listing for File bsp_gpio.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_bsp_bsp_gpio.h>` (``thesis_mdt266_iotdevkit\lib\bsp\bsp_gpio.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   
   /* Define to prevent recursive inclusion ------------------------------ */
   #ifndef BSP_GPIO_H
     #define BSP_GPIO_H
   
     /* Includes ----------------------------------------------------------- */
     #include <Arduino.h>
   
   /* Public defines ----------------------------------------------------- */
   
   /* Public enumerate/structure ----------------------------------------- */
   
   /* Public macros ------------------------------------------------------ */
   
   /* Public variables --------------------------------------------------- */
   
   /* Public function prototypes ----------------------------------------- */
   
   void bspGpioPinMode(uint8_t pin, uint8_t mode);
   
   /* Digital Pin -------------------------------------------------------- */
   
   void bspGpioDigitalWrite(uint8_t pin, uint8_t state);
   
   bool bspGpioDigitalRead(uint8_t pin);
   
   /* Analog Pin -------------------------------------------------------- */
   
   int bspGpioAnalogRead(uint8_t pin);
   
   void bspGpioAnalogReadResolution(uint8_t bits);
   
   void bspGpioAnalogWrite(uint8_t pin, int value);
   
   void bspGpioAnalogWriteResolution(uint8_t bits);
   
   /* Advanced I/O ------------------------------------------------------- */
   
   unsigned long bspGpioPulseIn(uint8_t pin, uint8_t state, unsigned long timeout = 1000000UL);
   
   unsigned long bspGpioPulseInLong(uint8_t pin, uint8_t state, unsigned long timeout = 1000000UL);
   
   uint8_t bspGpioShiftIn(uint8_t dataPin, uint8_t clockPin, uint8_t bitOrder);
   
   void bspGpioShiftOut(uint8_t dataPin, uint8_t clockPin, uint8_t bitOrder, uint8_t val);
   
   void bspGpioTone(uint8_t pin, unsigned int frequency, unsigned long duration);
   
   void bspGpioNoTone(uint8_t pin);
   
   
   
   
   #endif /* BSP_GPIO_H */
   
   /* End of file -------------------------------------------------------- */
