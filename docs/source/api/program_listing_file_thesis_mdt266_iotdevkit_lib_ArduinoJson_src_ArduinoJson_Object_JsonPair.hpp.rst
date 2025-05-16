
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Object_JsonPair.hpp:

Program Listing for File JsonPair.hpp
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Object_JsonPair.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Object\JsonPair.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Strings/JsonString.hpp>
   #include <ArduinoJson/Variant/JsonVariant.hpp>
   #include <ArduinoJson/Variant/JsonVariantConst.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   // A key-value pair.
   // https://arduinojson.org/v6/api/jsonobject/begin_end/
   class JsonPair {
    public:
     // INTERNAL USE ONLY
     JsonPair(detail::MemoryPool* pool, detail::VariantSlot* slot) {
       if (slot) {
         key_ = JsonString(slot->key(), slot->ownsKey() ? JsonString::Copied
                                                        : JsonString::Linked);
         value_ = JsonVariant(pool, slot->data());
       }
     }
   
     // Returns the key.
     JsonString key() const {
       return key_;
     }
   
     // Returns the value.
     JsonVariant value() const {
       return value_;
     }
   
    private:
     JsonString key_;
     JsonVariant value_;
   };
   
   // A read-only key-value pair.
   // https://arduinojson.org/v6/api/jsonobjectconst/begin_end/
   class JsonPairConst {
    public:
     JsonPairConst(const detail::VariantSlot* slot) {
       if (slot) {
         key_ = JsonString(slot->key(), slot->ownsKey() ? JsonString::Copied
                                                        : JsonString::Linked);
         value_ = JsonVariantConst(slot->data());
       }
     }
   
     // Returns the key.
     JsonString key() const {
       return key_;
     }
   
     // Returns the value.
     JsonVariantConst value() const {
       return value_;
     }
   
    private:
     JsonString key_;
     JsonVariantConst value_;
   };
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
