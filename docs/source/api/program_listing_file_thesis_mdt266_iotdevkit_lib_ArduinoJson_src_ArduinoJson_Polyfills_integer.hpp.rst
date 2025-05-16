
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_integer.hpp:

Program Listing for File integer.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_integer.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\integer.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <stdint.h>  // int8_t, int16_t
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <int Bits>
   struct int_t;
   
   template <>
   struct int_t<8> {
     typedef int8_t type;
   };
   
   template <>
   struct int_t<16> {
     typedef int16_t type;
   };
   
   template <>
   struct int_t<32> {
     typedef int32_t type;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
