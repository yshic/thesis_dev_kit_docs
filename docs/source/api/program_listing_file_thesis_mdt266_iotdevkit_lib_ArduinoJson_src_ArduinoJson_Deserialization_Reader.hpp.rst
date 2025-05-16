
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Reader.hpp:

Program Listing for File Reader.hpp
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Reader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Reader.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   #include <ArduinoJson/Polyfills/utility.hpp>
   
   #include <stdlib.h>  // for size_t
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // The default reader is a simple wrapper for Readers that are not copiable
   template <typename TSource, typename Enable = void>
   struct Reader {
    public:
     Reader(TSource& source) : source_(&source) {}
   
     int read() {
       // clang-format off
       return source_->read();  // Error here? See https://arduinojson.org/v6/invalid-input/
       // clang-format on
     }
   
     size_t readBytes(char* buffer, size_t length) {
       return source_->readBytes(buffer, length);
     }
   
    private:
     TSource* source_;
   };
   
   template <typename TSource, typename Enable = void>
   struct BoundedReader {
     // no default implementation because we need to pass the size to the
     // constructor
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
   
   #include <ArduinoJson/Deserialization/Readers/IteratorReader.hpp>
   #include <ArduinoJson/Deserialization/Readers/RamReader.hpp>
   #include <ArduinoJson/Deserialization/Readers/VariantReader.hpp>
   
   #if ARDUINOJSON_ENABLE_ARDUINO_STREAM
   #  include <ArduinoJson/Deserialization/Readers/ArduinoStreamReader.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_ARDUINO_STRING
   #  include <ArduinoJson/Deserialization/Readers/ArduinoStringReader.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_PROGMEM
   #  include <ArduinoJson/Deserialization/Readers/FlashReader.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_STD_STREAM
   #  include <ArduinoJson/Deserialization/Readers/StdStreamReader.hpp>
   #endif
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TInput>
   Reader<typename remove_reference<TInput>::type> makeReader(TInput&& input) {
     return Reader<typename remove_reference<TInput>::type>{
         detail::forward<TInput>(input)};
   }
   
   template <typename TChar>
   BoundedReader<TChar*> makeReader(TChar* input, size_t inputSize) {
     return BoundedReader<TChar*>{input, inputSize};
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
