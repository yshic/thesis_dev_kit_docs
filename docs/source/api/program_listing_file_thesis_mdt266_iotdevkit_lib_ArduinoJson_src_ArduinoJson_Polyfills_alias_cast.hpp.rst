
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_alias_cast.hpp:

Program Listing for File alias_cast.hpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_alias_cast.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\alias_cast.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <stdint.h>
   #include <stdlib.h>  // for size_t
   
   #include <ArduinoJson/Configuration.hpp>
   #include "math.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T, typename F>
   struct alias_cast_t {
     union {
       F raw;
       T data;
     };
   };
   
   template <typename T, typename F>
   T alias_cast(F raw_data) {
     alias_cast_t<T, F> ac;
     ac.raw = raw_data;
     return ac.data;
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
