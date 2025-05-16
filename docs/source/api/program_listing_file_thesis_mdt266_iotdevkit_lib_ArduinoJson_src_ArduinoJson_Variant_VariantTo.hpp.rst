
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_VariantTo.hpp:

Program Listing for File VariantTo.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_VariantTo.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Variant\VariantTo.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   class JsonArray;
   class JsonObject;
   class JsonVariant;
   ARDUINOJSON_END_PUBLIC_NAMESPACE
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   // A metafunction that returns the type of the value returned by
   // JsonVariant::to<T>()
   template <typename T>
   struct VariantTo {};
   
   template <>
   struct VariantTo<JsonArray> {
     typedef JsonArray type;
   };
   template <>
   struct VariantTo<JsonObject> {
     typedef JsonObject type;
   };
   template <>
   struct VariantTo<JsonVariant> {
     typedef JsonVariant type;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
