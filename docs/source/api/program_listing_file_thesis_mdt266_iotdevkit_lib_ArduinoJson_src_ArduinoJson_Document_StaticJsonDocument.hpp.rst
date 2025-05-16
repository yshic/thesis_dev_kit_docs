
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Document_StaticJsonDocument.hpp:

Program Listing for File StaticJsonDocument.hpp
===============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Document_StaticJsonDocument.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Document\StaticJsonDocument.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Document/JsonDocument.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   // A JsonDocument with a memory pool on the stack.
   template <size_t desiredCapacity>
   class StaticJsonDocument : public JsonDocument {
     static const size_t capacity_ =
         detail::AddPadding<detail::Max<1, desiredCapacity>::value>::value;
   
    public:
     StaticJsonDocument() : JsonDocument(buffer_, capacity_) {}
   
     StaticJsonDocument(const StaticJsonDocument& src)
         : JsonDocument(buffer_, capacity_) {
       set(src);
     }
   
     template <typename T>
     StaticJsonDocument(
         const T& src,
         typename detail::enable_if<
             detail::is_convertible<T, JsonVariantConst>::value>::type* = 0)
         : JsonDocument(buffer_, capacity_) {
       set(src);
     }
   
     // disambiguate
     StaticJsonDocument(JsonVariant src) : JsonDocument(buffer_, capacity_) {
       set(src);
     }
   
     StaticJsonDocument& operator=(const StaticJsonDocument& src) {
       set(src);
       return *this;
     }
   
     template <typename T>
     StaticJsonDocument& operator=(const T& src) {
       set(src);
       return *this;
     }
   
     // Reclaims the memory leaked when removing and replacing values.
     // https://arduinojson.org/v6/api/jsondocument/garbagecollect/
     void garbageCollect() {
       StaticJsonDocument tmp(*this);
       set(tmp);
     }
   
    private:
     char buffer_[capacity_];
   };
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
