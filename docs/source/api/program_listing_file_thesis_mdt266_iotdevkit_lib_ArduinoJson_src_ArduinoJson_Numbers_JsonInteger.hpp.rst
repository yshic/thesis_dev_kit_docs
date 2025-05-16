
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_JsonInteger.hpp:

Program Listing for File JsonInteger.hpp
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_JsonInteger.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Numbers\JsonInteger.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Configuration.hpp>
   #include <ArduinoJson/Namespace.hpp>
   
   #include <stdint.h>  // int64_t
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   #if ARDUINOJSON_USE_LONG_LONG
   typedef int64_t JsonInteger;
   typedef uint64_t JsonUInt;
   #else
   typedef long JsonInteger;
   typedef unsigned long JsonUInt;
   #endif
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
   
   #define ARDUINOJSON_ASSERT_INTEGER_TYPE_IS_SUPPORTED(T)                  \
     static_assert(sizeof(T) <= sizeof(ArduinoJson::JsonInteger),           \
                   "To use 64-bit integers with ArduinoJson, you must set " \
                   "ARDUINOJSON_USE_LONG_LONG to 1. See "                   \
                   "https://arduinojson.org/v6/api/config/use_long_long/");
