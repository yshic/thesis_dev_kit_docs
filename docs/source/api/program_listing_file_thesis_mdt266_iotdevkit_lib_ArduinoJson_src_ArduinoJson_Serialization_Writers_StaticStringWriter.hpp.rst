
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writers_StaticStringWriter.hpp:

Program Listing for File StaticStringWriter.hpp
===============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writers_StaticStringWriter.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Serialization\Writers\StaticStringWriter.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   class StaticStringWriter {
    public:
     StaticStringWriter(char* buf, size_t size) : end(buf + size), p(buf) {}
   
     size_t write(uint8_t c) {
       if (p >= end)
         return 0;
       *p++ = static_cast<char>(c);
       return 1;
     }
   
     size_t write(const uint8_t* s, size_t n) {
       char* begin = p;
       while (p < end && n > 0) {
         *p++ = static_cast<char>(*s++);
         n--;
       }
       return size_t(p - begin);
     }
   
    private:
     char* end;
     char* p;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
