
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_NestingLimit.hpp:

Program Listing for File NestingLimit.hpp
=========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_NestingLimit.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\NestingLimit.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   #include <ArduinoJson/Polyfills/assert.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   namespace DeserializationOption {
   class NestingLimit {
    public:
     NestingLimit() : value_(ARDUINOJSON_DEFAULT_NESTING_LIMIT) {}
     explicit NestingLimit(uint8_t n) : value_(n) {}
   
     NestingLimit decrement() const {
       ARDUINOJSON_ASSERT(value_ > 0);
       return NestingLimit(static_cast<uint8_t>(value_ - 1));
     }
   
     bool reached() const {
       return value_ == 0;
     }
   
    private:
     uint8_t value_;
   };
   }  // namespace DeserializationOption
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
