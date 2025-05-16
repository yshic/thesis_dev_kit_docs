
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_measure.hpp:

Program Listing for File measure.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_measure.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Serialization\measure.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Serialization/Writers/DummyWriter.hpp>
   #include <ArduinoJson/Variant/VariantFunctions.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <template <typename> class TSerializer>
   size_t measure(ArduinoJson::JsonVariantConst source) {
     DummyWriter dp;
     TSerializer<DummyWriter> serializer(dp);
     return variantAccept(VariantAttorney::getData(source), serializer);
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
