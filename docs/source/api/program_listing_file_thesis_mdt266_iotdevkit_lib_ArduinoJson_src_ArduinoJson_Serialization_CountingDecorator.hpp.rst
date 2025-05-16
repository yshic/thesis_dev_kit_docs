
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_CountingDecorator.hpp:

Program Listing for File CountingDecorator.hpp
==============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_CountingDecorator.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Serialization\CountingDecorator.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TWriter>
   class CountingDecorator {
    public:
     explicit CountingDecorator(TWriter& writer) : writer_(writer), count_(0) {}
   
     void write(uint8_t c) {
       count_ += writer_.write(c);
     }
   
     void write(const uint8_t* s, size_t n) {
       count_ += writer_.write(s, n);
     }
   
     size_t count() const {
       return count_;
     }
   
    private:
     TWriter writer_;
     size_t count_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
