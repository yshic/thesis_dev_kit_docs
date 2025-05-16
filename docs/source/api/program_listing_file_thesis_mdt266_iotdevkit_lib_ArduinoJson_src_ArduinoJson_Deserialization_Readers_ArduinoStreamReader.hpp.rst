
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_ArduinoStreamReader.hpp:

Program Listing for File ArduinoStreamReader.hpp
================================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_ArduinoStreamReader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Readers\ArduinoStreamReader.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <Arduino.h>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TSource>
   struct Reader<TSource,
                 typename enable_if<is_base_of<Stream, TSource>::value>::type> {
    public:
     explicit Reader(Stream& stream) : stream_(&stream) {}
   
     int read() {
       // don't use stream_.read() as it ignores the timeout
       char c;
       return stream_->readBytes(&c, 1) ? static_cast<unsigned char>(c) : -1;
     }
   
     size_t readBytes(char* buffer, size_t length) {
       return stream_->readBytes(buffer, length);
     }
   
    private:
     Stream* stream_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
