
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writer.hpp:

Program Listing for File Writer.hpp
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writer.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Serialization\Writer.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // The default writer is a simple wrapper for Writers that are not copiable
   template <typename TDestination, typename Enable = void>
   class Writer {
    public:
     explicit Writer(TDestination& dest) : dest_(&dest) {}
   
     size_t write(uint8_t c) {
       return dest_->write(c);
     }
   
     size_t write(const uint8_t* s, size_t n) {
       return dest_->write(s, n);
     }
   
    private:
     TDestination* dest_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
   
   #include <ArduinoJson/Serialization/Writers/StaticStringWriter.hpp>
   
   #if ARDUINOJSON_ENABLE_STD_STRING
   #  include <ArduinoJson/Serialization/Writers/StdStringWriter.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_ARDUINO_STRING
   #  include <ArduinoJson/Serialization/Writers/ArduinoStringWriter.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_STD_STREAM
   #  include <ArduinoJson/Serialization/Writers/StdStreamWriter.hpp>
   #endif
   
   #if ARDUINOJSON_ENABLE_ARDUINO_PRINT
   #  include <ArduinoJson/Serialization/Writers/PrintWriter.hpp>
   #endif
