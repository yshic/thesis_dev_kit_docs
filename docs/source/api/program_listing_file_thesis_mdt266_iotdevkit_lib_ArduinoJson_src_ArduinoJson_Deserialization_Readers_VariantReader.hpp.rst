
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_VariantReader.hpp:

Program Listing for File VariantReader.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_VariantReader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Readers\VariantReader.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Object/MemberProxy.hpp>
   #include <ArduinoJson/Variant/JsonVariantConst.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TVariant>
   struct Reader<TVariant, typename enable_if<IsVariant<TVariant>::value>::type>
       : Reader<char*, void> {
     explicit Reader(const TVariant& x)
         : Reader<char*, void>(x.template as<const char*>()) {}
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
