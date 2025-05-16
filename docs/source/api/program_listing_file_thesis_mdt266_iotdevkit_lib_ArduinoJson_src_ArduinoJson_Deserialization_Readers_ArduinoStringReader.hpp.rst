
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_ArduinoStringReader.hpp:

Program Listing for File ArduinoStringReader.hpp
================================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_ArduinoStringReader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Readers\ArduinoStringReader.hpp``)

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
                 typename enable_if<is_base_of<::String, TSource>::value>::type>
       : BoundedReader<const char*> {
     explicit Reader(const ::String& s)
         : BoundedReader<const char*>(s.c_str(), s.length()) {}
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
