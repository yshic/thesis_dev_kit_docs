
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_DeserializationOptions.hpp:

Program Listing for File DeserializationOptions.hpp
===================================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_DeserializationOptions.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\DeserializationOptions.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Deserialization/Filter.hpp>
   #include <ArduinoJson/Deserialization/NestingLimit.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TFilter>
   struct DeserializationOptions {
     TFilter filter;
     DeserializationOption::NestingLimit nestingLimit;
   };
   
   template <typename TFilter>
   inline DeserializationOptions<TFilter> makeDeserializationOptions(
       TFilter filter, DeserializationOption::NestingLimit nestingLimit = {}) {
     return {filter, nestingLimit};
   }
   
   template <typename TFilter>
   inline DeserializationOptions<TFilter> makeDeserializationOptions(
       DeserializationOption::NestingLimit nestingLimit, TFilter filter) {
     return {filter, nestingLimit};
   }
   
   inline DeserializationOptions<AllowAllFilter> makeDeserializationOptions(
       DeserializationOption::NestingLimit nestingLimit = {}) {
     return {{}, nestingLimit};
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
