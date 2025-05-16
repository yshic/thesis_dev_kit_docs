
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_math.hpp:

Program Listing for File math.hpp
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_math.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\math.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // Some libraries #define isnan() and isinf() so we need to check before
   // using this name
   
   #ifndef isnan
   template <typename T>
   bool isnan(T x) {
     return x != x;
   }
   #endif
   
   #ifndef isinf
   template <typename T>
   bool isinf(T x) {
     return x != 0.0 && x * 2 == x;
   }
   #endif
   ARDUINOJSON_END_PRIVATE_NAMESPACE
