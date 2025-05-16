
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_FloatParts.hpp:

Program Listing for File FloatParts.hpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_FloatParts.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Numbers\FloatParts.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Configuration.hpp>
   #include <ArduinoJson/Numbers/FloatTraits.hpp>
   #include <ArduinoJson/Polyfills/math.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TFloat>
   struct FloatParts {
     uint32_t integral;
     uint32_t decimal;
     int16_t exponent;
     int8_t decimalPlaces;
   
     FloatParts(TFloat value) {
       uint32_t maxDecimalPart = sizeof(TFloat) >= 8 ? 1000000000 : 1000000;
       decimalPlaces = sizeof(TFloat) >= 8 ? 9 : 6;
   
       exponent = normalize(value);
   
       integral = uint32_t(value);
       // reduce number of decimal places by the number of integral places
       for (uint32_t tmp = integral; tmp >= 10; tmp /= 10) {
         maxDecimalPart /= 10;
         decimalPlaces--;
       }
   
       TFloat remainder = (value - TFloat(integral)) * TFloat(maxDecimalPart);
   
       decimal = uint32_t(remainder);
       remainder = remainder - TFloat(decimal);
   
       // rounding:
       // increment by 1 if remainder >= 0.5
       decimal += uint32_t(remainder * 2);
       if (decimal >= maxDecimalPart) {
         decimal = 0;
         integral++;
         if (exponent && integral >= 10) {
           exponent++;
           integral = 1;
         }
       }
   
       // remove trailing zeros
       while (decimal % 10 == 0 && decimalPlaces > 0) {
         decimal /= 10;
         decimalPlaces--;
       }
     }
   
     static int16_t normalize(TFloat& value) {
       typedef FloatTraits<TFloat> traits;
       int16_t powersOf10 = 0;
   
       int8_t index = sizeof(TFloat) == 8 ? 8 : 5;
       int bit = 1 << index;
   
       if (value >= ARDUINOJSON_POSITIVE_EXPONENTIATION_THRESHOLD) {
         for (; index >= 0; index--) {
           if (value >= traits::positiveBinaryPowersOfTen()[index]) {
             value *= traits::negativeBinaryPowersOfTen()[index];
             powersOf10 = int16_t(powersOf10 + bit);
           }
           bit >>= 1;
         }
       }
   
       if (value > 0 && value <= ARDUINOJSON_NEGATIVE_EXPONENTIATION_THRESHOLD) {
         for (; index >= 0; index--) {
           if (value < traits::negativeBinaryPowersOfTen()[index] * 10) {
             value *= traits::positiveBinaryPowersOfTen()[index];
             powersOf10 = int16_t(powersOf10 - bit);
           }
           bit >>= 1;
         }
       }
   
       return powersOf10;
     }
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
