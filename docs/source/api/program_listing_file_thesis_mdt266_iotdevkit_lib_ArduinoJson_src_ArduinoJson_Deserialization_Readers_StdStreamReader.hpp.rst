
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_StdStreamReader.hpp:

Program Listing for File StdStreamReader.hpp
============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_StdStreamReader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Readers\StdStreamReader.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <istream>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TSource>
   struct Reader<TSource, typename enable_if<
                              is_base_of<std::istream, TSource>::value>::type> {
    public:
     explicit Reader(std::istream& stream) : stream_(&stream) {}
   
     int read() {
       return stream_->get();
     }
   
     size_t readBytes(char* buffer, size_t length) {
       stream_->read(buffer, static_cast<std::streamsize>(length));
       return static_cast<size_t>(stream_->gcount());
     }
   
    private:
     std::istream* stream_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
